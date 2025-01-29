

import footballImg from '../assets/img/img-intro.jpeg'
import { GoalsSection } from '../components/GoalsSection'

export const Home = () => { 
    
  return (

    <section className="container-fluid p-0">
      
      <div className="row">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={ footballImg } className="d-block w-100" alt="..." style={{ height: '80vh' }} />
              <div className="carousel-caption d-none d-md-block">
                <h1>Discover NFL Games with Real-time Weather Updates</h1>
                <p>The best NFL statistics apps developers in Chicago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="row">
          <div className="col">
          <h2>The best NFL statistics and events app</h2>
            <div>
              <p>  We are here to help you to understand better the sport that you love so much </p>
              <p> Join our innovative platform to effortlessly search NFL games by schedule or team. Get instant weather forecasts for a complete game-day experience.</p>
            </div>
          </div>

          <GoalsSection />


        </div>
      

    </section>
  )
}