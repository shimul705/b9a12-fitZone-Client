import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure, { axiosSecure } from "./UseAxiosSecure";


const UseReview = () => {
    // tan stack query
    const axiosSecure = UseAxiosSecure();
    const {data: review} = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
          const res = await axiosSecure.get('/api/reviews');
          return res.data;
        }
    })

    return review
};

export default UseReview;