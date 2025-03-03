import React, { useRef } from "react";
import wallpaper1 from "../assets/wallpaper4.jpg";
import html2canvas from "html2canvas";

import { useTicket } from "../TicketContext";
import qr from "../assets/test_qr.png";
import { MdDownload } from "react-icons/md";

const Ticket = () => {
  const { ticketData } = useTicket();
  const ticketRef = useRef(null);

  if (!ticketData) {
    return <div className="text-white text-2xl">لا توجد بيانات تذكرة. يرجى الحجز مرة أخرى!</div>;
  }

  const handleDownload = async () => {
    if (!ticketRef.current) return;

    const canvas = await html2canvas(ticketRef.current, {
      scale: 2,

    });
    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = "ticket.png";
    link.click();
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center booking-background">
      
      {/* ✅ Wrapper to contain both top & bottom ticket sections */}
      <div ref={ticketRef} className="w-2/3 h-2/3 flex flex-col items-center shadow-lg">
        
        {/* 🔹 Top Ticket */}
        <div 
          className="corners corners--round-bottom border-b-2 border-dashed w-full h-4/6 rounded-t-2xl bg-cover bg-[-1.5rem] flex-1"
          style={{ backgroundImage: `url(${wallpaper1})` }}
        ></div>

        {/* 🔹 Bottom Ticket */}
        <div 
          className="container w-full h-[120px] bg-cover corners corners--round-top overflow-hidden rounded-b-2xl flex-none"
          style={{ backgroundImage: `url(${wallpaper1})` }}
        >
          <div className="h-full flex flex-row-reverse px-8 justify-between items-center " style={{ backgroundColor: "rgba(231, 229, 228, 0.55)" }}>
            <div className="details text-right text-xl font-[Lalezar] flex flex-col gap-1">
              <p>{ticketData.date}</p>
              <p>{ticketData.time}</p>
              <p> {ticketData.ticketCount} :عدد التذاكر </p>
            </div>
            <img className="code w-12" src={qr} />
          </div>
        </div>
      </div>

      {/* 🔹 Download Button */}
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 px-6 py-3 mt-8 text-lg font-semibold text-white bg-gradient-to-r from-blue-950 to-cyan-950 
                  rounded-full shadow-md hover:shadow-blue-400/50 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
      >
        <MdDownload /> تحميل التذكرة
      </button>
    </div>
  );
};

export default Ticket;
