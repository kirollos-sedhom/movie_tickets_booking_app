import React from "react";
import wallpaper1 from "../assets/wallpaper4.jpg";
const Ticket = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
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
      <p>يوم الجمعة 25/4 </p>
        <p>الساعة 8:30 مساءً</p>
        <p>عدد التذاكر: 4</p>
      </div>
      <img className="code w-4" src={wallpaper1}  />

      


      </div>
      </div>
      
    </div>
  );
};

export default Ticket;
