import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "flowbite-react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";


const ApprovedConReq = () => {
  const axiosPublic = useAxiosPublic();

  const { data: payments, refetch } = useQuery({
    queryKey: ["contactReq"],
    queryFn: async () => {
      const res = await axiosPublic.get("/payments");
      return res.data;
    },
  });


  const handleApproved = (id) =>{
    axiosPublic.patch(`/contact-request-approver/${id}`)
    .then((res) => {
      if(res.data.modifiedCount > 0)
        {
          toast.success('User Contact request Approved.')
        }
      refetch();
    });
  }
  return (
    <div className="p-6">
      <h1 className="text-center text-3xl font-bold py-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500">Contact Requests</h1>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Biodata ID</Table.HeadCell>
          <Table.HeadCell>Approved Contact Request</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {payments?.map((request, index) => (
            <Table.Row
              key={index}
              className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-50"
            >
              <Table.Cell className="font-medium text-gray-900 dark:text-white">
                {request?.name}
              </Table.Cell>
              <Table.Cell>{request?.email}</Table.Cell>
              <Table.Cell>{request?.bioDataId}</Table.Cell>
              <Table.Cell>
                {request?.status === "pending" ? (
                  <Button
                    onClick={()=>handleApproved(request?._id)}
                    className="bg-blue-200 text-blue-500 font-semibold"
                    color="gray"
                    size="xs"
                  >
                    Approved
                  </Button>
                ) : (
                  <span className="text-green-500 font-semibold">Approved </span>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ApprovedConReq;
