
import Banner from "../Banner/Banner";
import HowIsIt from "../HowIsIt/HowIsIt";
import PreMemberProfile from "../MemberProfile/PreMemberProfile";
import SuccessStory from "../SuccessStory/SuccessStory";
import SuccessCounter from "../sucesscounter/SuccessCounter";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1></h1>
            <PreMemberProfile></PreMemberProfile>
            <HowIsIt></HowIsIt>
            <SuccessCounter></SuccessCounter>
            <SuccessStory></SuccessStory>
        </div>
    );
};

export default Home;