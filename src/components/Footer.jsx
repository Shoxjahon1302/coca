import React from 'react';
import LogotipFooter from '../img/logotipfooter.png';

export default function Footer() {
  return (
    <div className="w-full bg-white">
      <div className="w-[1440px] m-auto">
        <div className="flex items-center justify-between pb-[30px] pt-[100px] border-b-2 border-[#E9ECEF] mix-blend-normal">
          <div className="">
            <img className='cursor-pointer' src={LogotipFooter} alt="" />
          </div>
          <div className="flex gap-[31px] items-center">
            <h5 className="text-[#101010] cursor-pointer duration-200 hover:text-[#878787] leading-[160%] text-[16px] font-medium not-italic font-['Inter']">
              Ready to get started?
            </h5>
            <h5 className="bg-[#101010] hover:bg-[#F9F9FB] hover:text-[#101010] duration-200 border border-[#101010] rounded-[8px] p-[12px_42px] text-[#F9F9FB] cursor-pointer leading-[150%] text-[16px] font-bold not-italic font-['Inter']">
              Get Started
            </h5>
          </div>
        </div>
        <div className="flex items-center pt-[40px] justify-between">
          <div className="">
            <h1 className="text-[#101010] cursor-pointer w-[100px] tracking-[-1px] uppercase leading-[120%] text-[40px] font-bold not-italic font-['DM Sans'] ">
              Subscribe newsletter
            </h1>
            <div className="flex items-center pt-[22px]">
              <input
                type="text"
                className="border-b-2 border-[#E2E4EB] h-[50px] mix-blend-normal outline-none"
                placeholder="Email address"
              />
              <div className="text-[#F9F9FB] cursor-pointer duration-200 hover:opacity-50 flex items-center justify-center p-[20px_22px] bg-[#101010] w-[50px] h-[50px] rounded-[8px_8px_0px_0px]">
              <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="">
            <h6 className="text-[#101010] hover:text-[#878787] duration-200 cursor-pointer  pt-[20px] leading-[120%] text-[18px] font-bold not-italic font-['Inter']">
              Services
            </h6>
            <h6 className="text-[#33353E] hover:text-[#878787] duration-200 cursor-pointer pt-[20px] leading-[150%] text-[16px] font-normal not-italic font-['Inter']">
              Email Marketing
            </h6>
            <h6 className="text-[#33353E] hover:text-[#878787] duration-200 cursor-pointer pt-[20px] leading-[150%] text-[16px] font-normal not-italic font-['Inter']">
              Campaigns
            </h6>
            <h6 className="text-[#33353E] hover:text-[#878787] duration-200 cursor-pointer pt-[20px] leading-[150%] text-[16px] font-normal not-italic font-['Inter']">
              Branding
            </h6>
            <h6 className="text-[#33353E] hover:text-[#878787] duration-200 cursor-pointer pt-[20px] leading-[150%] text-[16px] font-normal not-italic font-['Inter']">
              Offline
            </h6>
          </div>
          <div className="">
            <h6 className="text-[#101010] duration-200 cursor-pointer hover:text-[#878787] pt-[20px] leading-[120%] text-[18px] font-bold not-italic font-['Inter']">
              About
            </h6>
            <h6 className="text-[#33353E] duration-200 cursor-pointer hover:text-[#878787] pt-[20px] leading-[150%] text-[16px] font-normal not-italic font-['Inter']">
              Our Story
            </h6>
            <h6 className="text-[#33353E] duration-200 cursor-pointer hover:text-[#878787] pt-[20px] leading-[150%] text-[16px] font-normal not-italic font-['Inter']">
              Benefits
            </h6>
            <h6 className="text-[#33353E] duration-200 cursor-pointer hover:text-[#878787] pt-[20px] leading-[150%] text-[16px] font-normal not-italic font-['Inter']">
              Team
            </h6>
            <h6 className="text-[#33353E] duration-200 cursor-pointer hover:text-[#878787] pt-[20px] leading-[150%] text-[16px] font-normal not-italic font-['Inter']">
              Careers
            </h6>
          </div>
          <div className="pb-[60px]">
            <h6 className="text-[#101010] duration-200 cursor-pointer hover:text-[#878787] leading-[120%] text-[18px] font-bold not-italic font-['Inter']">
              Help
            </h6>
            <h6 className="text-[#33353E] duration-200 cursor-pointer hover:text-[#878787] pt-[20px] leading-[150%] text-[16px] font-normal not-italic font-['Inter']">
              FAQs
            </h6>
            <h6 className="text-[#33353E] duration-200 cursor-pointer hover:text-[#878787] pt-[20px] leading-[150%] text-[16px] font-normal not-italic font-['Inter']">
              Contact Us
            </h6>
          </div>
        </div>
        <div className="flex pt-[67px] pb-[95px] items-center justify-between">
          <div className="flex gap-[55.07px]">
            <h6 className="duration-200 cursor-pointer hover:text-[#878787] text-[#33353E] leading-[160%] text-[16px] font-medium not-italic font-['Inter']">
              Terms & Conditions
            </h6>
            <h6 className="duration-200 cursor-pointer hover:text-[#878787] text-[#33353E] leading-[160%] text-[16px] font-medium not-italic font-['Inter']">
              Privacy Policy
            </h6>
          </div>
          <div className="flex gap-[40.04px] duration-150 ">
            <i className="fa-brands fa-facebook hover:text-[#878787] cursor-pointer duration-200"></i>
            <i className="fa-brands fa-twitter hover:text-[#878787]  cursor-pointer  duration-200"></i>
            <i className="fa-brands fa-instagram hover:text-[#878787]  cursor-pointer  duration-200"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
