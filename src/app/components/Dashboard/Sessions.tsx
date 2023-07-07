import Image from "next/image";
import React from "react";
import SesssionImage from "../../assets/session.png";

const SessionsData = [
  {
    id: 1,
    name: "Mock Interview",
    date: "24th August , 2022",
    time: "9:00 AM - 11:00 AM",
  },
  {
    id: 2,
    name: "Portfolio Presentation",
    date: "10th Sept , 2022",
    time: "12:00 PM - 2:00 PM",
  },
  {
    id: 3,
    name: "Technical Round",
    date: "10th Sept , 2022",
    time: "12:00 PM - 2:00 PM",
  },
];

const SessionsCard = ({ session }: any) => {
  return (
    <div
      className={`w-full rounded-sm px-5  mt-2 ${
        session.id === SessionsData.length ? "" : "border-b border-[#D2CECE]"
      } py-2`}
    >
      <div className="flex justify-between items-center flex-row">
        <div className="flex flex-col ">
          <h3 className="text-[15px] font-poppins font-[500] text-black">
            {session.name}
          </h3>
          <p className="text-[12px] font-poppins text-black opacity-50 ">
            {session.date}
          </p>
          <p className="text-[12px] font-poppins text-black font-[500]">
            ({session.time})
          </p>
        </div>
        <div className="flex flex-col text-[15px] text-center bg-[#FEB27BB2] rounded-md p-2">
          <p className="text-[#894A01] text-[10px]">Enroll Now</p>
        </div>
      </div>
    </div>
  );
};

const Sessions = () => {
  return (
    <div className="w-full shadow-sm bg-white rounded-md">
      <div className="container flex flex-col p-3 sm:p-2 items-center space-y-4">
        <Image
          src={SesssionImage}
          alt="Session"
          width={234}
          height={130}
          className="object-contain"
        />
        <div className="flex justify-between items-center w-full px-4">
          <h2 className="text-[15px]">Suggested Sessions</h2>
          <p className="text-[10px] text-[#043CA7]">See All</p>
        </div>
        <div className="items-center w-full px-4">
          {SessionsData.map((session) => (
            <SessionsCard session={session} key={session.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sessions;
