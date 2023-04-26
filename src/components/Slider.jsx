import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
  const data = [
    {
      h1: '01',
      name: 'Research & Plan',
      paragraf: `Design process is critical for gathering information,
      requirements, and other data you need in order to make informed
      decisions later.
      `,
    },
    {
      h1: '02',
      name: 'Mock Up',
      paragraf: `Creating a mock up is the step of the design process most people
      recognize — it’s the most visual part of the process In-depth
      sketching and brainstorming.
      `,
    },
    {
      h1: '03',
      name: 'Build',
      paragraf: `Implement the solution (often with the help of other professionals
        like programmers, printers, or manufacturers)Revise the solution
        as technical issues.
      `,
    },
    {
      h1: '01',
      name: 'Research & Plan',
      paragraf: `Design process is critical for gathering information,
      requirements, and other data you need in order to make informed
      decisions later.
      `,
    },
    {
      h1: '02',
      name: 'Mock Up',
      paragraf: `Creating a mock up is the step of the design process most people
      recognize — it’s the most visual part of the process In-depth
      sketching and brainstorming.
      `,
    },
    {
      h1: '03',
      name: 'Build',
      paragraf: `Implement the solution (often with the help of other professionals
        like programmers, printers, or manufacturers)Revise the solution
        as technical issues.
      `,
    },
  ];
  return (
    <div className="bg-[#F9F9FB] w-full h-auto sm:overflow-hidden">
      <div className="w-[1540px] m-auto pb-[145px] ">
        <Swiper
          className="cursor-pointer"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          scrollbar={{ draggable: true }}
        >
          {data.map((item) => (
            <SwiperSlide className="pb-[100px] p-[0px_43px]">
              <h1 className="text-[#E9ECF2] sm:text-[60px] pt-[42px] tracking-[-0.04em] leading-[86px] text-[80px] font-bold not-italic font-['DM Sans']">
                {item.h1}
              </h1>
              <h1 className="text-[#1D1E25] sm:text-[24px]  pt-[20px] uppercase tracking-[-1px] leading-[120%] text-[40px] font-bold not-italic font-['DM Sans']">
                {item.name}
              </h1>
              <p className="w-[357px] sm:text-[14px] sm:w-[178px] font-['Inter'] pt-[16px] not-italic font-normal text-[16px] leading-[150%] text-[#757B8A]">
                {item.paragraf}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
