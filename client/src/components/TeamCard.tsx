

interface TeamCardProps {
  game:string,
  city:string,
  state:string,
  time:string,
  weather?: any;
}


export const TeamCard = ( { game, city, state, time, weather } : TeamCardProps ) => {

  return (
    <div className="card m-2" style={{width: "30%"}}>
      <div className='row'>
        <div className='col-8'>
          <div className="card-body">
            <h2>EVENT</h2>
            <p className="card-text">Game: { game.substring(0,game.indexOf(" at ") ) + " " }  <span>Vs</span> {game.substring(game.indexOf("at") + 2, game.length)}</p>
            <p className="card-text">Location: { city + ", " + state}</p>
            <p className="card-text">Time: { time }</p>
            {weather ? (
        typeof weather === 'string' ? (
          <p>{weather}</p>
        ) : (
          <div>
            <p>Temperature: {weather[0].tempF}°F</p>
            <p>Condition: {weather[0].iconDescription}</p>
            <p>Wind: {weather[0].windSpeed} mph</p>
            <p>Humidity: {weather[0].humidity}%</p>
          </div>
        )
      ) : (
        <p>No weather data available</p>
      )}
      </div>
          </div>
        </div>                
      </div>
  )
}
