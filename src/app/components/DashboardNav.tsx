import Link from "next/link";
import React from "react";
import AviateLogo from "../assets/aviate-logo.png";
import Image from "next/image";
import { Search } from "lucide-react";
import { FiAward } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import User from "../assets/user.png";

const DashboardNav = () => {
  return (
    <nav className="py-1 shadow-sm bg-[#22506C] h-[80px] min-w-full items-center z-50">
      <div className="container flex items-center justify-between space-x-5">
        <Link href="/">
          <Image
            src={AviateLogo}
            alt="Aviate Logo"
            width={170}
            height={45}
            className="cursor-pointer"
          />
        </Link>
        {/* Search bar */}
        <div className="w-full max-w-md relative sm:flex hidden ">
          <span className="absolute text-lg top-3 left-4 text-secondary-400 ">
            <Search />
          </span>

          <input
            type="text"
            className="h-[45px] text-sm bg-[#F3F3F3] w-[601.01px] pl-12 py-3 pr-3 rounded-md focus:outline-none"
            placeholder="Type to search"
          />
        </div>
        {/* Search bar */}

        {/* Icons */}
        <div className="flex items-center space-x-7 text-center  ">
          <>
            <Link
              href="/dashboard"
              className="transition cursor-pointer relative"
            >
              <FiMessageSquare className="text-white text-3xl" />
              <span className="absolute top-0 inline-flex items-center justify-center w-4 h-4 bg-[#FFD600] rounded-full text-black text-xs">
                4
              </span>
            </Link>

            <Link
              href="/cart"
              className=" transition cursor-pointer relative"
            >
              <IoNotificationsOutline className="text-white text-3xl " />
              <span className="absolute top-0 inline-flex items-center justify-center w-4 h-4 bg-[#FFD600] rounded-full text-black text-xs">
                2
              </span>
            </Link>

            <Link
              href="/cart"
              className=" transition cursor-pointer relative"
            >
              <FiAward className="text-white text-3xl" />
              <span className="absolute top-0 inline-flex items-center justify-center w-4 h-4 bg-[#FFD600] rounded-full text-black text-xs">
                5
              </span>
            </Link>
          </>
        </div>

        {/* Icons */}

        <div className="flex text-[20px] text-[#338573] items-center text-center font-noto ">
          <div className="w-[70px] h-[70px]">
            <Image
              src={User}
              alt="User"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </div>
          <div>
            <h1 className="text-white font-poppins text-[13px]">
              Akash Mishra
            </h1>
            <button className="bg-white text-black border border-black w-[100.94px]  uppercase text-[8.07px] rounded-[4px]  font-poppoins shadow-md  h-[19.28px] font-noto">
              Edit My Profile
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
