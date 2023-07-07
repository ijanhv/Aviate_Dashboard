import React from "react";
import { FiMenu } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { FiMessageSquare } from "react-icons/fi";
import { BsCalendar4 } from "react-icons/bs";
import { LogOut } from "lucide-react";

const menuItems = [
  {
    icon: <RxDashboard className="text-white text-3xl" />,
    title: "Dashboard",
  },
  {
    icon: <PiSuitcaseSimpleLight className="text-white text-3xl" />,
    title: "My Jobs",
  },
  {
    icon: <FiMessageSquare className="text-white text-3xl" />,
    title: "Messages",
  },
  {
    icon: <BsCalendar4 className="text-white text-3xl" />,
    title: "Calendar",
  },
];

const DashboardSidebar = () => {
  return (
    <div className="hidden md:block bg-[#22506C] h-screen w-[110px] fixed top-0 left-0 ">
      <div className="flex flex-col items-center justify-center pt-32">
        <FiMenu className="text-white text-3xl" />
      </div>
      <div className="flex flex-col items-center justify-center space-y-10 pt-20 align-middle">
        {menuItems.map((item) => (
          <div
          key={item.title}
            className={`flex flex-col items-center cursor-pointer ${
              item.title == "Dashboard"
                ? " border-r-8 border-l-8 p-2  border-yellow-400"
                : ""
            }`}
          >
            {item.icon}
            <span className="text-white text-[15px] my-2 font-poppins">
              {item.title}
            </span>
          </div>
        ))}

        <p className="text-black rounded-md text-xs px-2 bg-white border-black my-2 font-poppins">
          HELP
        </p>
        <div className="flex flex-col items-center justify-center">
          <LogOut className="text-white text-3xl" />
          <span className="text-white text-[15px] my-2 font-poppins">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
