import EventListCommonRow from '../eventListCommonRow/EventListCommonRow';

const EventListHeader = ({ eventTotalCount, headers }) => {
  return (
    <div className="list-header">
      <div className="color-danger event-list__row__cell">{`Event Count: ${eventTotalCount}`}</div>
      <EventListCommonRow uniqKey="header-row" headers={headers} />
    </div>
  );
};

export default EventListHeader;
