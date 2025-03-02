import React from "react";
import wallpaper1 from "../assets/wallpaper4.jpg";
import { useTicket } from "../TicketContext";
import qr from "../assets/test_qr.png";
const Ticket = () => {
  const  ticketData  = useTicket();
  console.log(ticketData)
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-700">
      {/* <div id="main">
        hallo
        <div className="top left"></div>
        <div className="top right"></div>
        <div className="bottom left"></div>
        <div className="bottom right"></div>
      </div> */}

      <div className="corners corners--round-bottom w-2/3 h-1/2 rounded-t-2xl  bg-[url(assets/wallpaper4.jpg)] bg-cover"></div>
      
      <div className="container w-2/3 h-1/6 bg-[url(assets/wallpaper4.jpg)] corners corners--round-top overflow-hidden rounded-b-2xl ">
      <div className="corners h-full    flex flex-row-reverse px-8  justify-between items-center bg-stone-200/55">
      
      <div className="details text-right text-xl font-[Lalezar] flex flex-col gap-1">
      {/* <p>يوم الجمعة 25/4 </p>
        <p>الساعة 8:30 مساءً</p>
        <p>عدد التذاكر: 4</p> */}
        <p>{ticketData.TicketData.date}</p>
        <p>{ticketData.TicketData.time}</p>
        <p> {ticketData.TicketData.ticketCount} :عدد التذاكر   </p>
      </div>
      <img className="code w-12" src={qr}  />

      


      </div>
      </div>
      
    </div>
  );
};

export default Ticket;
