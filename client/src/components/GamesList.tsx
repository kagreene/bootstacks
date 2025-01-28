//import React from 'react'
import { useEffect, useState } from 'react'
import { TeamCard } from './TeamCard'
import { getEventsData } from '../api/testApi'

export const GamesList = () => {

  const [events, setEvents] = useState([])

  useEffect(() => {
      //getEventsData().then( data => setEvents(data) )
    }, [])

  return (
    <div>
        {
          events.map( ( objElement: any ) => {
            return(
             <TeamCard
              key={ objElement.id }
              game={ objElement.name }
              location={'London'}
              time={ objElement.date }
              /> 
            )
          })
        }
    </div>
  )
}
