import { memo } from "react";

const EventListCommonRow = memo(({ headers, uniqKey }) => (
  headers.map((header, index) => (
    <div className="event-list__row__cell" key={`${uniqKey}-${index}`}>{header}</div>
  ))
));

export default EventListCommonRow;
