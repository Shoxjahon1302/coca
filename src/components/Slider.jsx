import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
  return (
    <div className="bg-[#F9F9FB] w-full h-auto">
      <div className="w-[1540px] m-auto pb-[145px]">
        <Swiper
          className="cursor-pointer"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <h1 className="text-[#E9ECF2] pt-[42px] tracking-[-0.04em] leading-[86px] text-[80px] font-bold not-italic font-['DM Sans']">
              01
            </h1>
            <h1 className="text-[#1D1E25] pt-[20px] uppercase tracking-[-1px] leading-[120%] text-[40px] font-bold not-italic font-['DM Sans']">
              Research & Plan
            </h1>
            <p className="w-[357px] font-['Inter'] pt-[16px] not-italic font-normal text-[16px] leading-[150%] text-[#757B8A]">
              Design process is critical for gathering information,
              requirements, and other data you need in order to make informed
              decisions later.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-[#E9ECF2] pt-[42px] tracking-[-0.04em] leading-[86px] text-[80px] font-bold not-italic font-['DM Sans']">
              02
            </h1>
            <h1 className="text-[#1D1E25] pt-[20px] uppercase tracking-[-1px] leading-[120%] text-[40px] font-bold not-italic font-['DM Sans']">
              Mock Up
            </h1>
            <p className="w-[367px] font-['Inter'] pt-[16px] not-italic font-normal text-[16px] leading-[150%] text-[#757B8A]">
              Creating a mock up is the step of the design process most people
              recognize — it’s the most visual part of the process In-depth
              sketching and brainstorming.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-[#E9ECF2] pt-[42px] tracking-[-0.04em] leading-[86px] text-[80px] font-bold not-italic font-['DM Sans']">
              03
            </h1>
            <h1 className="text-[#1D1E25] pt-[20px] uppercase tracking-[-1px] leading-[120%] text-[40px] font-bold not-italic font-['DM Sans']">
              Build
            </h1>
            <p className="w-[357px] font-['Inter'] pt-[16px] not-italic font-normal text-[16px] leading-[150%] text-[#757B8A]">
              Implement the solution (often with the help of other professionals
              like programmers, printers, or manufacturers)Revise the solution
              as technical issues.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-[#E9ECF2] pt-[42px] tracking-[-0.04em] leading-[86px] text-[80px] font-bold not-italic font-['DM Sans']">
              01
            </h1>
            <h1 className="text-[#1D1E25] pt-[20px] uppercase tracking-[-1px] leading-[120%] text-[40px] font-bold not-italic font-['DM Sans']">
              Research & Plan
            </h1>
            <p className="w-[357px] font-['Inter'] pt-[16px] not-italic font-normal text-[16px] leading-[150%] text-[#757B8A]">
              Design process is critical for gathering information,
              requirements, and other data you need in order to make informed
              decisions later.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="text-[#E9ECF2] pt-[42px] tracking-[-0.04em] leading-[86px] text-[80px] font-bold not-italic font-['DM Sans']">
              02
            </h1>
            <h1 className="text-[#1D1E25] pt-[20px] uppercase tracking-[-1px] leading-[120%] text-[40px] font-bold not-italic font-['DM Sans']">
              Mock Up
            </h1>
            <p className="w-[367px] font-['Inter'] pt-[16px] not-italic font-normal text-[16px] leading-[150%] text-[#757B8A]">
              Creating a mock up is the step of the design process most people
              recognize — it’s the most visual part of the process In-depth
              sketching and brainstorming.
            </p>
          </SwiperSlide>
          <SwiperSlide className='pb-[91px]'>
            <h1 className="text-[#E9ECF2] pt-[42px] tracking-[-0.04em] leading-[86px] text-[80px] font-bold not-italic font-['DM Sans']">
              03
            </h1>
            <h1 className="text-[#1D1E25] pt-[20px] uppercase tracking-[-1px] leading-[120%] text-[40px] font-bold not-italic font-['DM Sans']">
              Build
            </h1>
            <p className="w-[357px] font-['Inter'] pt-[16px] not-italic font-normal text-[16px] leading-[150%] text-[#757B8A]">
              Implement the solution (often with the help of other professionals
              like programmers, printers, or manufacturers)Revise the solution
              as technical issues.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
