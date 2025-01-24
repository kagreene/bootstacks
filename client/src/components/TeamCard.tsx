import React from 'react'

export const TeamCard = () => {
  return (
    <div className="card" style={{width: "10%"}}>
      <div className='row'>
        <div className='col-8'>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div>
          <img src="..." className="card-img-top" alt="..." />
        </div>                   
      </div>
    </div>
  )
}
