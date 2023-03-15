/* eslint-disable prettier/prettier */


import { createContext, useMemo } from "react";
import { populateData } from "../../utils/common";

export const EventContext = createContext();

const EventListProvider = ({ children }) => {

  const { eventGeneralInfo, events } = useMemo(() => populateData(), []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <EventContext.Provider value={{ events, eventGeneralInfo }}>
      {children}
    </EventContext.Provider>
  )
}

export default EventListProvider;