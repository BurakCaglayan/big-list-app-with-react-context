import { useEffect, useRef } from 'react';
import EventListCommonRow from '../eventListCommonRow/EventListCommonRow';

const EventListItem = ({
  data,
  index: rowKey,
  eventGeneralInfo,
  headers,
  selectedEvents,
  handleEventSelect,
  setSize,
  windowWidth,
}) => {
  const rowRef = useRef();
  const event = data[rowKey];

  const emptyDataHolder = '-';
  const eventCode = event.C;
  const eventName = event.N;
  const eventTime = event.T;
  const mbs = event.OCG[1].MBS;

  useEffect(() => {
    setSize(rowKey, rowRef.current.getBoundingClientRect().height);
  }, [setSize, rowKey, windowWidth]);

  // TODO: If learn how to get data correct, use map & refactor component
  return (
    <div ref={rowRef} className="event-list">
      <div key={`${eventCode}-${rowKey}-1`} className="event-list__row">
        <div
          className="event-list__row__header-cell"
          style={{ minWidth: '20%' }}
        >
          <span className="color-secondary">{rowKey + 1}</span>
          <span className="color-danger">{eventGeneralInfo[rowKey]}</span>
        </div>
        <EventListCommonRow
          uniqKey={`${eventCode}-${rowKey}`}
          headers={headers}
        />
      </div>
      <div
        key={`${eventCode}-${rowKey}-2`}
        className="event-list__row"
        onClick={(e) => handleEventSelect({ e, event })}
      >
        <div
          className="event-list__row__header-cell"
          style={{ minWidth: '20%' }}
        >{`${eventCode} ${eventTime} ${eventName}`}</div>
        <div className="event-list__row__cell">Yorumlar</div>
        <div className="event-list__row__cell" id={`${eventCode}-0`}>
          {mbs}
        </div>
        <div
          id={`${eventCode}-1`}
          className={`clickable event-list__row__cell ${
            selectedEvents[eventCode]?.ratio.id === `${eventCode}-1`
              ? 'active'
              : emptyDataHolder
          }`}
          data-value={event?.OCG[1]?.OC[0]?.O || emptyDataHolder}
        >
          {event?.OCG[1]?.OC[0]?.O || emptyDataHolder}
        </div>
        <div
          id={`${eventCode}-2`}
          className={`clickable event-list__row__cell ${
            selectedEvents[eventCode]?.ratio.id === `${eventCode}-2`
              ? 'active'
              : emptyDataHolder
          }`}
          data-value={event?.OCG[1]?.OC[1]?.O || emptyDataHolder}
        >
          {event?.OCG[1]?.OC[1]?.O || emptyDataHolder}
        </div>
        <div className="event-list__row__cell">
          {event?.OCG[1]?.OC[2]?.O || emptyDataHolder}
        </div>
        <div
          id={`${eventCode}-4`}
          className={`clickable event-list__row__cell ${
            selectedEvents[eventCode]?.ratio.id === `${eventCode}-4`
              ? 'active'
              : emptyDataHolder
          }`}
          data-value={event?.OCG[5]?.OC[25]?.O || emptyDataHolder}
        >
          {event?.OCG[5]?.OC[25]?.O || emptyDataHolder}
        </div>
        <div
          id={`${eventCode}-5`}
          className={`clickable event-list__row__cell ${
            selectedEvents[eventCode]?.ratio.id === `${eventCode}-5`
              ? 'active'
              : emptyDataHolder
          }`}
          data-value={event?.OCG[5]?.OC[26]?.O || emptyDataHolder}
        >
          {event?.OCG[5]?.OC[26]?.O || emptyDataHolder}
        </div>
        <div className="event-list__row__cell">
          {event?.OCG[5]?.OC[27]?.O || emptyDataHolder}
        </div>
        <div className="event-list__row__cell">-</div>
        <div className="event-list__row__cell">-</div>
        <div className="event-list__row__cell">-</div>
        <div className="event-list__row__cell">-</div>
        <div className="event-list__row__cell">-</div>
        <div
          id={`${eventCode}-7`}
          className={`clickable event-list__row__cell ${
            selectedEvents[eventCode]?.ratio.id === `${eventCode}-7`
              ? 'active'
              : emptyDataHolder
          }`}
          data-value={event?.OCG[2]?.OC[3]?.O || emptyDataHolder}
        >
          {event?.OCG[2]?.OC[3]?.O || emptyDataHolder}
        </div>
        <div
          id={`${eventCode}-8`}
          className={`clickable event-list__row__cell ${
            selectedEvents[eventCode]?.ratio.id === `${eventCode}-8`
              ? 'active'
              : emptyDataHolder
          }`}
          data-value={event?.OCG[2]?.OC[4]?.O || emptyDataHolder}
        >
          {event?.OCG[2]?.OC[4]?.O || emptyDataHolder}
        </div>
        <div
          id={`${eventCode}-9`}
          className={`clickable event-list__row__cell ${
            selectedEvents[eventCode]?.ratio.id === `${eventCode}-9`
              ? 'active'
              : emptyDataHolder
          }`}
          data-value={event?.OCG[2]?.OC[5]?.O || emptyDataHolder}
        >
          {event?.OCG[2]?.OC[5]?.O || emptyDataHolder}
        </div>
        <div className="event-list__row__cell">{emptyDataHolder}</div>
        <div className="event-list__row__cell">{3}</div>
      </div>
    </div>
  );
};

export default EventListItem;
