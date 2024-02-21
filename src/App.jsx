import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import './assets/calendar.css'
import Header from './Components/Header'
import Header_start from './Components/Header_start'
import Sidebar from './Components/Sidebar'
import Content from './Components/Content'
import Calendar from './Pages/Calendar'
import Book_room from './Pages/Book_room'
import All_meeting_room from './Pages/All_meeting_room'
import Add_meeting_room from './Pages/Add_meeting_room'
import Login_page from './Pages/Login_page'
import Test_calendar from './Pages/Test_calendar'
import Test_calendar_2 from './Pages/Test_calendar_2'
import UsingMeetingRoom from './Pages/UsingMeetingRoom'
import Login_admin from './Pages/Login_admin'
import ProtectComponent from './Components/ProtectComponent'
import DashboardRoom from './Pages/DashboardRoom'
import Ad_Admin from './Pages/Ad_Admin'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectRoute from './Pages/ProtectRoute'
function App() {
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('')

  const obtaine_msg = (msg_1) => {
    setMsg(msg_1)
  }

  return (
    < AuthProvider >

      <BrowserRouter>
        <div className={`h-100 ${msg}`}>
          <Routes>
            {/* Route for Admin only */}
            <Route exact path='/protectRoute' element={<ProtectRoute />}>
              <Route exact path='protectRoute' element={<ProtectComponent />} />
              {/* <Route path='/login' element={< Login_page obtaine_msg={obtaine_msg} />}></Route> */}
              <Route path='all_meeting_room' element={< All_meeting_room obtaine_msg={obtaine_msg} />}></Route>
              <Route path='add_meeting_room' element={< Add_meeting_room obtaine_msg={obtaine_msg} />}></Route>
              <Route path='test_calendar_2' element={< Test_calendar_2 obtaine_msg={obtaine_msg} />}></Route>
              <Route path='Ad_admin' element={< Ad_Admin obtaine_msg={obtaine_msg} />}></Route>
            </Route>
            <Route path='/login_admin' element={< Login_admin obtaine_msg={obtaine_msg} />}></Route>
            <Route path='/' element={< Calendar obtaine_msg={obtaine_msg} />}></Route>
            <Route path='/using_meeting_room' element={< UsingMeetingRoom obtaine_msg={obtaine_msg} />}></Route>
            <Route path='/book_room' element={< Book_room obtaine_msg={obtaine_msg} />}></Route>
            <Route path='/dashboard_room' element={< DashboardRoom obtaine_msg={obtaine_msg} />}></Route>




          </Routes>

        </div>
      </BrowserRouter>
    </AuthProvider>


  )
}

export default App
