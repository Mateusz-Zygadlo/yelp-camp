import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import {
  Welcome
} from './pages'

export const App: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/welcome' element={<Welcome />} /> 
      </Routes>
    </BrowserRouter>
  )
}