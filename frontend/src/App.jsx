import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Tutors from './pages/Tutors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import Appointment from './pages/Appointment'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tutors' element={<Tutors />} />
        <Route path='/tutors/:speciality' element={<Tutors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:tutorId' element={<Appointment />} />
      </Routes>
    </div>
  )
}

export default App