import React from 'react'

interface TeamCardProps {
  game:string,
  location:string,
  time:string
}

export const TeamCard = ( { game, location, time } : TeamCardProps ) => {
  return (
    <div className="card" style={{width: "25%"}}>
      <div className='row'>
        <div className='col-8'>
          <div className="card-body">
            <h2>EVENT</h2>
            <p className="card-text">Game: { game.substring(0,game.indexOf("at") ) }  <span>VS</span> {game.substring(game.indexOf("at") + 2, game.length - 1)}</p>
            <p className="card-text">Location: { location }</p>
            <p className="card-text">Time: { time }</p>
          </div>
        </div>
        <div>
          <img src="..." className="card-img-top" alt="..." />
        </div>                   
      </div>
    </div>
  )
}
