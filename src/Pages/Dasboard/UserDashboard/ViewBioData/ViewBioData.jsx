import GeneralInformation from "../../../../components/viewBiodataComponents/GeneralInformation";
import AboutYour from "../../../../components/viewBiodataComponents/AboutYour";
import ExpectedPartner from "../../../../components/viewBiodataComponents/ExpectedPartner";
import { Button } from "flowbite-react";
import FlowbiteModal from "../../../../components/modal/FlowbiteModal";
import { useState } from "react";

const ViewBioData = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h1 className="text-center text-5xl font-bold py-8">Your BioData</h1>
        <GeneralInformation></GeneralInformation>
        <br />
        <AboutYour></AboutYour>
        <br />
        <ExpectedPartner></ExpectedPartner>
        <Button onClick={() => setIsOpen(true)} className="mx-auto my-6">Premium</Button>
        <FlowbiteModal isOpen={isOpen} setIsOpen={setIsOpen}></FlowbiteModal>
    </div>
  );
};

export default ViewBioData;
