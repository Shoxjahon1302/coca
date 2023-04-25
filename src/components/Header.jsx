import { useState } from 'react';
import logo from '../img/logo.png';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="max-w-full bg-[#F9F9FB]">
      <nav className="w-[1440px] m-auto ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center  md:flex md:px-8">
          <div className=" items-center gap-10 md:flex">
            <div>
              <div className="flex items-center  justify-between py-3 md:py-5 md:block">
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
      </nav>
    </div>
  );
}
