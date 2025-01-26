import { Button, Card } from "flowbite-react";
import { Table } from "flowbite-react";
import femaleImg from "../../../src/assets/img/female.png";
import { Link } from "react-router-dom";

const BioData = ({ bioData }) => {
  return (
    <div>
      <Card className="max-w-xs m-0 border bg-fuchsia-50 border-rose-300">
        {bioData?.gander === "Male" ? (
          <img
            className="rounded-full ring-2 ring-rose-600 ring-opacity-20 size-36 mx-auto"
            src="https://static.vecteezy.com/system/resources/previews/029/156/311/non_2x/male-muslim-avatar-icon-islam-arabic-man-in-traditional-muslim-hat-middle-eastern-human-profile-filled-style-pictogram-for-ramadan-eid-logo-illustration-design-on-white-background-eps-10-vector.jpg"
            alt=""
          />
        ) : (
          <img
            className="rounded-full ring-2 ring-rose-600 ring-opacity-20 size-36 mx-auto"
            src="https://media.istockphoto.com/id/1413233180/vector/beautiful-blank-face-template-portrait-of-a-pretty-muslim-woman-faceless-female-face-in.jpg?s=170667a&w=0&k=20&c=5_7JKqtiNGf1jDecMzWy8nauDt6LVjTOw4YgtWg3m6g="
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
            <Table.Body className="divide-y divide-rose-300">
              <Table.Row className="bg-rose-400  dark:bg-gray-800 bor border-gray-200 dark:border-gray-700 ">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2  font-medium text-gray-900 dark:text-white border-r-2">
                  Division
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white ">
                  {bioData?.perDivision}
                </Table.Cell>
              </Table.Row>

              <Table.Row className="bg-rose-400 dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white border-r-2">
                  Age
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap w-1/2 py-2 font-medium text-gray-900 dark:text-white">
                  {bioData?.age}
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-rose-400  dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-1/2 py-2 border-r-2">
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
          <Button className="text-center">View Profile</Button>
        </Link>
      </Card>
      <br />
    </div>
  );
};

export default BioData;
