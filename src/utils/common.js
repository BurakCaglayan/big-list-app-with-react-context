import data from '../data/bulten_data.json';

export const getTableHeaders = () => [
  'Yorumlar',
  '-',
  '1',
  'x',
  '2',
  'Alt',
  'Üst',
  'H1',
  '1',
  'x',
  '2',
  'H2',
  '1-x',
  '1-2',
  'x-2',
  'Var',
  'Yok',
  '+99',
];

export const getEventTotalCount = () => Object.keys(data.Events).length;

export const populateData = () => {
  const events = data?.Events;
  const eventGeneralInfo = [];
  Object.values(events).forEach((event) => {
    eventGeneralInfo.push(`${event.D} ${event.DAY} ${event.LN}`);
  });

  return { eventGeneralInfo, events };
};
