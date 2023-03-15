import EventBasket from '../../components/eventBasket/EventBasket';
import EventList from '../../components/eventList/EventList';
import { EventBasketProvider, EventListProvider } from '../../contexts';

const Home = () => {
  return (
    <EventBasketProvider>
      <EventBasket />
      <EventListProvider>
        <EventList />
      </EventListProvider>
    </EventBasketProvider>
  );
};

export default Home;
