import React from "react";
import Avalon1 from "../../assets/Avalon-PNG1.png";
import Avalon2 from "../../assets/Avalon-PNG2.png";
import Image from "next/image";

const JobData = [
  {
    id: 1,
    imageSrc: Avalon1,
    title: "UX Designer",
    address: "Avalon Meta, Mumbai",
    posted: "Posted 2 days ago",
    numberOfApplicants: "100",
  },
  {
    id: 2,
    imageSrc: Avalon2,
    title: "UX Designer",
    address: "CRED, Bengaluru",
    posted: "Posted 1 week ago",
    numberOfApplicants: "12",
  },
];

const JobCard = ({ job }: any) => {
  return (
    <div className="w-full  rounded-sm px-8  mt-4  py-3 border-b border-slate-400">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <Image
            width={80}
            height={80}
            src={job.imageSrc}
            alt="Avalon"
            className="object-contain"
          />
          <div className="flex flex-col ml-20">
            <h3 className="text-[15px] font-poppins font-[500] text-black">
              {job.title}
            </h3>
            <p className="text-[12px] font-poppins text-black opacity-50 ">
              {job.address}
            </p>
            <p className="text-[12px] font-poppins text-black opacity-50 font-[500">
              {job.posted}
            </p>
            <p className="text-[12px] font-poppins text-black opacity-50 font-[500">
              {job.numberOfApplicants} applicants
            </p>
          </div>
        </div>

        <div className="flex flex-col text-[15px] text-center bg-white border border-[#2CC369] text-[#2CC369] rounded-full px-3 py-1 shadow-md">
          <p className="text-[13px]">Apply Now</p>
        </div>
      </div>
    </div>
  );
};

const Jobs = () => {
  return (
    <div className="bg-white shadow-sm w-full">
      {JobData.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}
    </div>
  );
};

export default Jobs;
