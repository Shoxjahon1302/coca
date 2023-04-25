import React from 'react';
import dars from '../img/dars.png';
import yulduz from '../img/yulduz.png';
import kupodam from '../img/kupodam.png';

export default function WorkFlow() {
  return (
    <div className="bg-[#F9F9FB] w-full">
      <div className="w-[1540px] m-auto">
        <div className="flex items-end pt-[213px]">
          <div className="">
            <img src={dars} alt="" />
          </div>
          <div className="pl-[131px] flex items-end flex-col">
            <h1 className="text-[#1D1E25] uppercase tracking-[-3px] text-center leading-[115%] text-[64px] font-bold not-italic font-['DM Sans'] w-[678px]">
              We’d like to share our workflow
            </h1>
            <img className="pt-[103px]" src={yulduz} alt="" />
          </div>
          <div className="pl-[68px]">
            <img src={kupodam} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
