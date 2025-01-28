import { useQuery } from "@tanstack/react-query";
import { Card, Button, TextInput, Label, Select } from "flowbite-react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import useAllUser from "../../Hooks/useAllUser";
import BioData from "../../components/BioDataCart/BioData";
import { FaRedo } from "react-icons/fa";

const BiodatasPage = () => {
  const axiosPublic = useAxiosPublic();
  const [allBioData, setAllBioData] = useState([]);
  const [users] = useAllUser();
  const [filterParams, setFilterParams] = useState(null);
  const [isReset, setReset] = useState(false)
  const { data: filterBioData, refetch } = useQuery({
    queryKey: [
      "bioDataFilter",
      filterParams?.ageMax,
      filterParams?.gander,
      filterParams?.ageMin,
      filterParams?.perDivision,
    ],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/bioData-filter?gander=${filterParams?.gander}&maxAge=${filterParams?.ageMax}&minAge=${filterParams.ageMin}&perDivision=${filterParams?.perDivision}`
      );
      return res.data;
    },
  });
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    if (filterBioData) {
      setAllBioData(filterBioData);
    } else {
      setAllBioData(users);
    }
  }, [users, filterBioData]);

  const handleReset = () => {
    setReset(true);
    if(isReset)
    {
        setAllBioData(users)
        refetch();
    }
  }

  const onSubmit = (data) => {
    setFilterParams({
      gander: data.gander,
      ageMax: data.ageMax,
      ageMin: data.ageMin,
      perDivision: data.perDivision,
    });
    refetch();
  };



  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        Browse Biodatas
      </h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar - Filters */}
        <div className="lg:w-1/4 w-full">
          <Card className="shadow-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Filters
              </h2>
              <div className="space-y-4">
                {/* Gender Filter */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="countries" value="Select Gender" />
                  </div>
                  <Select {...register("gander")} id="countries">
                    <option value={""} disabled selected>
                      Select a Gender
                    </option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                  </Select>
                </div>

                {/* Age Filter */}
                <div>
                  <h3 className="font-medium text-gray-600 mb-2">Age Range</h3>
                  <div className="flex gap-2">
                    <TextInput
                      {...register("ageMax")}
                      id="min-age"
                      type="number"
                      placeholder="Min"
                    />
                    <TextInput
                      {...register("ageMin")}
                      id="max-age"
                      type="number"
                      placeholder="Max"
                    />
                  </div>
                </div>

                {/* Religion Filter */}
                <div>
                  <h3 className="font-medium text-gray-600 mb-2">Division</h3>
                  <Select
                    id="division"
                    {...register("perDivision")}
                    className="w-full"
                  >
                    <option value={""} disabled selected>
                      Select a division
                    </option>
                    {[
                      "Dhaka",
                      "Chattagra",
                      "Rangpur",
                      "Barisal",
                      "Khulna",
                      "Mymensingh",
                      "Sylhet",
                    ].map((division) => (
                      <option key={division} value={division}>
                        {division}
                      </option>
                    ))}
                  </Select>
                </div>
                {/* Button */}
                <Button type="submit" className="mt-4 w-full">
                  Apply Filters
                </Button>
                <Button onClick={handleReset} color="dark">
                  <FaRedo  className="mr-2 h-5 w-5" />
                  Reset
                </Button>
              </div>
            </form>
          </Card>
        </div>

        {/* Right Content - Biodata Cards */}
        <div className="lg:w-3/4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
            {
              allBioData.length === 0 && <h1 className="text-2xl ">No data....</h1>
            }
            {allBioData?.map((bioData) => (
              <div
                key={bioData._id}
                className=" dark:bg-gray-800 p-4 rounded-lg transition-transform transform hover:scale-105"
              >
                <BioData bioData={bioData} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodatasPage;
