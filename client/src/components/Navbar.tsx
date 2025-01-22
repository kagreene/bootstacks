import { Link } from 'react-router'
import './styles.css'

export const Navbar = () => {
    
  
    return (
    <nav>            
      <div className='logo'>
        <h3>Boock<span style={{ color:'GrayText' }}>Stack</span></h3>
      </div>    
      <ul className='nav'>
        <li className='nav-item'>
            <Link to='/' className='nav-link' >
              home
            </Link>
        </li>
        <li className='nav-item'>
            <Link to='/login' className='nav-link'>
              Login
            </Link>
        </li>
      </ul>
    </nav>
  )
}
