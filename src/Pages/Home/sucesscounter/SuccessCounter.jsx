import CountUp from "react-countup";
import female from "../../../assets/img/female.png";
import male from "../../../assets/img/male.png";
import wedding from "../../../assets/img/wedding-rings.png";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const SuccessCounter = () => {
    const axiosPublic = useAxiosPublic()
    // const [maleCount, setMaleCount] = useState(0)
    // const [femaleCount, setFemaleCount] = useState(0)
    const {data} = useQuery({
        queryKey: ['maleCount', 'femaleCount'],
        queryFn: async ()=> {
            const res = await axiosPublic.get('/BioDataCount')
            return res.data
        }
    })


    // console.log(data?.maleCount, data?.femaleCount)

    return (
        <div className="bg-gradient-to-b from-pink-100 to-rose-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Our Success Story
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Check out our amazing milestones and the impact we`ve had so far.
        </p>

        {/* Counter Section with Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Girls BioData Counter */}
          <div className="bg-white p-6 shadow-lg rounded-2xl flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-pink-100">
            <div className="bg-pink-500 text-white rounded-full h-20 w-20 flex items-center justify-center text-2xl font-bold mb-4 ring-offset-4 ring-2 ring-pink-300">
              <img className="" src={female} alt="" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Girls BioData
            </h3>
            <p className="text-3xl font-bold text-pink-500">
              00<CountUp start={0} end={data?.femaleCount} duration={2.5} />
            </p>
          </div>

          {/* Boys BioData Counter */}
          <div className="bg-white p-6 shadow-lg rounded-2xl flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-pink-100">
            <div className="bg-pink-500 text-white rounded-full h-20 w-20 flex items-center justify-center text-2xl font-bold mb-4 ring-offset-4 ring-2 ring-pink-300">
              <img src={male} alt="" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Boys BioData
            </h3>
            <p className="text-3xl font-bold text-pink-500">
              00<CountUp start={0} end={data?.maleCount} duration={2.5} />
            </p>
          </div>

          {/* Marriages Completed Counter */}
          <div className="bg-white p-6 shadow-lg rounded-2xl flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-pink-100">
            <div className="bg-pink-500 text-white rounded-full h-20 w-20 flex items-center justify-center text-2xl font-bold mb-4">
              <img className="size-16" src={wedding} alt="" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Marriages Completed
            </h3>
            <p className="text-3xl font-bold text-pink-500">
              <CountUp start={0} end={250} duration={2.5} />
            </p>
          </div>

          {/* Total BioData Counter */}
          <div className="bg-white p-6 shadow-lg rounded-2xl flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-pink-100">
            <div className="flex h-20 w-20 rounded-full  items-center justify-center mb-4">
              <div className="bg-pink-500 rounded-full h-10 w-10 flex items-center justify-center ring-offset-4 ring-2 ring-pink-300">
                <img className="size-10" src={female} alt="" />
              </div>
              <div className="bg-pink-500 rounded-full h-10 w-10  ring-offset-4 ring-2 ring-pink-300">
                <img className="size-10" src={male} alt="" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Total BioData
            </h3>
            <p className="text-3xl font-bold text-pink-500">
              <CountUp start={0} end={2700} duration={2.5} />
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SuccessCounter;