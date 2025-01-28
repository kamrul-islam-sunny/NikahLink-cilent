import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';

const useIsPayment = (id) => {
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    const { data } = useQuery({
        queryKey: ["bioDataDetails", user?.email],
        queryFn: async () => {
          const res = await axiosPublic.get(`/check-payment?bioDataId=${id}&userEmail=${user?.email}`);
          // console.log(res.data);
          return res.data.isPaid; 
        },
      });
    return data;
};

export default useIsPayment;