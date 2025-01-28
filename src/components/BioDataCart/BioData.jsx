import { Card } from "flowbite-react";
import { Table } from "flowbite-react";
import female from "../../../src/assets/img/female.png";
import male from "../../../src/assets/img/male.png";
import { Link } from "react-router-dom";
import { Button } from "@headlessui/react";

const BioData = ({ bioData }) => {
  return (
    <div>
      <Card className="max-w-xs m-0 border-2 border-rose-500 border-opacity-15">
        {bioData?.gander === "Male" ? (
          <img
            className={`rounded-full ring-2 ring-rose-600 ring-opacity-20 size-36 mx-auto ${
              bioData?.type ? "shadow-[0_0_15px_5px_rgba(252,211,77,0.5)]" : ""
            }  shadow-yellow-200`}
            src={male}
            alt=""
          />
        ) : (
          <img
            className={`rounded-full ring-2 ring-rose-600 ring-opacity-20 size-36 mx-auto ${
              bioData?.type ? "shadow-[0_0_15px_5px_rgba(252,211,77,0.5)]" : ""
            }  shadow-yellow-200`}
            src={female}
            alt=""
          />
        )}

        <div className="">
          <div className="text-center space-y-2 mb-3">
            <div className="">
              <p className="uppercase font-bold text-2xl text-gray-600">
                BioData NO
              </p>
              <p className="uppercase text-lg font-bold">
                nik-{bioData?.bioDataId}
              </p>
            </div>
            <p className="text-base font-semibold text-gray-800 ">
              {bioData?.gander}
            </p>
          </div>
          <Table className="">
            <Table.Body className="divide-y divide-rose-200">
              <Table.Row className="bg-rose-100  dark:bg-gray-800  dark:border-gray-700 ">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2  font-medium text-gray-900 dark:text-white border-r-2 border-rose-200">
                  Division
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white ">
                  {bioData?.perDivision}
                </Table.Cell>
              </Table.Row>

              <Table.Row className="bg-rose-100 dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-rose-200 border-r-2">
                  Age
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {bioData?.age}
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-rose-100  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-1/2 py-2 border-rose-200 border-r-2">
                  Occupation
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {bioData?.occupation}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <Link to={`/BioDataDetails/${bioData?._id}`}>
          <Button className="text-center inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition transform duration-300">
            View Profile
          </Button>
        </Link>
      </Card>
      <br />
    </div>
  );
};

export default BioData;
