import {createContext, useContext, useState, useEffect} from "react"


type TicketDataType = {
    date: string;
    time:string
    ticketCount: number;
  } | null;

  type TicketContextType = {
    ticketData: TicketDataType;
    setTicketData: React.Dispatch<React.SetStateAction<TicketDataType>>;
  };

  const TicketContext = createContext<TicketContextType|undefined>(undefined);


export function TicketProvider({children}){
  const [ticketData, setTicketData] = useState(() => {
    // Load from localStorage (if exists), else default to null
    const savedTicket = localStorage.getItem("ticketData");
    return savedTicket ? JSON.parse(savedTicket) : null;
  });

    // Save data to localStorage whenever it updates
    useEffect(() => {
      if (ticketData) {
        localStorage.setItem("ticketData", JSON.stringify(ticketData));
      }
    }, [ticketData]);
    return (
        <TicketContext.Provider value={{ticketData,setTicketData}}>
            {children}
        </TicketContext.Provider>
    );
}

export const useTicket = () => useContext(TicketContext);