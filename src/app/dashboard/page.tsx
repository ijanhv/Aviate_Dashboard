import { BsDot, BsThreeDotsVertical } from "react-icons/bs";
import Applications from "../components/Dashboard/Applications";
import Sessions from "../components/Dashboard/Sessions";
import { FiMenu } from "react-icons/fi";
import Jobs from "../components/Dashboard/Jobs";
import Events from "../components/Dashboard/Events";

export default function Home() {
  return (
    <div className="md:ml-36 mt-4 w-full container">
      <div className=" grid grid-cols-12 gap-5 xl:mr-16">
        <div className="col-span-12 md:col-span-8 ">
          <div className="flex justify-between">
            <h1 className="text-[27px] font-poppins mt-4 text-secondary-600">
              Dasboard
            </h1>
            <div className="flex flex-col items-center space-x-4">
              <p className="font-poppins text-[17px]">Job Search Status</p>
              <select className="bg-white text-black border text-center  border-black w-[190px] h-[31px] text-[12px] rounded-full  font-poppins ">
                <option value="BsDot">Acitvely Interviewing</option>
              </select>
            </div>
          </div>
          <Applications />
        </div>
        <div className="col-span-12 md:col-span-4">
          <Sessions />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 xl:mr-16 mt-10">
        <div className="col-span-12 md:col-span-8 ">
          <div className="justify-between flex items-center text-[27px]">
            <h1 className="">Jobs Recommendations for You</h1>
            <BsThreeDotsVertical />
          </div>
          <div className="justify-between flex items-center">
            <ul className="flex gap-3">
              <li className="text-[12px] font-poppins text-black opacity-70">
                UX Designer
              </li>
              <li className="text-[12px] font-poppins text-black opacity-70">
                50K - 75K
              </li>
              <li className="text-[12px] font-poppins text-black opacity-70">
                Mumbai, Bengaluru, Pune
              </li>
            </ul>
            <p className="text-[15px] font-poppins text-[#043CA7]">See all</p>
          </div>
          <Jobs />
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="justify-between flex items-center text-[27px] px-4 mr-3">
            <h1 className="mb-2">Upcoming Events</h1>
            <BsThreeDotsVertical />
          </div>
          <Events />
        </div>
      </div>
    </div>
  );
}
