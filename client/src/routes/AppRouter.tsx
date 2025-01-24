import { Route, Routes } from 'react-router'
import { Home } from '../pages'
import { Navbar } from '../components/Navbar'
import { Weather } from '../pages'  
export const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes> 
          <Route path='/' element={ <Home /> } />  
          <Route path='/weather' element={ <Weather /> } />      
      </Routes>
    </div>

  )
}
