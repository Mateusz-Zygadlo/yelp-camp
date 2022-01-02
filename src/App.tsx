import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from 'react-router-dom'
import {
  Welcome,
  Home,
  Detail,
} from './pages'
import {
  Navbar,
} from './components'

export const App: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/detail' element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const MainLayout: React.FC = () => {
  return(
    <div className="px-8 md:px-16 lg:px-24 py-10">
      <Navbar isLogged={false} />

      <Outlet />
    </div>
  )
}