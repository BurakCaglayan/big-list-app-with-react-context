/* eslint-disable no-shadow */
import React, { useContext, useMemo } from 'react';
import { VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { getEventTotalCount, getTableHeaders } from '../../utils/common';
import { EventContext, EventBasketContext } from '../../contexts';
import EventListItem from './eventListItem/EventListItem';

export const useWindowResize = () => {
  const [size, setSize] = React.useState([0, 0]);

  const updateSize = () => {
    setSize([window.innerWidth, window.innerHeight]);
  };
  React.useEffect(() => {
    if (window) {
      updateSize();

      window.addEventListener('resize', updateSize);
      updateSize();
    }

    return () => {
      // eslint-disable-next-line no-undef
      if (window) window.removeEventListener('resize', updateSize);
    };
  }, []);

  return size;
};

const EventList = () => {
  const { eventGeneralInfo, events } = useContext(EventContext);
  const { selectedEvents, dispatch } = useContext(EventBasketContext);

  const headers = useMemo(() => getTableHeaders(), []);
  const eventTotalCount = useMemo(() => getEventTotalCount(), []);

  const handleEventSelect = ({ e, event }) => {
    const selectedItemId = e.target.id;
    const selectedItemValue = e.target.dataset.value;

    if (selectedItemId) {
      dispatch({
        type: 'TOGGLE_BASKET_EVENT',
        payload: {
          event,
          ratio: { id: selectedItemId, value: selectedItemValue },
        },
      });
    }
  };

  const data = Object.values(events);
  const listRef = React.useRef();
  const sizeMap = React.useRef({});
  const setSize = React.useCallback((index, size) => {
    sizeMap.current = { ...sizeMap.current, [index]: size };
    listRef.current.resetAfterIndex(index);
  }, []);
  const getSize = (index) => sizeMap.current[index] ?? 70;
  const [windowWidth] = useWindowResize();

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          itemSize={getSize}
          ref={listRef}
          itemData={data}
          itemCount={data.length}
          height={height}
          width={width}
        >
          {({ data, index, style }) => (
            <div style={style}>
              <EventListItem
                data={data}
                index={index}
                eventTotalCount={eventTotalCount}
                headers={headers}
                eventGeneralInfo={eventGeneralInfo}
                handleEventSelect={handleEventSelect}
                selectedEvents={selectedEvents}
                setSize={setSize}
                windowWidth={windowWidth}
              />
            </div>
          )}
        </List>
      )}
    </AutoSizer>
  );
};

export default EventList;
