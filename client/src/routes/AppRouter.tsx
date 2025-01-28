import { Route, Routes } from 'react-router'
import { EventsPage, Home, Login, Register, Weather } from '../pages'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import './styles.css'

export const AppRouter = () => {
  return (
    <div className = "App">
      <Navbar />
      <div className='Routes'>
      <Routes> 
          <Route path='/' element={ <Home /> } />  
          <Route path='weather' element={ <Weather /> } />
          <Route path='login' element={ <Login /> } /> 
          <Route path='register' element={ <Register /> } />
          <Route path='events' element={ <EventsPage /> } />      
      </Routes>
      </div>
      <Footer />
    </div>

  )
}
