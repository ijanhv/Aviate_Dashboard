import React from "react";
import Book from "../../assets/book.png";
import Unacademy from "../../assets/unacademy.png";
import Udemy from "../../assets/udemy.png";
import Image from "next/image";

const ApplicationData = [
  {
    id: 1,
    imageSrc: Book,
    title: "Senior Product Designer",
    company: "Techmint , On-site",
    location: "Bengaluru, India",
    salary: "₹ 50K - ₹ 70K",
    status: "Rejected",
  },
  {
    id: 2,
    imageSrc: Unacademy,
    title: "Senior Product Designer",
    company: "Unacademy , Work from home",
    location: "Bengaluru, India",
    salary: "₹ 60K - ₹ 80K",
    status: "In Process",
  },
  {
    id: 3,
    imageSrc: Udemy,
    title: "Senior Product Designer",
    company: "Udemy , On-site",
    location: "Bengaluru, India",
    salary: "₹ 60K - ₹ 75K",
    status: "Selected",
  },
];

const ApplicationsCard = ({ application }: any) => {
  return (
    <div className="w-full shadow-sm rounded-sm px-5  mt-4 ">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <Image
            src={application.imageSrc}
            alt="Book"
            width={90}
            height={90}
            className="object-contain"
          />
          <div className="flex flex-col ml-10">
            <h3 className="text-[15px] font-poppins font-[500] text-black">
              {application.title}
            </h3>
            <p className="text-[12px] font-poppins text-black opacity-50 ">
              {application.company}
            </p>
            <p className="text-[12px] font-poppins text-black opacity-50 font-[500">
              {application.location}
            </p>
          </div>
          
        </div>

        <div className="flex flex-col text-[15px] text-center">
            <p>{application.salary}</p>
            <p className="text-black text-[10px] opacity-50">Per Month</p>
          </div>

        <div className="">
          <span
            className={`${
              application.status === "Rejected"
                ? "bg-[#FFAAAA] text-[#AF0808]"
                : application.status === "Selected"
                ? "bg-[#C4FFD1] text-[#00A324]"
                : application.status === "In Process"
                ? "bg-[#FFF3B2] text-[#AE9407]"
                : ""
            } 
             text-[10px] font-poppins rounded-full px-5 py-1`}
          >
            {application.status}
          </span>
        </div>
      </div>
    </div>
  );
};

const Applications = () => {
  return (
    <div className="bg-white shadow-sm rounded-md p-6 w-full mt-4 ">
      <div className="flex justify-between">
        <h1 className="text-[20px] font-poppins font-[500] text-secondary-600">
          Applications
        </h1>
        <p className="font-poppins text-[15px] text-[#043CA7]">See all jobs</p>
      </div>
      <div>
        {ApplicationData.map((item) => (
          <ApplicationsCard key={item.id} application={item} />
        ))}
      </div>
    </div>
  );
};

export default Applications;
