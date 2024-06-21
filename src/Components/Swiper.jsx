// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './css/custom.css'

const Swipers = () => {
  return (
    
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className='w-full grid grid-cols-2'>
          <div className=' h-full bg-gradient-to-r from-[#292933] to-black  flex flex-col text-white items-center justify-center'>
            <div className='flex flex-col text-white items-center justify-center bg-black/40 py-10 px-16 rounded-lg shadow-lg'>
              <h1 className='text-6xl my-5'>Transform Your Body</h1>
              <p className='text-2xl'>Achieve Your Fitness Goals with Expert Guidance</p>
            </div>

          </div>
          <img className=' ' src="https://i.ibb.co/cT47yR5/5209.jpg" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='w-full grid grid-cols-2'>
          <div className=' h-full bg-gradient-to-r from-[#292933] to-black  flex flex-col text-white items-center justify-center'>
            <div className='flex flex-col text-white items-center justify-center bg-black/40 py-10 px-16 rounded-lg shadow-lg'>
              <h1 className='text-6xl my-5'>Get Fit, Stay Strong</h1>
              <p className='text-2xl'>Join Our Community of Health Enthusiasts</p>
            </div>

          </div>
          <img className=' ' src="https://i.ibb.co/yg2F0nf/27879.jpg" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='w-full grid grid-cols-2'>
          <div className=' h-full bg-gradient-to-r from-[#292933] to-black  flex flex-col text-white items-center justify-center'>
            <div className='flex flex-col text-white items-center justify-center bg-black/40 py-10 px-16 rounded-lg shadow-lg'>
              <h1 className='text-6xl my-5'>Unlock Your Potential</h1>
              <p className='text-2xl'>Tailored Training for Every Fitness Journey</p>
            </div>

          </div>
          <img className=' ' src="https://i.ibb.co/x5N19FD/9905.jpg" alt="" />
        </div>
      </SwiperSlide>

    </Swiper>
  );
};

export default Swipers;