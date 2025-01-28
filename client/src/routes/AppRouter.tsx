import { Route, Routes } from 'react-router'
import { EventsPage, Home, Login, Register, Weather } from '../pages'
import { Navbar } from '../components/Navbar'

export const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes> 
          <Route path='/' element={ <Home /> } />  
          <Route path='weather' element={ <Weather /> } />
          <Route path='login' element={ <Login /> } /> 
          <Route path='register' element={ <Register /> } />
          <Route path='events' element={ <EventsPage /> } />      
      </Routes>
    </div>

  )
}
