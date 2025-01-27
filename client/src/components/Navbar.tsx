import { Link } from 'react-router'
import './styles.css'

export const Navbar = () => {
    
  
    return (
    <nav>            
      <div className='logo'>
        <Link to={'/'} style={{textDecoration:'none', color:'white'}}>
        <h3>Boot<span style={{ color:'GrayText' }}>Stacks</span></h3>
        </Link>
      </div>    
      <ul className='nav'>
        <li className='nav-item'>
            <Link to='/' className='nav-link' style={{color:'white'}} >
              Home
            </Link>
        </li>
        <li className='nav-item d-flex flex-row'>
          <button style={{ borderRadius: "10%", marginLeft: "2%" }}>
            <Link to='/login' className='nav-link'>
              Login
            </Link>
          </button>
          <button style={{ borderRadius: "10%", marginLeft: "2%" }} >
            <Link to='/register' className='nav-link'>
              Signup
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  )
}
