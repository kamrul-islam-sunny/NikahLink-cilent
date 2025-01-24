import { useQuery } from "@tanstack/react-query";
import { Table } from "flowbite-react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const ManageUser = () => {
    const axiosPublic = useAxiosPublic();
    const {data:users = [] } = useQuery({
        queryKey:['users'],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/users')
            return res.data;
        }
    })
    console.log(users)
  return (
    <div className="px-4">
      <h1>Manage user</h1>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>User Name</Table.HeadCell>
            <Table.HeadCell>User Email</Table.HeadCell>
            <Table.HeadCell>Make premium</Table.HeadCell>
            <Table.HeadCell>Make Admin</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {
                users.map((user)=>
                    <Table.Row key={user._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {user.userName}
                </Table.Cell>
                <Table.Cell>{user.userEmail}</Table.Cell>
                <Table.Cell>make admin</Table.Cell>
                <Table.Cell>make premium</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
                )
            }
            
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManageUser;
