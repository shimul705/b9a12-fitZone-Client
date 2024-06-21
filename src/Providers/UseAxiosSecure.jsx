import axios from 'axios';


export const axiosSecure = axios.create({
  baseURL: 'https://b9a12-server-side-shimul705.vercel.app'
})

const UseAxiosSecure = () => {
  return axiosSecure;
};

export default UseAxiosSecure;