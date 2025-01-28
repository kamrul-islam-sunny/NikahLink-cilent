import { useQuery } from "@tanstack/react-query";
import {  Spinner, Table } from "flowbite-react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAuth from "../../../../Hooks/useAuth";
import { FaDeleteLeft } from "react-icons/fa6";
import toast from "react-hot-toast";

const MyContactReq = () => {
  const axiosPublic = useAxiosPublic();
  const { user, loading } = useAuth();
  const { data: allContactReq, refetch } = useQuery({
    queryKey: ["[allPaymentData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/payments");
      return res.data;
    },
  });

  if (loading) {
    return (
      <div className="text-center">
        <Spinner
          aria-label="Center-aligned Extra large spinner example"
          size="xl"
        />
      </div>
    );
  }

  const handleDelete = (id) => {
    axiosPublic.patch(`/delete-request/${id}`)
    .then((res) => {
      if(res.data.modifiedCount > 0)
        {
          toast.success('Deleted Successfully.')
        }
      refetch();
    });
  };

  return (
    <div className="px-4">
      <h1 className="text-center text-3xl font-bold py-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500">My Contact Request</h1>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Id</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Mobile No</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row></Table.Row>
            {allContactReq?.map((req) =>
              req.email === user?.email && !req?.isDelete ? (
                <Table.Row
                  key={req._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800 "
                >
                  <Table.Cell className="whitespace-pre-wrap  font-medium text-sm text-gray-900 dark:text-white">
                    {req?.bioDataName}
                  </Table.Cell>
                  <Table.Cell className="border">{req?.bioDataId}</Table.Cell>
                  <Table.Cell className="border">{req?.status}</Table.Cell>
                  <Table.Cell>
                    {
                      req?.status === 'approve' ? req?.contactPhone : <span className="text-gray-500 italic">Approval is pending</span>
                    
                    }
                    </Table.Cell>
                  <Table.Cell>
                  {
                      req?.status === 'approve' ? req?.contactEmail : <span className="text-gray-500 italic">Approval is pending</span>
                    
                    }
                  </Table.Cell>
                  <Table.Cell>
                    <button
                      onClick={() => handleDelete(req._id)}
                      className="p-3 rounded-lg bg-gray-200"
                    >
                      <FaDeleteLeft className="text-xl text-red-500"></FaDeleteLeft>
                    </button>
                  </Table.Cell>
                </Table.Row>
              ) : (
                <></>
              )
            )}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default MyContactReq;
