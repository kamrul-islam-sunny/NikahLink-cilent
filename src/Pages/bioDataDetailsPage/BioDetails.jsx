import { Button, Card, Table } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useIsPremium from "../../Hooks/useIsPremium";
import useIsPayment from "../../Hooks/useIsPayment";
import { MdVerified } from "react-icons/md";
import FavoriteButton from "./FavoriteButton";
import female from "../../assets/img/female.png";
import male from "../../assets/img/male.png";
import RelatedBioData from "./RelatedBioData";
import { useEffect, useState } from "react";

const BioDetails = () => {
  const { id } = useParams();
  const [isPremium] = useIsPremium();

  const axiosPublic = useAxiosPublic();
  const { data } = useQuery({
    queryKey: ["bioDataDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bioData/${id}`);
      return res.data;
    },
  });


  const isPayment = useIsPayment(data?.bioDataId);



  console.log(isPayment)
  return (
    <div className="">
    <div className="grid grid-cols-6 py-10">
      <div className="col-span-2 ">
        <Card className="max-w-80 relative">
          <div className="flex justify-end absolute top-4 left-4 right-4 px-4 pt-4">
            <FavoriteButton data={data}></FavoriteButton>
          </div>
          <div className="flex flex-col items-center pb-10">
            {data?.gander === "Male" ? (
              <img
                className={`rounded-full ring-2 ring-rose-600 ring-opacity-20 size-36 mx-auto ${
                  data?.type ? "shadow-[0_0_15px_5px_rgba(252,211,77,0.5)]" : ""
                }  shadow-yellow-200`}
                src={male}
                alt=""
              />
            ) : (
              <img
                className={`rounded-full ring-2 ring-rose-600 ring-opacity-20 size-36 mx-auto ${
                  data?.type ? "shadow-[0_0_15px_5px_rgba(252,211,77,0.5)]" : ""
                }  shadow-yellow-200`}
                src={female}
                alt=""
              />
            )}

            <h5 className="mb-1 mt-2 text-xl font-medium text-gray-900 dark:text-white">
              BioData Id
            </h5>
            <span className="text-base text-gray-500 dark:text-gray-400 flex items-center gap-2">
              id-{data?.bioDataId}
              {data?.type && (
                <MdVerified className="text-2xl text-green-500"></MdVerified>
              )}
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
                      {data?.perDivision}
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
                      {data?.occupation}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
        </Card>
      </div>
      <div className="col-span-4 ">
        {/* General */}
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
                  {data?.gander}
                </Table.Cell>
              </Table.Row>

              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Birthdate
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {new Date(data?.birth).toLocaleDateString()}
                </Table.Cell>
              </Table.Row>
              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Height
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {data?.feet}.{data?.inch}inch
                </Table.Cell>
              </Table.Row>
              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Skin color
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {data?.skinColor}
                </Table.Cell>
              </Table.Row>
              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Weight
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {data?.weight}
                </Table.Cell>
              </Table.Row>
              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Permanent address
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {data?.weight}
                </Table.Cell>
              </Table.Row>
              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Present address
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {data?.presentDivision}
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
                  {data?.name}
                </Table.Cell>
              </Table.Row>

              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Age
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {data?.age}
                </Table.Cell>
              </Table.Row>
              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Occupation
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {data?.occupation}
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
                  {data?.fatherName}
                </Table.Cell>
              </Table.Row>

              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Mother Name
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {data?.matherName}
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
                  {data?.partnerAge}
                </Table.Cell>
              </Table.Row>

              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Height
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {data?.PartnerFeet}.{data?.PartnerInch} in
                </Table.Cell>
              </Table.Row>
              <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                  Weight
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {data?.partnerWeight}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>

        <br />
        {isPremium || isPayment ? (
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
                    {data?.email}
                  </Table.Cell>
                </Table.Row>

                <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                    Phone Number
                  </Table.Cell>

                  <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                    {data?.phoneNumber}
                  </Table.Cell>
                </Table.Row>

                <Table.Row className=" text-center  dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2 ">
                    Photo Url
                  </Table.Cell>

                  <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                    <a href="">{data?.photoUrl}</a>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        ) : (
          <Link to={`/checkout/${data?.bioDataId}`}>
            <Button disabled={isPayment} color="pink" className="ml-4">
              contact request
            </Button>
          </Link>
        )}
      </div>

    </div>
    <h1 className="text-2xl py-6 font-semibold ">Some {data?.gander} BioData</h1>
       <RelatedBioData gander={data?.gander}></RelatedBioData>
    </div>
  );
};

export default BioDetails;
