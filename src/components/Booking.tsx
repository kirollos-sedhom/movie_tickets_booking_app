import React from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useTicket } from "../TicketContext"
const Booking = () => {
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("null");
  const [selected, setSelected] = React.useState("");
  const [ticketCount, setTicketCount] = React.useState(3)
  const { setTicketData } = useTicket();
  const navigate = useNavigate();
  console.log(selected, date, time);
  function handleSlotClick(id: string, date: string, time: string) {
    setDate(date);
    setTime(time);
    setSelected(id);
  }

  function handleBuyTicket(){
    setTicketData({ date, time , ticketCount});
    navigate("/ticket")
  }
  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center bg-slate-800 text-white">
      <h1>اختار المعاد المناسب</h1>
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

      <button onClick={handleBuyTicket} className="text-lg border-2 px-4 py-2 rounded-xl text-center bg-slate-700">
        تمام
      </button>
    </div>
  );
};
const Slot = (props) => {
  const classList =
    props.id === props.selected
      ? "text-black text-center border-2 rounded-xl p-4 flex flex-col gap-2 bg-slate-300 w-48 h-28 hover:bg-slate-200 transition-300"
      : "text-black text-center border-2 rounded-xl p-4 flex flex-col gap-2 bg-slate-500 w-48 h-28 hover:bg-slate-200 transition-300";
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
