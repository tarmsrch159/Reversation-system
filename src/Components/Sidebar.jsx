import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AuthService from '../context/Auth_2'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

//React-Icons
import { FcCalendar } from "react-icons/fc";
import { FcBookmark } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { MdPersonAddAlt1 } from "react-icons/md";
function Sidebar() {

    const [dashboard_Ac, setDasboard_Ac] = useState('')
    const [ul_Ac, setUl_Ac] = useState('collapse')
    const [expand_Ac, setexpand_Ac] = useState('false')
    const isAuthenticated = AuthService.isAuthenticated()
    const toggle_active = () => {
        if (dashboard_Ac == '') {
            setDasboard_Ac('active')
            setUl_Ac('collapse in')
            setexpand_Ac('true')
        } else {
            setDasboard_Ac('')
            setUl_Ac('collapse')
            setexpand_Ac('false')
        }
    }

    const optionsAlert = {
        title: "ยืนยันที่จะออกจากระบบใช่หรือไม่",
        message: "",
        buttons: [
            {
                label: "ใช่",
                onClick: () => {
                    AuthService.logout()
                    location.reload()
                }
            },
            {
                label: "ไม่"
                // onClick: () => alert("Click No")
            }
        ]
    }

    const handleLogout = () => {
        confirmAlert(optionsAlert)
    }

    return (
        <>

            <div className="nk-sidebar">
                <div className="nk-nav-scroll">
                    {isAuthenticated
                        ? <>

                            <ul className="metismenu" id="menu">
                                <li className="nav-label">Dashboard</li>
                                <NavLink to='/' className={({ isActive }) => (isActive ? 'mega-menu mega-menu-sm active' : 'inactive')}>
                                    <li className="">
                                        <a className="" href="#" aria-expanded={expand_Ac} style={{ display: 'flex', justifyContent: 'space-around' }}>

                                            <FcCalendar />
                                            <span className="nav-text">ปฎิทินการใช้ห้อง</span>
                                        </a>
                                    </li>
                                </NavLink>



                                <NavLink to='/book_room' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                    <li className="mega-menu mega-menu-sm">
                                        <a className="" href="#" aria-expanded={expand_Ac} style={{ display: 'flex', justifyContent: 'space-around' }}>
                                            <FcBookmark />
                                            <span className="nav-text">จองห้องประชุม</span>
                                        </a>
                                    </li>
                                </NavLink>

                                <NavLink to='/dashboard_room' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                                    <li className="mega-menu mega-menu-sm">
                                        <a className="" href="#" aria-expanded={expand_Ac} style={{ display: 'flex', justifyContent: 'space-around' }}>
                                            <FcComboChart />

                                            <span className="nav-text">แผนผังการใช้ห้องประชุม</span>
                                        </a>
                                    </li>
                                </NavLink>


                                <NavLink to='/protectRoute/all_meeting_room' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                                    <li className="mega-menu mega-menu-sm">
                                        <a className="" href="#" aria-expanded={expand_Ac} style={{ display: 'flex', justifyContent: 'space-around' }}>
                                            <FcViewDetails />

                                            <span className="nav-text">รายละเอียดห้องประชุม</span>
                                        </a>
                                    </li>
                                </NavLink>

                                <NavLink to='/using_meeting_room' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                                    <li className="mega-menu mega-menu-sm">
                                        <a className="" href="#" aria-expanded={expand_Ac} style={{ display: 'flex', justifyContent: 'space-around' }}>
                                            <FcTodoList />

                                            <span className="nav-text">การใช้ห้องประชุม</span>
                                        </a>
                                    </li>
                                </NavLink>

                                <hr />

                                <NavLink to='/protectRoute/Ad_admin' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                                    <li className="mega-menu mega-menu-sm">
                                        <a className="" href="#" aria-expanded={expand_Ac} style={{ display: 'flex', justifyContent: 'space-around' }}>
                                            <MdPersonAddAlt1 />

                                            <span className="nav-text">เพิ่มข้อมูล ผู้ดูแล</span>
                                        </a>
                                    </li>
                                </NavLink>

                                <NavLink to='#' className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={handleLogout} >
                                    <li className="mega-menu mega-menu-sm">
                                        <a className="" href="#" aria-expanded={expand_Ac} style={{ display: 'flex', justifyContent: 'space-around' }}>
                                            <FcPrevious />

                                            <span className="nav-text">ออกจากระบบ</span>
                                        </a>
                                    </li>
                                </NavLink>


                            </ul>

                        </>

                        : <>

                            <ul className="metismenu" id="menu">
                                <li className="nav-label">Dashboard</li>
                                <NavLink to='/' className={({ isActive }) => (isActive ? 'mega-menu mega-menu-sm active' : 'inactive')}>
                                    <li className="">
                                        <a className="" href="#" aria-expanded={expand_Ac} style={{ display: 'flex', justifyContent: 'space-around' }}>

                                            <FcCalendar />

                                            <span className="nav-text">ปฎิทินการใช้ห้อง</span>
                                        </a>
                                    </li>
                                </NavLink>

                                <NavLink to='/book_room' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                    <li className="mega-menu mega-menu-sm">
                                        <a className="" href="#" aria-expanded={expand_Ac} style={{ display: 'flex', justifyContent: 'space-around' }}>
                                            <FcBookmark />
                                            <span className="nav-text">จองห้องประชุม</span>
                                        </a>
                                    </li>
                                </NavLink>

                                <NavLink to='/using_meeting_room' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                                    <li className="mega-menu mega-menu-sm">
                                        <a className="" href="#" aria-expanded={expand_Ac} style={{ display: 'flex', justifyContent: 'space-around' }}>
                                            <FcTodoList />

                                            <span className="nav-text">การใช้ห้องประชุม</span>
                                        </a>
                                    </li>
                                </NavLink>

                                <NavLink to='/dashboard_room' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                                    <li className="mega-menu mega-menu-sm">
                                        <a className="" href="#" aria-expanded={expand_Ac} style={{ display: 'flex', justifyContent: 'space-around' }}>
                                            <FcComboChart />

                                            <span className="nav-text">แผนผังการใช้ห้องประชุม</span>
                                        </a>
                                    </li>
                                </NavLink>

                                <hr />

                                <NavLink to='/login_admin' className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
                                    <li className="mega-menu mega-menu-sm">
                                        <a className="" href="#" aria-expanded={expand_Ac} style={{ display: 'flex', justifyContent: 'space-around' }}>
                                            <FcNext />

                                            <span className="nav-text">เข้าสู่ระบบ (สำหรับผู้ดูแล)</span>
                                        </a>
                                    </li>
                                </NavLink>
                            </ul>

                        </>
                    }

                    {/* render the sidebar for users is not authorized */}


                </div>
            </div>
        </>

    )
}

export default Sidebar