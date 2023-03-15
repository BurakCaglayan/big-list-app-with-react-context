import EventList from '../../components/eventList/EventList';
import { EventListProvider } from '../../contexts';

const Home = () => {
  return (
    <EventListProvider>
      <EventList />
    </EventListProvider>
  );
};

export default Home;
