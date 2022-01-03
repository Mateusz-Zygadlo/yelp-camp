import React, { 
  useState,
  useEffect,
} from 'react';
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
  AddComment,
  SignIn,
  SignUp,
} from './pages'
import {
  Navbar,
} from './components'
import { 
  Images 
} from './assets'
import { UserContext } from './context';
import { useDecodeUser } from './hooks'

export const App: React.FC = () => {
  const decodedUser = useDecodeUser()
  const [user, setUser] = useState(null)
  const value = {
    user,
    setUser
  }

  useEffect(() => {
    if(decodedUser) setUser(decodedUser)
  }, [decodedUser])
  
  return(
    <BrowserRouter>
      <UserContext.Provider value={value}>
        <Routes>
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/register' element={<SignUp />} />
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/places/:id' element={<Detail />} />
            <Route path='/addCampground' element={<AddCampground />} />
            <Route path='/places/:id/comment' element={<AddComment />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

const MainLayout: React.FC = () => {
  return(
    <div className="px-8 md:px-16 lg:px-24 py-10">
      <Navbar />

      <Outlet />

      <img 
        src={Images.Logo} 
        alt="logo" 
        className="my-5"
      />
    </div>
  )
}