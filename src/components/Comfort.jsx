import React from 'react';
import uyichi2 from '../img/uyichi2.png';
import uyichi from '../img/uyichi.png';
import balanduy from '../img/turtuy.png';
export default function Comfort() {
  return (
    <div className="bg-[#F9F9FB] max-w-full">
      <div className=" w-[1440px] m-auto pt-[120px]">
        <div className="flex sm:flex sm:flex-col sm:items-start p-[75px_54px] items-center gap-[106px] sm:gap-[43px]">
          <div className="">
            <h1 className="font-['DM Sans'] sm:w-[286px] sm:tracking-[-1px] w-[510px] sm:text-[48px] font-bold text-[64px] leading-[115%] text-[#101010] tracking-[-3px]">
              THE COMFORT INTERIOR
            </h1>
            <p className="w-[409px] sm:text-[16px] pt-[32px] sm:w-[280px] font-['Inter'] font-medium text-[16px] text-[#878787] leading-[150%]">
              Finally an article that won't rehash the same old information!
              Here are 5 tips from realtors all over the world on how to choose
              the best property agent for you
            </p>
          </div>
          <div className=""></div>
          <img
            className="w-[584px] h-[372px] sm:ml-[150px] sm:w-[340px] sm:h-[200px] object-contain rounded-[16px]"
            src={uyichi2}
            alt=""
          />
        </div>
        <img
          className="mt-[48px] sm:m-[10px_43px] sm:w-[375px] sm:h-[170px] sm:object-contain  rounded-[16px] w-[869px] h-[372px]"
          src={uyichi}
          alt=""
        />
        <div className="flex pt-[200px] sm:m-[0px_43px] sm:flex-col sm:items-start items-end gap-[67px]">
          <img className='sm:w-[437px] sm:object-contain' src={balanduy} alt="" />
          <div className="">
            <h1 className="text-[#101010] w-[542px] sm:text-[48px] sm:tracking-[-1px] sm:w-[296px] pb-[32px] uppercase tracking-[-3px] not-italic leading-[115%] text-[64px] font-bold font-['DM Sans']">
              The best places to live in your city, according to real estate
              agents
            </h1>
            <p className="text-[#878787] w-[495px] leading-[150%] sm:text-[16px] sm:w-[336px] text-[16px] font-medium not-italic font-['Inter'] ">
              It's one of the most exciting moments in your life – but it can
              also be overwhelming. As you start house hunting, there are a few
              easy things you should look out for to make sure you'll be happy
              in your next home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
