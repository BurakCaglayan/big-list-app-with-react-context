/* eslint-disable react/jsx-key */
import React, { useContext, useMemo } from 'react';
import { getEventTotalCount, getTableHeaders } from '../../utils/common';
import EventListItem from './eventListItem/EventListItem';
import { EventContext } from '../../contexts';

const EventTable = () => {
  const { eventGeneralInfo, events } = useContext(EventContext);
  const headers = useMemo(() => getTableHeaders(), []);
  const eventTotalCount = useMemo(() => getEventTotalCount(), []);
  const tempEvents = Object.keys(events);

  const handleEventSelect = ({ e, event }) => {
    console.log('event: ', event);
    console.log('e: ', e);
  };

  return (
    <div>
      {tempEvents.map((data, index) => (
        <EventListItem
          data={data}
          index={index}
          eventTotalCount={eventTotalCount}
          headers={headers}
          eventGeneralInfo={eventGeneralInfo}
          handleEventSelect={handleEventSelect}
        />
      ))}
    </div>
  );
};

export default EventTable;
