import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import {
  Welcome,
  Home,
} from './pages'

export const App: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  )
}