const eventBasketReducer = (state, action) => {
  const {
    payload: { event, ratio },
    type,
  } = action;

  const isSelectedRatio = state.selectedEvents[event.C]?.ratio.id === ratio.id;

  const newSelectedEvents = { ...state.selectedEvents };

  // if ratio is selected remove from selected events
  if (isSelectedRatio) {
    delete newSelectedEvents[event.C];
  } else {
    newSelectedEvents[event.C] = { ...event, ratio };
  }

  switch (type) {
    case 'TOGGLE_BASKET_EVENT':
      return {
        ...state,
        selectedEvents: newSelectedEvents,
      };
    default:
      return state;
  }
};

export default eventBasketReducer;
