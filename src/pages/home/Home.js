import EventList from '../../components/eventList/EventList';
import { EventBasketProvider, EventListProvider } from '../../contexts';

const Home = () => {
  return (
    <EventBasketProvider>
      <EventListProvider>
        <EventList />
      </EventListProvider>
    </EventBasketProvider>
  );
};

export default Home;
