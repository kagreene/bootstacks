import { Route, Routes } from 'react-router'
import { Home } from '../pages'

export const AppRouter = () => {
  return (
    <Routes> 
        <Route path='/' element={ <Home /> } />        
    </Routes>
  )
}
