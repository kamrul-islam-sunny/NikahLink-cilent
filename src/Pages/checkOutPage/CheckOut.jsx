import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { Label, TextInput } from "flowbite-react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import useSingleBioData from "../../Hooks/useSingleBioData";

const CheckOut = () => {
  const stripe = useStripe();
  const { bioDataId } = useParams();
  const currentUser = useSingleBioData();
  const elements = useElements();
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const totalPrice = 5;
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // confirmError
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirmError", confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        const payment = {
          name: currentUser.name,
          email: user.email,
          price: totalPrice,
          bioDataId: bioDataId,
          transactionId: paymentIntent.id,
          date: new Date(),
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log(res.data);
        if (res.data?.insertedId) {
          toast.success("payment successfully.");
          // navigate('/dashboard/paymentHistory')
        }
      }
    }
  };
  return (
    <div className="max-w-lg border rounded-lg p-4 mx-auto my-10">
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Requested Biodata ID" />
          </div>
          <TextInput
            defaultValue={bioDataId}
            readOnly
            id="base"
            type="text"
            sizing="md"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Your Email Address" />
          </div>
          <TextInput
            id="base"
            defaultValue={user?.email}
            readOnly
            type="text"
            sizing="md"
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="card-element"
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
              color: "#424770",
              fontSize: "14px",
            }}
          >
            Card Details
          </label>
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "12px",
            }}
          >
            <CardElement
              id="card-element"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 rounded-lg text-white"
          disabled={!stripe || !clientSecret}
        >
          Submit Button
        </button>
        <p className="text-red-600 text-4xl ">{error}</p>
      </form>
    </div>
  );
};

export default CheckOut;
