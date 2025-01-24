
import useSingleBioData from '../../Hooks/useSingleBioData';
import { Table } from 'flowbite-react';

const AboutYour = () => {
    const singleData = useSingleBioData()
    const {
        age,
        fatherName,
        matherName,
        name,
        occupation,
      } = singleData;
      console.log(singleData)
    return (
        <div>
            <div className="border border-gray-300 mx-4 rounded-lg ">
                  <h1 className="text-2xl text-center py-6">About Yourself</h1>
                  <Table hoverable>
                    <Table.Body className="divide-y divide-gray-300 ">
                      <Table.Row></Table.Row>
                      <Table.Row className="text-center dark:bg-gray-800 border-gray-200 dark:border-gray-700 ">
                        <Table.Cell className="whitespace-nowrap w-1/2 py-2  font-medium text-gray-900 dark:text-white border-r-2 ">
                          Name
                        </Table.Cell>
            
                        <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white ">
                          {name}
                        </Table.Cell>
                      </Table.Row>
            
                      <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                          Age
                        </Table.Cell>
            
                        <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                          {age}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                        Occupation
                        </Table.Cell>
            
                        <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                          {occupation}
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>

                <br />

                <div className="border border-gray-300 mx-4 rounded-lg ">
                  <h1 className="text-2xl text-center py-6">Family Information</h1>
                  <Table hoverable>
                    <Table.Body className="divide-y divide-gray-300 ">
                      <Table.Row></Table.Row>
                      <Table.Row className="text-center dark:bg-gray-800 border-gray-200 dark:border-gray-700 ">
                        <Table.Cell className="whitespace-nowrap w-1/2 py-2  font-medium text-gray-900 dark:text-white border-r-2 ">
                          Father Name
                        </Table.Cell>
            
                        <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white ">
                          {fatherName}
                        </Table.Cell>
                      </Table.Row>
            
                      <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                          Mother Name
                        </Table.Cell>
            
                        <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                          {matherName}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                        Occupation
                        </Table.Cell>
            
                        <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                          {occupation}
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>
        </div>
    );
};

export default AboutYour;