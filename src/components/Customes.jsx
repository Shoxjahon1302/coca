import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import qushtirnoq from '../img/qushtirnoq.png';
import ugilbola from '../img/ugilbola.png';
import qizbola from '../img/qizbola.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Customes() {
  const data = [
    {
      title: 'Customer is Our Priority',
      paragraf:
        'Our clients are very satisfied with our service which can be understood by looking at their feedback',
      usertitle: 'really recommend for stay',
      userparagraf:
        '“They are able to help a startup like mine scale and are very responsive to all our unique needs”',
      userimg: ugilbola,
      username: 'Jhonatan Albert',
      job: 'ASN ',
      usertitle2: 'real estate as real',
      userparagraf2:
        'So far we are enjoy to stay in this house. Also amazing experience working together Coca Team. They are very passionate. ',
      userimg2: qizbola,
      job2: 'Student',
      username2: 'Jhonatan Albert',
    },
    {
      title: 'Customer is Our Priority',
      paragraf:
        'Our clients are very satisfied with our service which can be understood by looking at their feedback',
      usertitle: 'really recommend for stay',
      userparagraf:
        '“They are able to help a startup like mine scale and are very responsive to all our unique needs”',
      userimg: ugilbola,
      username: 'Jhonatan Albert',
      job: 'ASN ',
      usertitle2: 'real estate as real',
      userparagraf2:
        'So far we are enjoy to stay in this house. Also amazing experience working together Coca Team. They are very passionate. ',
      userimg2: qizbola,
      job2: 'Student',
      username2: 'Jhonatan Albert',
    },
    {
      title: 'Customer is Our Priority',
      paragraf:
        'Our clients are very satisfied with our service which can be understood by looking at their feedback',
      usertitle: 'really recommend for stay',
      userparagraf:
        '“They are able to help a startup like mine scale and are very responsive to all our unique needs”',
      userimg: ugilbola,
      username: 'Jhonatan Albert',
      job: 'ASN ',
      usertitle2: 'real estate as real',
      userparagraf2:
        'So far we are enjoy to stay in this house. Also amazing experience working together Coca Team. They are very passionate. ',
      userimg2: qizbola,
      job2: 'Student',
      username2: 'Jhonatan Albert',
    },
    {
      title: 'Customer is Our Priority',
      paragraf:
        'Our clients are very satisfied with our service which can be understood by looking at their feedback',
      usertitle: 'really recommend for stay',
      userparagraf:
        '“They are able to help a startup like mine scale and are very responsive to all our unique needs”',
      userimg: ugilbola,
      username: 'Jhonatan Albert',
      job: 'ASN ',
      usertitle2: 'real estate as real',
      userparagraf2:
        'So far we are enjoy to stay in this house. Also amazing experience working together Coca Team. They are very passionate. ',
      userimg2: qizbola,
      job2: 'Student',
      username2: 'Jhonatan Albert',
    },
  ];
  return (
    <div className="bg-[#28292D] w-full sm:overflow-hidden">
      <div className="w-[1440px] m-auto pb-[69px] ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map((item, key) => (
            <SwiperSlide key={key}>
              <div className="pb-[65px] sm:p-[0px_23px]">
                <div className="pt-[121px] sm:flex-col sm:items-start w-[1440px] justify-between flex items-center">
                  <h1 className="text-[#FFFFFF] sm:text-[48px] w-[306px] uppercase leading-[130%] text-[48px] font-semibold not-italic font-['Poppins'] ">
                    {item.title}
                  </h1>
                  <p className="text-[#EDEDED] w-[309px] mr-[20px] leading-[150%] text-[16px] font-medium not-italic font-['Inter']">
                    {item.paragraf}
                  </p>
                </div>
                <div className="flex sm:flex-col sm:items-start items-center justify-between">
                  <div className="">
                    <img className="pt-[76px]" src={qushtirnoq} alt="" />
                    <h3 className="pt-[24px] text-white font-bold not-italic uppercase leading-[120%] text-[18px] font-['DM Sans']">
                      {item.usertitle}
                    </h3>
                    <p className="w-[293px] pt-[40px] font-['Inter'] not-italic text-[16px] font-medium leading-[150%] text-[#EDEDED]">
                      {item.userparagraf}
                    </p>
                    <div className="flex gap-[16px] pt-[22px]">
                      <div className="">
                        <img
                          className="rounded-full"
                          src={item.userimg}
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h5 className="text-[#FFFFFF] font-['Inter'] text-[16px] leading-[150%] not-italic font-medium ">
                          {item.username}
                        </h5>
                        <h6 className="text-[#757B8A] leading-[150%] font-['Plus Jakarta Sans'] text-[14px] font-medium not-italic ">
                          {item.job}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="w-[251px] sm:rotate-0 sm:mt-[32.5px] h-0 border rotate-[90deg] border-[#757B8A]"></div>
                  <div className="">
                    <img
                      className="pt-[81px] sm:pt-11"
                      src={qushtirnoq}
                      alt=""
                    />
                    <h3 className="text-[#FFFFFF] uppercase leading-[120%] text-[18px] pt-[16px] font-bold not-italic font-['DM Sans']">
                      {item.usertitle2}
                    </h3>
                    <p className="text-[#EDEDED] text-[16px] pt-[40px] not-italic font-['Inter'] w-[331px] ">
                      {item.userparagraf2}
                    </p>
                    <div className="flex pt-[24px] gap-[16px]">
                      <div className="">
                        <img
                          className="rounded-full w-[50px] h-[50px] "
                          src={item.userimg2}
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h5 className="text-white leading-[150%] text-[16px] font-medium not-italic font-['Inter']">
                          {item.username2}
                        </h5>
                        <h6 className="text-[#757B8A] leading-[150%] text-[14px] font-medium not-italic font-['Plus Jakarta Sans']">
                          {item.job2}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
