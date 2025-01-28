
import axios from 'axios'

const axiosSecure = axios.create({
    baseURL: 'https://matrimony-server-side-zeta.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;
