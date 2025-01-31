import { Link } from "react-router";
import "./styles.css";
//import logo from "../assets/img/images-weatherblitz/weatherblitz-logo.png";

export const Navbar = () => {    
  
    return (
    <nav className="nav navbar-expand-lg nav-bar">            
      <div className='container-fluid'>      
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>           
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>
            <h3>Weather<span style={{ color:'GrayText' }}>Blitz</span></h3>
          </Link> 
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end'>
            <li >
              <button style={{ borderRadius: "10%"}}>
                <Link to='/login' className='nav-link'>
                  Login
                </Link>
              </button>
            </li>
            <li>
              <button style={{ borderRadius: "10%"}} >
                <Link to='/register' className='nav-link'>
                  Signup
                </Link>
              </button>              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

