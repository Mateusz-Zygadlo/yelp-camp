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
  AddCampground,
  AddComment
} from './pages'
import {
  Navbar,
} from './components'
import { 
  Images 
} from './assets'

export const App: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/addCampground' element={<AddCampground />} />
          <Route path='/addComment' element={<AddComment />} />
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

      <img 
        src={Images.Logo} 
        alt="logo" 
        className="my-5"
      />
    </div>
  )
}