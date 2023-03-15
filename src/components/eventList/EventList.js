/* eslint-disable react/jsx-key */
import React, { useMemo } from 'react';
import {
  getEventTotalCount,
  getTableHeaders,
  populateData,
} from '../../utils/common';
import EventListItem from './eventListItem/EventListItem';

const EventTable = () => {
  const headers = useMemo(() => getTableHeaders(), []);
  const eventTotalCount = useMemo(() => getEventTotalCount(), []);
  const events = useMemo(() => populateData(), []);

  const handleEventSelect = ({ e, event }) => {
    console.log('event: ', event);
    console.log('e: ', e);
  };

  return (
    <div>
      {events.map((data, index) => (
        <EventListItem
          data={data}
          index={index}
          eventTotalCount={eventTotalCount}
          headers={headers}
          handleEventSelect={handleEventSelect}
        />
      ))}
    </div>
  );
};

export default EventTable;
