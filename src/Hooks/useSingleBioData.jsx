import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useSingleBioData = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { data: singleData = {} } = useQuery({
      queryKey: ["singleBioData", user?.email],
      queryFn: async () => {
        const res = await axiosPublic.get(`viewBioData/?email=${user?.email}`);
        return res.data;
      },
    });

    return singleData;
};

export default useSingleBioData;