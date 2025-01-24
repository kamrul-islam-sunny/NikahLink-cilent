import GeneralInformation from "../../../../components/viewBiodataComponents/GeneralInformation";
import AboutYour from "../../../../components/viewBiodataComponents/AboutYour";
import ExpectedPartner from "../../../../components/viewBiodataComponents/ExpectedPartner";

const ViewBioData = () => {
 
  return (
    <div>
      <h1 className="text-center text-5xl font-bold py-8">Your BioData</h1>
        <GeneralInformation></GeneralInformation>
        <br />
        <AboutYour></AboutYour>
        <br />
        <ExpectedPartner></ExpectedPartner>
    </div>
  );
};

export default ViewBioData;
