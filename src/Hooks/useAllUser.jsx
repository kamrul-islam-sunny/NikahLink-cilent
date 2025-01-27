
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllUser = () => {

    const axiosPublic = useAxiosPublic();
    const { data: users = [], refetch, isPending } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await axiosPublic.get("/allBioData");
        return res.data;
      },
    });

    return [users, refetch,isPending]
};

export default useAllUser;