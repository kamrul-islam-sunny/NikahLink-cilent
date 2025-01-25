import { TextInput, Select, Button, Datepicker } from "flowbite-react";
import useAuth from "../../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { use } from "react";
import useSingleBioData from "../../../../Hooks/useSingleBioData";
const EditBioData = () => {
  const { user , loading} = useAuth();
  const divisions = [
    "Dhaka",
    "Chattagra",
    "Rangpur",
    "Barisal",
    "Khulna",
    "Mymensingh",
    "Sylhet",
  ];

  console.log(user);

  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, setValue } = useForm();
  useEffect(() => {
    setValue("email", user?.email || "");
  }, [user, setValue]);
  const onSubmit = (data) => {
    console.log(data);
    axiosPublic.patch("/bioData", data).then((res) => {
      console.log(res.data);
    });
  };

  const data = useSingleBioData() 

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>{user?.email}</h1>
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
              <Select defaultValue={data?.gander} required {...register("gander")}>
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
                defaultValue={data?.birth ? new Date(data.birth) : null}
                onChange={(date) => setValue("birth", date)}
                placeholder="Select your birth date"
              />
            </div>
          </div>

          <div className="flex gap-2">
            {/* Race */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Race
              </label>
              <Select defaultValue={data?.race} required {...register("race")}>
                <option value="">Select Race</option>
                <option value="Fair">Fair</option>
                <option value="Medium">Medium</option>
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
              <div className="flex gap-2">
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
              <Select defaultValue={data?.weight} required {...register("weight")}>
                <option value="">Select Weight</option>
                <option value="50kg">50kg</option>
                <option value="60kg">60kg</option>
                <option value="70kg">70kg</option>
              </Select>
            </div>

            {/* Occupation */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Occupation
              </label>
              <Select defaultValue={data?.occupation} required {...register("occupation")}>
                <option value="">Select Occupation</option>
                <option value="Engineer">Engineer</option>
                <option value="Doctor">Doctor</option>
                <option value="Teacher">Teacher</option>
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
              <Select defaultValue={data?.presentDivision} required {...register("presentDivision")}>
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
              <div className="flex gap-2">
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
            <Select  defaultValue={data?.partnerWeight} required {...register("partnerWeight")}>
              <option value="">Select Weight</option>
              <option value="50kg">50kg</option>
              <option value="60kg">60kg</option>
              <option value="70kg">70kg</option>
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
              defaultValue={data?.phoneNumber}
              type="tel"
              placeholder="Enter your mobile number"
            />
          </div>

          {/* Save Changes Button */}
          <div>
            <Button type="submit" className="w-full mt-4">
              Save Changes
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditBioData;
