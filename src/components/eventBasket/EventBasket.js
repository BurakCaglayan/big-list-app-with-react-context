import { useContext } from 'react';
import { EventBasketContext } from '../../contexts';
import BasketCard from '../UI/basketCard/BasketCard';

const EventBasket = () => {
  const { selectedEvents, totalRatio } = useContext(EventBasketContext);

  return (
    <BasketCard
      content={Object.values(selectedEvents).map((event) => (
        <>
          <div key={`${event.C}-basket`} className="basket-card__event-content">
            <div key={`${event.C}-a`}>{event.OCG[1].MBS}</div>
            <div key={`${event.C}-s`}>Kod:{event.C}</div>
            <div key={`${event.C}-d`}>Maç:{event.N}</div>
            <div key={`${event.C}-f`}>Oran:{event.ratio.value}</div>
            <div key={`${event.C}-g`}>MBS:{event.OCG[1].MBS}</div>
          </div>
          <hr key={`${event.C}-hr`} className="basket-card__event__hr" />
        </>
      ))}
      footer={
        <div className="basket-card__event-footer">
          Toplam Tutar: {totalRatio}
        </div>
      }
    />
  );
};

export default EventBasket;
