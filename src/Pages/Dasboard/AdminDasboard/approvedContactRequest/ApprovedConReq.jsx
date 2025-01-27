import { useQuery } from "@tanstack/react-query";
import { Table } from "flowbite-react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ApprovedConReq = () => {
    const axiosSecure = useAxiosSecure()
    const {data: payments = [] } = useQuery({
        queryKey:['contactReq'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/payments')
            return res.data
        }
    }) 
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Requests</h1>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Biodata ID</Table.HeadCell>
          <Table.HeadCell>Approved Contact Request</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {payments.map((request, index) => (
            <Table.Row
              key={index}
              className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-50"
            >
              <Table.Cell className="font-medium text-gray-900 dark:text-white">
                {request.name}
              </Table.Cell>
              <Table.Cell>{request.email}</Table.Cell>
              <Table.Cell>{request.biodataId}</Table.Cell>
              <Table.Cell>
                {request.isApproved ? (
                  <span className="text-green-600 font-semibold">Approved</span>
                ) : (
                  <span className="text-red-600 font-semibold">Pending</span>
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
