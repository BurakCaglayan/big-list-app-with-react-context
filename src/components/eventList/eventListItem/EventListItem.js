import { useRef } from 'react';
import EventListCommonRow from '../eventListCommonRow/EventListCommonRow';

const EventListItem = ({
  data,
  index: rowKey,
  selectItem,
  eventGeneralInfo,
  headers,
  handleEventSelect,
}) => {
  const rowRef = useRef();
  const event = data[rowKey];

  const emptyDataHolder = '-';

  // TODO: If learn how to get data correct, use map & refactor component
  return (
    <div ref={rowRef} className="event-list">
      <div key={`${event.C}-${rowKey}-1`} className="event-list__row">
        <div className="event-list__row__cell" style={{ width: '25%' }}>
          <span className="color-secondary">{rowKey + 1}</span>
          <span className="color-danger">{eventGeneralInfo[rowKey]}</span>
        </div>
        <EventListCommonRow
          uniqKey={`${event.C}-${rowKey}`}
          headers={headers}
        />
      </div>
      <div
        key={`${event.C}-${rowKey}-2`}
        className="event-list__row"
        onClick={(e) => selectItem({ e, event })}
      >
        <div
          className="event-list__row__cell"
          style={{ width: '25%' }}
        >{`${event.C} ${event.T} ${event.N}`}</div>
        <div className="event-list__row__cell">Yorumlar</div>
        <div className="event-list__row__cell" id={`${event.C}-0`}>
          {event.OCG[1].MBS}
        </div>
        <div
          id={`${event.C}-1`}
          className={`clickable event-list__row__cell ${
            handleEventSelect[event.C]?.ratio.id === `${event.C}-1`
              ? 'active'
              : emptyDataHolder
          }`}
          data-value={event?.OCG[1]?.OC[0]?.O || emptyDataHolder}
        >
          {event?.OCG[1]?.OC[0]?.O || emptyDataHolder}
        </div>
        <div
          id={`${event.C}-2`}
          className={`clickable event-list__row__cell ${
            handleEventSelect[event.C]?.ratio.id === `${event.C}-2`
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
          id={`${event.C}-4`}
          className={`clickable event-list__row__cell ${
            handleEventSelect[event.C]?.ratio.id === `${event.C}-4`
              ? 'active'
              : emptyDataHolder
          }`}
          data-value={event?.OCG[5]?.OC[25]?.O || emptyDataHolder}
        >
          {event?.OCG[5]?.OC[25]?.O || emptyDataHolder}
        </div>
        <div
          id={`${event.C}-5`}
          className={`clickable event-list__row__cell ${
            handleEventSelect[event.C]?.ratio.id === `${event.C}-5`
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
          id={`${event.C}-7`}
          className={`clickable event-list__row__cell ${
            handleEventSelect[event.C]?.ratio.id === `${event.C}-7`
              ? 'active'
              : emptyDataHolder
          }`}
          data-value={event?.OCG[2]?.OC[3]?.O || emptyDataHolder}
        >
          {event?.OCG[2]?.OC[3]?.O || emptyDataHolder}
        </div>
        <div
          id={`${event.C}-8`}
          className={`clickable event-list__row__cell ${
            handleEventSelect[event.C]?.ratio.id === `${event.C}-8`
              ? 'active'
              : emptyDataHolder
          }`}
          data-value={event?.OCG[2]?.OC[4]?.O || emptyDataHolder}
        >
          {event?.OCG[2]?.OC[4]?.O || emptyDataHolder}
        </div>
        <div
          id={`${event.C}-9`}
          className={`clickable event-list__row__cell ${
            handleEventSelect[event.C]?.ratio.id === `${event.C}-9`
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
