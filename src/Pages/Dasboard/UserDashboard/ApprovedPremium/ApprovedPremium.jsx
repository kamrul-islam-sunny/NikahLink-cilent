import { Button, Table } from "flowbite-react";


const ApprovedPremium = () => {
    return (
        <div className="px-4">
            <h1>Manage user</h1>
                 <div className="overflow-x-auto">
                   <Table hoverable>
                     <Table.Head>
                       <Table.HeadCell>User Name</Table.HeadCell>
                       <Table.HeadCell>User Email</Table.HeadCell>
                       <Table.HeadCell>Biodata Id</Table.HeadCell>
                       <Table.HeadCell>Make premium</Table.HeadCell>
                     </Table.Head>
                     <Table.Body className="divide-y">
                         <Table.Row
                           className="bg-white dark:border-gray-700 dark:bg-gray-800"
                         >
                           <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                             name
                           </Table.Cell>
                           <Table.Cell>email</Table.Cell>
                           <Table.Cell>
                            123213
                           </Table.Cell>
                           <Table.Cell>
                             {/* {user.type === "premium" ? (
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
                             )} */}
                           </Table.Cell>
                         </Table.Row>
                     </Table.Body>
                   </Table>
                 </div>
        </div>
    );
};

export default ApprovedPremium;