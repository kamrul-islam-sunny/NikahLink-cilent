import { TextInput, Select, Button, Datepicker } from "flowbite-react";
import useAuth from "../../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useEffect } from "react";
import useSingleBioData from "../../../../Hooks/useSingleBioData";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const EditBioData = () => {
  const { user } = useAuth();
  const divisions = [
    "Dhaka",
    "Chattagra",
    "Rangpur",
    "Barisal",
    "Khulna",
    "Mymensingh",
    "Sylhet",
  ];

 

  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, setValue } = useForm();
  useEffect(() => {
    setValue("email", user?.email || "");
  }, [user, setValue]);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (!data.birth) {
      toast.error("Date of birth not filled up.");
      return;
    }
    axiosPublic.patch("/bioData", data).then((res) => {
  
      if (res.data.modifiedCount) {
        toast.success("You bioData Successful Updated.");
        navigate("/dashboard/viewBioData");
      }
    });
  };

  const data = useSingleBioData();

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center text-5xl font-bold py-8">Edit BioData</h1>
        <div className="space-y-4">
          <div className="flex gap-2">
            {/* Name */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <TextInput
                {...register("name")}
                type="text"
                defaultValue={data?.name}
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Biodata Type */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Biodata Type
              </label>
              <Select
                defaultValue={data?.gander}
                required
                {...register("gander")}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </div>
          </div>

          <div className="flex gap-2">
            {/* Profile Image Link */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Profile Image Link
              </label>
              <TextInput
                defaultValue={data?.photoUrl}
                {...register("photoUrl")}
                type="text"
                placeholder="Paste your image link"
              />
            </div>

            {/* Date of Birth */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <Datepicker
                required
                // defaultValue={data?.birth ? new Date(data.birth) : null}
                onChange={(date) => setValue("birth", date)}
                placeholder="Select your birth date"
              />
            </div>
          </div>

          <div className="flex gap-2">
            {/* Skin Color */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Skin Color
              </label>
              <Select defaultValue={data?.skinColor} required {...register("skinColor")}>
                <option value="">Select Skin Color</option>
                <option value="Fair">Fair</option>
                <option value="Medium">Medium</option>
                <option value="Brown">Brown</option>
                <option value="Dark">Dark</option>
              </Select>
            </div>

            {/* Age */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <TextInput
                {...register("age")}
                defaultValue={data?.age}
                type="number"
                placeholder="Enter your Age"
                required
              />
            </div>
          </div>

          <div className="flex gap-2">
            {/* Height */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Height
              </label>
              <div className="flex gap-2 items-center">
                <h1>Feet:</h1>
                <select
                  id="height-feet"
                  defaultValue={data?.feet}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                  {...register("feet")}
                >
                  <option value="">Select Feet</option>
                  {Array.from({ length: 9 }, (_, i) => i + 3).map((foot) => (
                    <option key={foot} value={foot}>
                      {foot}
                    </option>
                  ))}
                </select>
                <h1>Inch:</h1>
                <select
                  id="height-inch"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                  {...register("inch")}
                  defaultValue={data?.inch}
                >
                  <option value="">Select Inch</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((inch) => (
                    <option key={inch} value={inch}>
                      {inch}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            {/* Weight */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Weight
              </label>
              <Select
                defaultValue={data?.weight}
                required
                {...register("weight")}
              >
                <option value="">Select Weight</option>
                <option value="30kg">30kg</option>
                <option value="35kg">35kg</option>
                <option value="40kg">40kg</option>
                <option value="45kg">45kg</option>
                <option value="50kg">50kg</option>
                <option value="55kg">55kg</option>
                <option value="60kg">60kg</option>
                <option value="65kg">65kg</option>
                <option value="70kg">70kg</option>
                <option value="75kg">75kg</option>
                <option value="80kg">80kg</option>
                <option value="85kg">85kg</option>
              </Select>
            </div>

            {/* Occupation */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Occupation
              </label>
              <Select
                defaultValue={data?.occupation}
                required
                {...register("occupation")}
              >
                <option value="">Select Occupation</option>
                <option value="Engineer">Engineer</option>
                <option value="Doctor">Doctor</option>
                <option value="Teacher">Teacher</option>
                <option value="Teacher">Student</option>
                <option value="Teacher">Job</option>
                <option value="Teacher">House wife</option>
              </Select>
            </div>
          </div>

          <div className="flex gap-2">
            {/* Father's Name */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Father`s Name
              </label>
              <TextInput
                {...register("fatherName")}
                defaultValue={data?.fatherName}
                type="text"
                placeholder="Father's name"
                required
              />
            </div>

            {/* Mother's Name */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Mother`s Name
              </label>
              <TextInput
                defaultValue={data?.matherName}
                {...register("matherName")}
                type="text"
                placeholder="Mother's name"
                required
              />
            </div>
          </div>

          <div className="flex gap-2">
            {/* Permanent Division */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Permanent Division
              </label>
              <Select required>
                {divisions.map((division, index) => (
                  <option
                    defaultValue={data?.perDivision}
                    {...register("perDivision")}
                    required
                    key={index}
                    value={division}
                  >
                    {division}
                  </option>
                ))}
              </Select>
            </div>

            {/* Present Division */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Present Division
              </label>
              <Select
                defaultValue={data?.presentDivision}
                required
                {...register("presentDivision")}
              >
                {divisions.map((division, index) => (
                  <option key={index} value={division}>
                    {division}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          <div className="flex gap-2">
            {/* Expected Partner Age */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Expected Partner Age
              </label>
              <TextInput
                type="number"
                required
                defaultValue={data?.partnerAge}
                {...register("partnerAge")}
                placeholder="Enter expected partner age"
              />
            </div>

            {/* Expected Partner Height */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Expected Partner Height
              </label>
              <div className="flex gap-2 items-center">
                <h1>Feet:</h1>
                <select
                  id="Partner-height-feet"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                  {...register("PartnerFeet")}
                  defaultValue={data?.PartnerFeet}
                >
                  <option value="">Select Feet</option>
                  {Array.from({ length: 9 }, (_, i) => i + 3).map((foot) => (
                    <option key={foot} value={foot}>
                      {foot}
                    </option>
                  ))}
                </select>
                <h1>Inch:</h1>
                <select
                  id="Partner-height-inch"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                  {...register("PartnerInch")}
                  defaultValue={data?.PartnerInch}
                >
                  <option value="">Select Inch</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((inch) => (
                    <option key={inch} value={inch}>
                      {inch}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Expected Partner Weight */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Expected Partner Weight
            </label>
            <Select
              defaultValue={data?.partnerWeight}
              required
              {...register("partnerWeight")}
            >
              <option value="">Select Weight</option>
              <option value="30kg">30kg</option>
                <option value="35kg">35kg</option>
                <option value="40kg">40kg</option>
                <option value="45kg">45kg</option>
                <option value="50kg">50kg</option>
                <option value="55kg">55kg</option>
                <option value="60kg">60kg</option>
                <option value="65kg">65kg</option>
                <option value="70kg">70kg</option>
                <option value="75kg">75kg</option>
                <option value="80kg">80kg</option>
                <option value="85kg">85kg</option>
            </Select>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-900">
              Email
            </label>
            <TextInput
              {...register("email")}
              type="email"
              readOnly
              placeholder="User Email"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <TextInput
              {...register("phoneNumber")}
              required
              defaultValue={data?.phoneNumber}
              type="tel"
              placeholder="Enter your mobile number"
            />
          </div>

          {/* Save Changes Button */}
          <div>
            <Button type="submit" className="w-full mt-4">
              Save And Publish Now
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditBioData;
