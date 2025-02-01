import { useEffect, useState } from 'react';
import { TeamCard } from './TeamCard';
import { getEventsData } from '../api/nflApi';
import GameDetails from './GameDetails';

interface Event {
  id: string;
  name: string;
  city: string;
  state: string;
  date: string;
  weather: any;
}

export const GamesList = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    getEventsData().then(data => setEvents(data || []));
  }, []);

  return (
    <div className='container-fluid'>
      <div className='row'>
        {events.map((objElement: Event) => (
          <div key={objElement.id}>
            <TeamCard
              game={objElement.name}
              city={objElement.city}
              state={objElement.state}
              time={objElement.date}
              weather={objElement.weather}
            />
            <GameDetails city={objElement.city} date={objElement.date} />
          </div>
        ))}
      </div>
    </div>
  );
};