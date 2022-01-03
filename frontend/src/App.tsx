import React, { 
  useState,
  useEffect,
  useContext,
} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
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
          <Route path='/login' element={
            <GuestRoute>
              <SignIn />
            </GuestRoute>
          } />
          <Route path='/register' element={
            <GuestRoute>
              <SignUp />
            </GuestRoute>
          } />
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/places/:id' element={<Detail />} />
            <Route path='/addCampground' element={
              <ProtectedRoute>
                <AddCampground />
              </ProtectedRoute>
            } />
            <Route path='/places/:id/comment' element={
              <ProtectedRoute>
                <AddComment />
              </ProtectedRoute>
            } />
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

const ProtectedRoute = ({ children }: any) => {
  const { user } = useContext(UserContext)

  return user ? children : <Navigate to='/' />
}

const GuestRoute = ({ children }: any) => {
  const { user } = useContext(UserContext)

  return !user ? children : <Navigate to='/' />
}