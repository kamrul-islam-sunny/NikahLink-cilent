import { useEffect, useState } from "react";
import BioData from "../../../components/BioDataCart/BioData";
import useAllUser from "../../../Hooks/useAllUser";
import { Button, Spinner } from "flowbite-react";
const PreMemberProfile = () => {
  const [users, , isPending] = useAllUser();
  console.log(users);
  useEffect(() => {
    setAllBioData(users);
  }, [users]);
  const [allBioData, setAllBioData] = useState([]);
  const handleAscending = () => {
    const sorted = [...users].sort((a, b) => {
      return parseInt(a.age) - parseInt(b.age);
    });
    setAllBioData(sorted);
  };
  console.log(allBioData);

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
    <div>
      <h1>premium member</h1>
      <Button onClick={handleAscending}>ascending</Button>
      <div className="grid grid-cols-3 ">
        {allBioData.map((bioData) => (
          <div key={bioData._id} className="">
            <BioData bioData={bioData}></BioData>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreMemberProfile;
