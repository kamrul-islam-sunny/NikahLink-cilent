
import { Button, Table } from "flowbite-react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAllUser from "../../../../Hooks/useAllUser";
import toast from "react-hot-toast";

const ManageUser = () => {
  const [users, refetch] = useAllUser()
  const axiosSecure = useAxiosSecure();

  const handleAdmin = (id) => {
    axiosSecure.patch(`/users/admin/${id}`)
    .then((res) => {
      if(res.data.modifiedCount > 0)
        {
          toast.success('Successful user has become Admin.')
        }
      refetch();
    });
  };

  const handlePremium = (id) => {
    axiosSecure.patch(`/users/premium/${id}`)
    .then((res) => {
      if(res.data.modifiedCount > 0)
        {
          toast.success('Successful user has become Premium.')
        }
      refetch();
    });
  };

  return (
    <div className="px-4">
      <h1 className="text-center text-3xl font-bold py-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500">Manage user</h1>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>User Name</Table.HeadCell>
            <Table.HeadCell>User Email</Table.HeadCell>
            <Table.HeadCell>Make Admin</Table.HeadCell>
            <Table.HeadCell>Make premium</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {users.map((user) => (
              <Table.Row
                key={user._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {user.name}
                </Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <Button
                      onClick={() => handleAdmin(user._id)}
                      className="bg-blue-200 text-blue-500 font-semibold"
                      color="gray"
                      size="xs"
                    >
                      Make Admin{" "}
                    </Button>
                  )}
                </Table.Cell>
                <Table.Cell>
                  {user.type === "premium" ? (
                    "Premium"
                  ) : (
                    <Button
                      onClick={() => handlePremium(user._id)}
                      className="bg-rose-100 text-rose-500 font-semibold"
                      color="gray"
                      size="xs"
                    >
                      make premium{" "}
                    </Button>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManageUser;
