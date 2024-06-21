import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { axiosSecure } from '../../Providers/UseAxiosSecure';
import { FaUserCircle } from 'react-icons/fa';

const TestimonialSlider = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axiosSecure.get('/api/reviews');
        if (Array.isArray(response.data)) {
          setReviews(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className='h-full flex items-center' style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://i.ibb.co/d5hcHtK/2148889158.jpg')" }}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper w-11/12 m-auto"
      >
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-gray-100 bg-opacity-40 text-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <h3 className="text-lg font-semibold dark:text-gray-900 text-white">{review.feedback}</h3>
                  <p className="my-4 dark:text-gray-900 text-white">Rating: {review.rating} Star</p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                  <div>
                    {review.userPhoto ? (
                      <img className="rounded-full w-9 h-9" src={review.userPhoto} alt="profile picture" />
                    ) : (
                      <FaUserCircle className='h-16 w-16 text-gray-500' /> // Default avatar icon
                    )}
                  </div>

                  <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                    <div>{review.userName}</div>
                    <div className="text-sm dark:text-gray-500 text-gray-200 ">{review.userEmail}</div>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="flex items-center justify-center h-full">
              <p className="text-white">No reviews available</p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
