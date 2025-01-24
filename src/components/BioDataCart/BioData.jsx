import { Button, Card } from "flowbite-react";
import { Table } from "flowbite-react";

const BioData = () => {
  return (
    <div>
      <Card className="max-w-xs m-0 border bg-fuchsia-50 border-rose-300">
        <img
          className="rounded-full size-36 mx-auto"
          src="https://static.vecteezy.com/system/resources/previews/029/156/311/non_2x/male-muslim-avatar-icon-islam-arabic-man-in-traditional-muslim-hat-middle-eastern-human-profile-filled-style-pictogram-for-ramadan-eid-logo-illustration-design-on-white-background-eps-10-vector.jpg"
          alt=""
        />
        <div className="">
          <div className="text-center space-y-2 mb-3">
            <div className="">
              <p className="uppercase font-bold text-2xl text-gray-600">
                BioData NO
              </p>
              <p className="uppercase text-lg font-bold">nik-001</p>
            </div>
            <p className="text-base font-semibold text-gray-800 ">Male</p>
          </div>
          <Table className="">
            <Table.Body className="divide-y divide-rose-300">
              <Table.Row className="bg-rose-400  dark:bg-gray-800 bor border-gray-200 dark:border-gray-700 ">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2  font-medium text-gray-900 dark:text-white border-r-2">
                  Division
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white ">
                  Sylhet
                </Table.Cell>
              </Table.Row>

             

              <Table.Row className="bg-rose-400 dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2">
                  Age
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  21
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-rose-400  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-1/2 py-2 border-r-2">
                  Occupation
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  Doctor
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <Button className="text-center">View</Button>
      </Card>
      <br />
      
    </div>
  );
};

export default BioData;
