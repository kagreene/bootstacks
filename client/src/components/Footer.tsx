import { Link } from 'react-router'
import './styles.css'

export const Footer = () => {
    return (
        <footer className='footer'>
            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>
            <h3>Boot<span style={{ color:'GrayText' }}>Stacks</span></h3>
            </Link>
            <Link to={"https://github.com/kagreene/bootstacks"} style={{textDecoration:'none', color:'white'}}>
            <h3>GitHub</h3>
            </Link>       
        </footer>
    )
}