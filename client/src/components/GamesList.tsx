import React from 'react'
import { TeamCard } from './TeamCard'

/*

data that we need -->
game
location
date
time 
image

*/

const  games = [
    {

    },
] 

export const GamesList = () => {

  return (
    <div>
        <TeamCard game="Los Lakers at El Heats" location="miami" time="7:00pm"/>
    </div>
  )
}
