const eventBasketReducer = (state, action) => {
  const {
    payload: { event, ratio },
    type,
  } = action;

  const isSelectedRatio = state.selectedEvents[event.C]?.ratio.id === ratio.id;

  const newSelectedEvents = { ...state.selectedEvents };
  let newTotalRatio = { ...state.totalRatio };

  // if ratio is selected remove from selected events & total ratio
  if (isSelectedRatio) {
    delete newSelectedEvents[event.C];
  } else {
    newSelectedEvents[event.C] = { ...event, ratio };
  }

  const ratios = Object.values(newSelectedEvents).map((item) =>
    parseFloat(item.ratio.value)
  );
  newTotalRatio = ratios.length > 0 ? ratios.reduce((a, b) => a * b) : 0;

  switch (type) {
    case 'TOGGLE_BASKET_EVENT':
      return {
        ...state,
        selectedEvents: newSelectedEvents,
        totalRatio: newTotalRatio,
      };
    default:
      return state;
  }
};

export default eventBasketReducer;
