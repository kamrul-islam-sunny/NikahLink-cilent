import { useEffect, useState } from "react";
import BioData from "../../../components/BioDataCart/BioData";
import useAllUser from "../../../Hooks/useAllUser";
import {Label, Select, Spinner } from "flowbite-react";
const PreMemberProfile = () => {
  const [users, , isPending] = useAllUser();

  useEffect(() => {
    setAllBioData(users);
  }, [users]);
  const [allBioData, setAllBioData] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");
  const handleSorting = (e) => {
    setSortOrder(e.target.value);
    const sorted = [...users].sort((a, b) => {
      if (sortOrder === "ascending") {
        return parseInt(b.age) - parseInt(a.age);
      }
      return parseInt(a.age) - parseInt(b.age);
    });
    setAllBioData(sorted);
  };

  if (isPending) {
    return (
      <div className="text-center">
        {" "}
        <Spinner
          aria-label="Center-aligned Extra large spinner example"
          size="xl"
        />
      </div>
    );
  }

  return (
    <div className="container bg-gradient-to-b from-pink-100 to-rose-50 mx-auto px-6 py-12">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Premium Members
      </h1>
      <div className="flex justify-center mb-6">
        <div className="mb-4">
          <Label htmlFor="sortOrder" value="Sort by Age" />
          <Select
            id="sortOrder"
            className="mt-1"
            value={sortOrder}
            onChange={handleSorting}
          >
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allBioData.map((bioData) =>
          bioData?.type === "premium" ? (
            <div
              key={bioData._id}
              className=" dark:bg-gray-800 p-4 rounded-lg transition-transform transform hover:scale-105"
            >
              <BioData bioData={bioData} />
            </div>
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
};

export default PreMemberProfile;
