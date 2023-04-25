import React from 'react';
import dars from '../img/dars.png';
import yulduz from '../img/yulduz.png';
import kupodam from '../img/kupodam.png';

export default function WorkFlow() {
  return (
    <div className="bg-[#F9F9FB] w-full sm:overflow-hidden">
      <div className="w-[1540px] m-auto ">
        <h1 className="text-[#1D1E25] sm:pt-[153px] sm:text-[48px] sm:tracking-[-3px] sm:w-[386px] uppercase tracking-[-3px] text-center leading-[115%] text-[64px] font-bold not-italic font-['DM Sans'] w-[678px]">
          We’d like to share our workflow
        </h1>
        <div className="flex sm:mt-[36px] sm:overflow-hidden justify-between sm:flex sm:justify-start sm:gap-6 items-end pt-[213px] sm:p-[0px_23px] sm:pt-0">
          <div className="">
            <img className='sm:w-[150px] sm:h-[150px] object-contain' src={dars} alt="" />
          </div>
          <div className="flex items-end flex-col">
            <img className="pt-[103px]" src={yulduz} alt="" />
          </div>
          <div className="pl-[68px] sm:pl-0 sm:w-[200px]">
            <img src={kupodam} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
