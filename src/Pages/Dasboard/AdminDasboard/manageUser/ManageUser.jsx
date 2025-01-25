import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "flowbite-react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ManageUser = () => {
  const axiosPublic = useAxiosPublic();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });
  console.log(users);
  const axiosSecure = useAxiosSecure();

  const handleAdmin = (id) => {
    axiosSecure.patch(`/users/admin/${id}`).then((res) => {
      console.log(res.data);
      refetch();
    });
  };

  const handlePremium = (id) => {
    axiosSecure.patch(`/users/premium/${id}`).then((res) => {
      console.log(res.data);
      refetch();
    });
  };

  // const handleDelete = (id) =>{
  //   axiosPublic.delete(`/userDelete/${id}`)
  //   .then(res =>{
  //     console.log(res)
  //     refetch();
  //   })
  // }

  return (
    <div className="px-4">
      <h1>Manage user</h1>
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
                  {user.userName}
                </Table.Cell>
                <Table.Cell>{user.userEmail}</Table.Cell>
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
