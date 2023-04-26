import { useState } from 'react';
import logo from '../img/logo.png';
import uy from '../img/uy.png';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="max-w-full bg-[#F9F9FB] sm:overflow-hidden">
      <nav className="w-[1440px] m-auto ">
        <div className="justify-between px-[20px] sm:justify-between mx-auto md:items-center  md:flex">
          <div className=" items-center md:flex">
            <div>
              <div className="flex items-center  justify-between py-3 md:py-5 md:block max-w-[335px]">
                <h2 className="text-2xl font-bold text-white">
                  <img src={logo} alt="" />
                </h2>
                <div className="md:hidden">
                  <button
                    className="p-2 outline-none text-[30px]"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <ion-icon name="close"></ion-icon>
                    ) : (
                      <ion-icon name="menu-outline"></ion-icon>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={` flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? 'block' : 'hidden'
                }`}
              >
                <ul className="items-center justify-start space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-[#878787] font-semibold text-[16px] duration-200 hover:text-[#1D1D21]">
                    <a href="/">Home</a>
                  </li>
                  <li className="text-[#878787] font-semibold text-[16px] duration-200 hover:text-[#1D1D21]">
                    <a href="/">Blog</a>
                  </li>
                  <li className="text-[#878787] font-semibold text-[16px] duration-200 hover:text-[#1D1D21]">
                    <a href="/">Pricing</a>
                  </li>
                  <li className="text-[#878787] font-semibold text-[16px] duration-200 hover:text-[#1D1D21]">
                    <a href="/">Contact</a>
                  </li>
                </ul>
                <div className="block md:hidden mt-5 mb-5 space-x-5">
                  <h3 className="text-[#1D1D21] font-semibold text-[16px] font-['Inter']">
                    Sign in
                  </h3>
                  <button className="p-[15px_52px] mt-5 text-white bg-[#1D1D21] rounded-[100px] hover:bg-gray-300">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="space-x-5 hidden md:block">
            <div className="flex items-center space-x-10">
              <h3 className="text-[#1D1D21] hover:text-gray-300 duration-200 cursor-pointer font-semibold text-[16px] font-['Inter']">
                Sign in
              </h3>
              <button className="p-[16px_32px] duration-200 text-white bg-[#1D1D21] rounded-[100px] hover:bg-gray-300">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
        <div className="flex sm:p-[0px_23px] sm:flex-col">
          <div className="flex flex-col items-start">
            <div className="mt-[65.57px] border border-[#1D1D21] rounded-[100px] font-bold sm:text-[12px] text-[14px] p-[8px_12px] text-[#1D1D21] font-['Inter'] leading-[150%]">
              PROPERTY SOLUTION FOR ALL
            </div>
            <h1 className="pt-[24px] sm:text-[60px] sm:w-[314px]  w-[764px] leading-[110%] tracking-[-3px] text-[#101010] uppercase text-[140px] font-['DM Sans'] font-bold">
              ECOHOUSE Style
            </h1>
            <p className="text-[#878787] pt-[24px] sm:text-[14px] sm:w-[270px] w-[412px] leading-[150%] text-[16px] font-medium font-['Inter']">
              Stay informed about the market with real estate news and insights
              provided by real estate professionals and government agencies.
            </p>
            <div className="flex sm:flex-col sm:items-start gap-[16px] mt-[30px] items-center sm:pb-0 pb-[165px]">
              <h4 className="bg-[#1D1D21] hover:bg-white border cursor-pointer border-[#1D1D21] duration-200 hover:text-[#1D1D21] rounded-[100px] p-[16px_32px] text-[#FFFFFF] leading-[150%] font-semibold not-italic font-['Inter']">
                See Our Case Studies
              </h4>
              <h4 className="border p-[16px_24px] hover:text-white hover:bg-[#1D1D21] duration-200 cursor-pointer  border-[#1D1D21] rounded-[100px] ">
                <i className="fa-regular fa-circle-play"></i> Watch A Demo
              </h4>
            </div>
          </div>
          <div className="">
            <img className="sm:w-[295px] " src={uy} alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
}
