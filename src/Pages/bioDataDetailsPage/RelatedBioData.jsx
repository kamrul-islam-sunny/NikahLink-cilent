import { useEffect, useState } from "react";
import BioData from "../../components/BioDataCart/BioData";
import useAllUser from "../../Hooks/useAllUser";


const RelatedBioData = ({gander}) => {
    const [users] = useAllUser();
    const [relatedBioData, setRelatedBioData] = useState([])
    useEffect(()=>{
        const result = users.filter((bioData)=> bioData.gander === gander)
        setRelatedBioData(result.slice(0,3))
    }, [users, gander])
    console.log(users, gander, relatedBioData)
    return (
        <div className="grid grid-cols-3 ">
            {
                relatedBioData?.map((bioData)=>
                    <BioData key={bioData._id} bioData={bioData}></BioData>
                )
            }
        </div>
    );
};

export default RelatedBioData;