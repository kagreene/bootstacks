import { TeamCard } from "../components/TeamCard"


export const Home = () => { 
    
  return (
    <div>
      <section>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </section>

      <section>
        <TeamCard />
      </section>
    </div>
  )
}
