import { Table } from "flowbite-react";
import useSingleBioData from "../../Hooks/useSingleBioData";

const ExpectedPartner = () => {
  const singleData = useSingleBioData();
  const {
    PartnerFeet,
    PartnerInch,
    email,
    partnerAge,
    partnerWeight,
    phoneNumber,
    photoUrl,
  } = singleData;

  return (
    <div>
      <div className="border border-gray-300 mx-4 rounded-lg ">
        <h1 className="text-2xl text-center py-6">As a life partner expects</h1>
        <Table hoverable>
          <Table.Body className="divide-y divide-gray-300 ">
            <Table.Row></Table.Row>
            <Table.Row className="text-center dark:bg-gray-800 border-gray-200 dark:border-gray-700 ">
              <Table.Cell className="whitespace-nowrap w-1/2 py-2  font-medium text-gray-900 dark:text-white border-r-2 ">
                Age
              </Table.Cell>

              <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white ">
                {partnerAge}
              </Table.Cell>
            </Table.Row>

            <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                Height
              </Table.Cell>

              <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
               {PartnerFeet}.{PartnerInch} in
              </Table.Cell>
            </Table.Row>
            <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
              Weight 
              </Table.Cell>

              <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                {partnerWeight}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

      <br />

      <div className="border border-gray-300 mx-4 rounded-lg ">
        <h1 className="text-2xl text-center py-6">Contact information</h1>
        <Table hoverable>
          <Table.Body className="divide-y divide-gray-300 ">
            <Table.Row></Table.Row>
            <Table.Row className="text-center dark:bg-gray-800 border-gray-200 dark:border-gray-700 ">
              <Table.Cell className="whitespace-nowrap w-1/2 py-2  font-medium text-gray-900 dark:text-white border-r-2 ">
              Contact Email
              </Table.Cell>

              <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white ">
                {email}
              </Table.Cell>
            </Table.Row>

            <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                Phone Number
              </Table.Cell>

              <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
               {phoneNumber}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ExpectedPartner;
