import {loadStripe} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from './CheckOut';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLISHABLE_KEY)
const Payment = () => {
    return (
        <div>
            <h1 className="text-center text-2xl font-medium">Payment </h1>
                <div className="">
                    <Elements stripe={stripePromise}>
                        <CheckOut></CheckOut>
                    </Elements>
                </div>
        </div>
    );
};

export default Payment;