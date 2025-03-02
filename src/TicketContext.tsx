import {createContext, useContext, useState} from "react"


type TicketDataType = {
    date: string;
    time:string
    ticketCount: number;
  } | null;

  type TicketContextType = {
    TicketData: TicketDataType;
    setTicketData: React.Dispatch<React.SetStateAction<TicketDataType>>;
  };

  const TicketContext = createContext<TicketContextType|undefined>(undefined);


export function TicketProvider({children}){
    const [TicketData, setTicketData] = useState<TicketDataType>(null);
    return (
        <TicketContext.Provider value={{TicketData,setTicketData}}>
            {children}
        </TicketContext.Provider>
    );
}

export function useTicket() {
    const context = useContext(TicketContext);
    if (!context) {
      throw new Error("useTicket must be used within a TicketProvider");
    }
    return context;
  }