import { useQuery } from "@tanstack/react-query";
import { Button, Spinner, Table } from "flowbite-react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAuth from "../../../../Hooks/useAuth";

const MyFavorite = () => {
  const axiosPublic = useAxiosPublic();
  const { user, loading } = useAuth();
  const { data: allFavorite, refetch } = useQuery({
    queryKey: ["[allPaymentData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/favorite");
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
      axiosPublic.delete(`/delete-favorite/${id}`).then((res) => {
        refetch();
      });
    };
  return (
    <div className="px-4">
      <h1>Manage user</h1>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell> Id</Table.HeadCell>
            <Table.HeadCell>Permanent Add</Table.HeadCell>
            <Table.HeadCell>Occupation</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {allFavorite?.map((fav) => (
              <Table.Row
                key={fav._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {fav?.name}
                </Table.Cell>
                <Table.Cell> {fav?.bioDataId} </Table.Cell>
                <Table.Cell>{fav?.PermanentAddress}</Table.Cell>
                <Table.Cell>{fav?.Occupation}</Table.Cell>
                <Table.Cell>
                  {" "}
                  <Button
                    onClick={() => handleDelete(fav._id)}
                    className="bg-rose-100 text-rose-500 font-semibold"
                    color="gray"
                    size="xs"
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default MyFavorite;
