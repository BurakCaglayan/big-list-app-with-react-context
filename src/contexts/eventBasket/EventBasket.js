import { createContext, useReducer } from 'react';
import { eventBasketReducer } from '../../reducers';

export const EventBasketContext = createContext();

const EventBasketProvider = ({ children }) => {
  const initialState = {
    selectedEvents: {},
    totalRatio: 0,
  };

  let [state, dispatch] = useReducer(eventBasketReducer, initialState);

  state = {
    ...state,
    dispatch,
  };

  return (
    <EventBasketContext.Provider value={state}>
      {children}
    </EventBasketContext.Provider>
  );
};

export default EventBasketProvider;
