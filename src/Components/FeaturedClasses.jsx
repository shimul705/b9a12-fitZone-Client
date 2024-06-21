import { useState, useEffect } from 'react';
import { axiosSecure } from '../Providers/UseAxiosSecure';
// import axios from 'axios';
// import { axiosSecure } from '../../Providers/UseAxiosSecure';

const FeaturedClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axiosSecure.get('/api/featuredClasses');
        const sortedClasses = response.data.sort((a, b) => (b.totalBookings || 0) - (a.totalBookings || 0));
        setClasses(sortedClasses.slice(0, 6));
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  return (
    <>
      <div className="text-center mt-40">
        <h1 className="text-5xl font-bold my-2">Featured Classes</h1>
        <p className="text-xl w-2/3 m-auto my-4">
          Discover our top-rated classes designed to help you achieve your fitness goals. From high-intensity interval training to relaxing yoga sessions, our expert-led classes cater to all fitness levels. Join now and take the first step towards a healthier, stronger you.
        </p>
      </div>
      <div className="w-11/12 my-10 m-auto grid grid-cols-3 gap-10">
        {classes.map(classData => (
          <a key={classData._id} className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70" href="#">
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
              <img
                className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                src={classData.imageUrl} // You need to replace this with classData.image or some other property from your API data
                alt="Image Description"
              />
            </div>
            <div className="p-4 md:p-5">
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {classData.className}
                </h3>
                <p className='mt-1 text-base font-semibold text-gray-800 dark:text-neutral-400'>
                  Booking : {classData.totalBookings || 0}
                </p>
              </div>
              <p className="mt-1 text-gray-500 dark:text-neutral-400">
                {classData.details}
              </p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default FeaturedClasses;
