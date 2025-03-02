import "./App.css";
import Homepage from "./components/HomePage.tsx";
import Ticket from "./components/Ticket.tsx";
import Booking from "./components/Booking.tsx"
import {TicketProvider} from "./TicketContext.tsx";
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <TicketProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      </BrowserRouter>
      </TicketProvider>
      
    
  );
}

export default App;

/*
approaches:
1- start the site with input to recieve the name, the date , and the time slot you want. then a buy now button.
after clicking buy now. you would be transferred to the payment gateway "of stripe for example"
when successfull, you would get your ticket, with your name

2- start the site with the poster of the play, with a "buy ticket button"
clicking it will prompt you to enter your details. and the time slot you like, then the payment gateway, then if successful, show the ticket

*/
