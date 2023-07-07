import Image from "next/image";
import React from "react";
import Pesto from "../../assets/pesto.png"
import Vernacular from "../../assets/verna.png";
import Groww from "../../assets/Groww.webp";

const EventsData = [
  {
    id: 1,
    name: "Pesto",
    imgSrc: Pesto,
    about: "Portfolio Presentation",
    date: "Tomorrow",
    time: "9:00 AM - 11:00 AM",
  },
  {
    id: 2,
    name: "vernacular.ai",
    imgSrc: Vernacular,
    about: "Group Discussion",
    date: "25th August , 2022",
    time: "9:00 AM - 10:00 AM",
  },
  {
    id: 3,
    name: "Groww",
    imgSrc: Groww,
    about: "Mock Interview Session 1",
    date: "29th August , 2022",
    time: "2:00 PM - 4:00 PM",
  },
];

const EventsCard = ({ event }: any) => {
  return (
    <div className="rounded-sm px-5 shadow-md mt-2 border-b border-[#D2CECE] ">
      <div className="flex justify-between items-center flex-row">
        <div className="flex flex-col items-center  ">
          <Image
            src={event.imgSrc}
            alt="Event"
            width={80}
            height={80}
            className="object-contain rounded-lg"
          />
          <h3 className="text-[15px] font-poppins font-[500] text-black">
            {event.name}
          </h3>
        </div>
        <div className="flex flex-col ">
          <p className="text-[12px] font-poppins text-black opacity-50 ">
            {event.about}
          </p>
          <p className="text-[12px] font-poppins text-black font-[500]">
            {event.date}
          </p>
          <p className="text-[12px] font-poppins text-black font-[500]">
            {event.time}
            </p>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="w-full shadow-sm bg-white rounded-md ">
      <div className="container items-right flex flex-col p-4 sm:p-2 space-y-4">
        <select className="w-1/2 rounded-md border border-black text-black text-xs font-poppins">
          <option value="">August, 2022</option>
        </select>
        </div>
    <div className="space-y-2 p-3">
   
        {EventsData.map((event) => (
          <EventsCard event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
};

export default Events;
