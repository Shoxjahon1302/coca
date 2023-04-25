import React from 'react';
import like from '../img/like.png';
import uy1 from '../img/uy1.png';
import uy2 from '../img/uy2.png';
import uy3 from '../img/uy3.png';
import kub from '../img/kub.png';

export default function Magnificent() {
  return (
    <div className="bg-[#28292D] sm:overflow-hidden">
      <div className="flex w-[1440px] m-auto h-auto sm:flex-col sm:items-start sm:p-[75px_54px] items-center pt-[130px] pb-[138px]">
        <div className="">
          <h1 className="text-[#FFFFFF] w-[470px] sm:text-[48px] sm:w-[326px] text-[72px] uppercase tracking-[-3px] font-['DM Sans'] font-bold leading-[115%]">
            Magnificent work
          </h1>
          <p className="text-[#FFFFFF] sm:w-[326px] sm:text-[16px] pt-[24px] w-[511px] leading-[150%] text-[16px] font-normal font-['Inter']">
            Donec bibendum, dui id ultrices molestie, neque neque porta felis,
            id viverra ligula justo interdum mi. Dummy content lorem ispum nunc
            malesuada, risus eu maximus consequat, purus enim ultricies nisi,
            elit ante et turpis.
          </p>
          <div className="mt-[60px] flex items-center w-[80px] h-[80px] gap-[56px] border p-[25px]  border-[#ABB2C4] rounded-full">
            <img src={like} alt="" />
            <div className="">
              <h1 className="text-[#FFFFFF] text-[64px] font-['DM Sans'] font-bold leading-[115%] tracking-[-3px]">
                875+
              </h1>
              <h5 className="text-[#ABB2C4] pt-[3px] text-[18px] leading-[160%] font-['Inter'] font-normal ">
                Projects Done
              </h5>
            </div>
          </div>
          <div className="mt-[60px] flex items-center w-[80px] h-[80px] gap-[56px] border p-[25px]  border-[#ABB2C4] rounded-full">
            <img src={kub} alt="" />
            <div className="">
              <h1 className="text-[#FFFFFF]  text-[64px] font-['DM Sans'] font-bold leading-[115%] tracking-[-3px]">
                320
              </h1>
              <h5 className="text-[#ABB2C4] w-[150px] text-start pt-[3px] text-[18px] leading-[160%] font-['Inter'] font-normal ">
                Products Created
              </h5>
            </div>
          </div>
        </div>
        <div className=" flex sm:justify-start  items-end gap-[30px] justify-end w-full">
          <div className="flex ">
            <img
              className="w-[278px] h-[536px] object-cover"
              src={uy3}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[30px]">
            <img
              className="w-[278px] rounded-[12px] object-cover"
              src={uy2}
              alt=""
            />
            <img
              className="w-[563px] h-[366px] rounded-[12px_0px_0px_12px]"
              src={uy1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
