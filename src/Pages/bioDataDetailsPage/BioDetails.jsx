import { Card, Dropdown, Table } from "flowbite-react";
import React from "react";
import { Button } from "@headlessui/react";
import { FaRegHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const BioDetails = () => {
    const {id} = useParams()
    console.log(id)
    const axiosPublic = useAxiosPublic()
    const {data} = useQuery({
        queryKey:['bioDataDetails'],
        queryFn: async ()=> {
            const res = await axiosPublic.get(`/bioData/${id}`)
            console.log(res.data)
            return res.data
        }
    })
    console.log(data)
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-2  border">
        <Card className="max-w-80">
          <div className="flex justify-end px-4 pt-4">
            <Button>
              <FaRegHeart className="text-2xl text-rose-600"></FaRegHeart>
            </Button>
          </div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="rounded-full ring-2 ring-rose-600 ring-opacity-20 size-36 mx-auto"
              src="https://static.vecteezy.com/system/resources/previews/029/156/311/non_2x/male-muslim-avatar-icon-islam-arabic-man-in-traditional-muslim-hat-middle-eastern-human-profile-filled-style-pictogram-for-ramadan-eid-logo-illustration-design-on-white-background-eps-10-vector.jpg"
              alt=""
            />
            <h5 className="mb-1 mt-2 text-xl font-medium text-gray-900 dark:text-white">
              BioData Id
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              id-1221
            </span>
            <div className="mt-4 w-full">
              <Table>
                <Table.Body className="divide-y divide-rose-300">
                  <Table.Row></Table.Row>

                  <Table.Row className="  dark:bg-gray-800 bor border-gray-200 dark:border-gray-700 ">
                    <Table.Cell className="whitespace-nowrap w-1/2 py-2  font-medium text-gray-900 dark:text-white border-r-2">
                      Division
                    </Table.Cell>

                    <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white ">
                      sdfdsf
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2">
                      Age card
                    </Table.Cell>

                    <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                      {data?.age}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-1/2 py-2 border-r-2">
                      Occupation
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                      sdfdsf
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
            <Button></Button>
          </div>
        </Card>
      </div>
      <div className="col-span-4 border">
        {/* General */}
        <div className="border mt-4 border-gray-300 mx-4 rounded-lg ">
          <h1 className="text-2xl text-center py-6">General information</h1>
          <Table hoverable>
            <Table.Body className="divide-y divide-gray-300 ">
              <Table.Row></Table.Row>
              <Table.Row className="text-center dark:bg-gray-800 border-gray-200 dark:border-gray-700 ">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2  font-medium text-gray-900 dark:text-white border-r-2 ">
                  BioType
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white ">
                  fghgh
                </Table.Cell>
              </Table.Row>

              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Birthdate
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white"></Table.Cell>
              </Table.Row>
              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Height
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  inch
                </Table.Cell>
              </Table.Row>
              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Skin color
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  fghgh
                </Table.Cell>
              </Table.Row>
              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Weight
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  fghgh
                </Table.Cell>
              </Table.Row>
              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Permanent address
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  fghgfh
                </Table.Cell>
              </Table.Row>
              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Present address
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  fghfg
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <br />

        {/* about your self */}
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
                  {/* {age} */}
                </Table.Cell>
              </Table.Row>
              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Occupation
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {/* {occupation} */}
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
                  {/* {fatherName} */}
                </Table.Cell>
              </Table.Row>

              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Mother Name
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {/* {matherName} */}
                </Table.Cell>
              </Table.Row>
              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Occupation
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {/* {occupation} */}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <br />

        {/*  */}
        <div className="border border-gray-300 mx-4 rounded-lg ">
          <h1 className="text-2xl text-center py-6">
            As a life partner expects
          </h1>
          <Table hoverable>
            <Table.Body className="divide-y divide-gray-300 ">
              <Table.Row></Table.Row>
              <Table.Row className="text-center dark:bg-gray-800 border-gray-200 dark:border-gray-700 ">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2  font-medium text-gray-900 dark:text-white border-r-2 ">
                  Age
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white ">
                  {/* {partnerAge} */}
                </Table.Cell>
              </Table.Row>

              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Height
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {/* {PartnerFeet}.{PartnerInch} in */}
                </Table.Cell>
              </Table.Row>
              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Weight
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {/* {partnerWeight} */}
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
                  {/* {email} */}
                </Table.Cell>
              </Table.Row>

              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Phone Number
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {/* {phoneNumber} */}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default BioDetails;
