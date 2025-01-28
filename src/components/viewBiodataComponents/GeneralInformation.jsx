import { Table } from "flowbite-react";
import useSingleBioData from "../../Hooks/useSingleBioData";

const GeneralInformation = () => {
  const singleData = useSingleBioData();
  const {
    gander,
    feet,
    inch,
    perDivision,
    presentDivision,
    skinColor,
    weight,
    birth,
  } = singleData;

  const brithDate = new Date(birth).toLocaleDateString();

  return (
    <div className="border border-gray-300 mx-4 rounded-lg ">
      <h1 className="text-2xl text-center py-6">General information</h1>
      <Table hoverable>
        <Table.Body className="divide-y divide-gray-300 ">
          <Table.Row></Table.Row>
          <Table.Row className="text-center dark:bg-gray-800 border-gray-200 dark:border-gray-700 ">
            <Table.Cell className="whitespace-nowrap w-1/2 py-2  font-medium text-gray-900 dark:text-white border-r-2 ">
              BioType
            </Table.Cell>

            <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white ">
              {gander}
            </Table.Cell>
          </Table.Row>

          <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
              Birthdate
            </Table.Cell>

            <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
              {brithDate}
            </Table.Cell>
          </Table.Row>
          <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
              Height
            </Table.Cell>

            <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
              {feet}.{inch} inch
            </Table.Cell>
          </Table.Row>
          <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
              Skin color
            </Table.Cell>

            <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
              {skinColor}
            </Table.Cell>
          </Table.Row>
          <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
              Weight
            </Table.Cell>

            <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
              {weight}
            </Table.Cell>
          </Table.Row>
          <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
              Permanent address
            </Table.Cell>

            <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
              {perDivision}
            </Table.Cell>
          </Table.Row>
          <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
              Present address
            </Table.Cell>

            <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
              {presentDivision}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default GeneralInformation;
