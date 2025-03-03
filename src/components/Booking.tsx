import React from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useTicket } from "../TicketContext";
const Booking = () => {
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("null");
  const [selected, setSelected] = React.useState("");
  const [ticketCount, setTicketCount] = React.useState(1);
  const { setTicketData } = useTicket();
  const navigate = useNavigate();
  console.log(selected, date, time);
  function handleSlotClick(id: string, date: string, time: string) {
    
    setDate(date);
    setTime(time);
    setSelected(id);
  }

  function handleBuyTicket() {
    if (!selected){
      alert("من فضلك اختار معاد")
    }
    else{
      setTicketData({ date, time, ticketCount });
    navigate("/ticket");
    }
    
  }

  function handleChange(e){
    const value = parseInt(e.target.value,10);
    if (value>=1 && value<=10) {
      setTicketCount(value)
    }
  }
  return (
    <div className="relative w-screen h-screen flex items-center justify-center font-[Rubik]">
<div className="absolute inset-0 bg-[url(assets/wallpaper4.jpg)] bg-cover bg-center 
      before:absolute before:inset-0 before:bg-black/50 before:backdrop-blur-sm  flex justify-center items-center">
      <div className="relative z-10 text-white flex flex-col items-center bg-white/10 shadow-lg ring-1 ring-black/5 w-9/10 px-2 py-8 gap-8 rounded-xl">
        <h1 className="text-2xl font-bold">اختار المعاد المناسب</h1>
        <div className="dates flex flex-wrap w-full gap-4 items-center justify-center ">
          <Slot
            id="1"
            selected={selected}
            date="الخميس 24/4"
            time="العرض الأول 6 مساءّ"
            handleSlotClick={handleSlotClick}
          />
          <Slot
            id="2"
            selected={selected}
            date="الخميس 24/4"
            time="العرض الثاني 8:30 مساءّ"
            handleSlotClick={handleSlotClick}
          />
          <Slot
            id="3"
            selected={selected}
            date="الجمعة 25/4"
            time="العرض الأول 6 مساءّ"
            handleSlotClick={handleSlotClick}
          />
          <Slot
            id="4"
            selected={selected}
            date="الجمعة 25/4"
            time="العرض الثاني 8:30 مساءّ"
            handleSlotClick={handleSlotClick}
          />
        </div>

        <div className="ticketCounter flex flex-row-reverse gap-2 items-center">
        <p>عدد التذاكر</p>
        <input className="w-10 h-10 text-right text-lg font-bold text-black bg-white rounded-md shadow-sm 
    focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300" type="number" id="quantity" name="quantity" min="1" max="5" value={ticketCount} onChange={handleChange}></input>

        </div>

        <button
          onClick={handleBuyTicket}
          className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-950 to-cyan-950 
  rounded-full shadow-md hover:shadow-blue-400/50 transition-all duration-300 
  transform hover:-translate-y-1 active:scale-95"
        >
          تمام
        </button>
      </div>
    </div>
    </div>
    
  );
};
const Slot = (props) => {
  const classList =
    props.id === props.selected
      ? "p-2 rounded-xl  bg-white/10  ring-1 ring-black/5 text-lg  text-center hover:scale-105 transition-transform  ring-2 ring-slate-800"
      : "p-2 rounded-xl  bg-white/10  ring-1 ring-black/5 text-lg text-center hover:scale-105 transition-transform";
  return (
    <div
      className={classList}
      onClick={() => props.handleSlotClick(props.id, props.date, props.time)}
    >
      <p>{props.date}</p>
      <p>{props.time}</p>
    </div>
  );
};

export default Booking;
