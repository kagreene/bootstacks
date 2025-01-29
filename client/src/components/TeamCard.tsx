

interface TeamCardProps {
  game:string,
  city:string,
  state:string,
  time:string,

}


export const TeamCard = ( { game, city, state, time } : TeamCardProps ) => {

  return (
    <div className="card m-2" style={{width: "30%"}}>
      <div className='row'>
        <div className='col-8'>
          <div className="card-body">
            <h2>EVENT</h2>
            <p className="card-text">Game: { game.substring(0,game.indexOf(" at ") ) + " " }  <span>Vs</span> {game.substring(game.indexOf("at") + 2, game.length)}</p>
            <p className="card-text">Location: { city + ", " + state}</p>
            <p className="card-text">Time: { time }</p>
          </div>
        </div>                
      </div>
    </div>
  )
}
