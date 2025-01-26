import { Button, Table } from "flowbite-react";
import useAllUser from "../../../../Hooks/useAllUser";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ApprovedPremium = () => {
  const [users, refetch] = useAllUser();
  const axiosSecure = useAxiosSecure()
  const handlePremium = (id) => {
    axiosSecure.patch(`/users/premium/${id}`).then((res) => {
      console.log(res.data);
      refetch();
    });
  };

  return (
    <div className="px-4">
      <h1>Premium Approval Requests</h1>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head >
            <Table.HeadCell>User Name</Table.HeadCell>
            <Table.HeadCell>User Email</Table.HeadCell>
            <Table.HeadCell>Biodata Id</Table.HeadCell>
            <Table.HeadCell>Make premium</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row></Table.Row>
            {users.map(
              (user) =>
                user.reqPremium === "pending" && (
                  <Table.Row
                    key={user._id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {user?.name}
                    </Table.Cell>
                    <Table.Cell>{user?.email}</Table.Cell>
                    <Table.Cell>BioDataId-{user.bioDataId}</Table.Cell>
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
                )
            )}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ApprovedPremium;
