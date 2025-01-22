import { Route, Routes } from 'react-router'
import { Home } from '../pages'
import { Navbar } from '../components/Navbar'

export const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes> 
          <Route path='/' element={ <Home /> } />        
      </Routes>
    </div>
  )
}
