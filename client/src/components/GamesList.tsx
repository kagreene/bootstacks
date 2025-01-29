//import React from 'react'
import { useEffect, useState } from 'react'
import { TeamCard } from './TeamCard'
import { getEventsData } from '../api/nflApi'

export const GamesList = () => {

  const [events, setEvents] = useState([])

  useEffect(() => {
      getEventsData().then( data => setEvents(data) )
    }, [])

  return (
    <div className='container-fluid'>
      <div className='row'>
        {
          events.map( ( objElement: any ) => {
            return(
             <TeamCard
              key={ objElement.id }
              game={ objElement.name }
              city={ objElement.city }
              state={ objElement.state }
              time={ objElement.date }
              /> 
            )
          })
        }
      </div>  
    </div>
  )
}
