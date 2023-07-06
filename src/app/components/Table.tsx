"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { TbClockHour1 } from "react-icons/tb";
import { RiArrowDropDownLine, RiDeleteBin5Fill } from "react-icons/ri";
import { LuEdit } from "react-icons/lu";
import Image from "next/image";
import { AiOutlineEye } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const tableData = [
  {
    id: 1,
    title: "Laravel Developer",
    jobType: "Full Time",
    postedDate: "2 days ago",
    applicationDeadline: "30/12/2021",
  },
  {
    id: 2,
    title: "Laravel Developer",
    jobType: "Full Time",
    postedDate: "2 days ago",
    applicationDeadline: "30/12/2021",
  },
  {
    id: 3,
    title: "Laravel Developer",
    jobType: "Full Time",
    postedDate: "2 days ago",
    applicationDeadline: "30/12/2021",
  },
  {
    id: 4,
    title: "Laravel Developer",
    jobType: "Full Time",
    postedDate: "2 days ago",
    applicationDeadline: "30/12/2021",
  },
  {
    id: 5,
    title: "Laravel Developer",
    jobType: "Full Time",
    postedDate: "2 days ago",
    applicationDeadline: "30/12/2021",
  },
  {
    id: 6,
    title: "Laravel Developer",
    jobType: "Full Time",
    postedDate: "2 days ago",
    applicationDeadline: "30/12/2021",
  },
  {
    id: 7,
    title: "Laravel Developer",
    jobType: "Full Time",
    postedDate: "2 days ago",
    applicationDeadline: "30/12/2021",
  },
];
// w-[1394px]
const Table = () => {
  return (
    <div className="overflow-x-auto ">
      <table className="text-left border border-gray-300  rounded-[10px] w-full"> 
        <thead className="text-[20px] font-[500] text-black border-black font-poppins border-b ">
          <tr>
            <th scope="col" className="px-6 py-5">
              Title
            </th>

            <th scope="col" className="px-6 py-5">
              Job Type
            </th>
            <th scope="col" className="px-6 py-5">
              Posted Date
            </th>
            <th scope="col" className="px-6 py-5">
              Application Deadline
            </th>
            <th scope="col" className="px-6 py-5">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="overflow-x-auto h-[200px]">
          {tableData?.map((item: any, i: number) => (
            <tr
              key={i}
              className="bg-secondary-50 border-b hover:bg-gray-50 text-[17px] "
            >
              <td className="px-5 pr-10 py-7 font-medium text-gray-900 whitespace-nowrap ">
                {item.title}
              </td>

              <td className="px-5 py-7">{item.jobType}</td>
              <td className="px-5 py-7">{item.postedDate}</td>
              <td className="px-5 py-7">{item.applicationDeadline}</td>

              <td className="px-5 py-7 flex space-x-7 ">
                <button className="text-green-500 hover:text-secondary-600 text-2xl cursor-pointer">
                  <AiOutlineEye />
                </button>
                <button className="text-blue-600 hover:text-secondary-600 text-2xl cursor-pointer">
                  <FiEdit2 />
                </button>
                <button className="text-red-600 hover:text-secondary-600 text-2xl cursor-pointer">
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
