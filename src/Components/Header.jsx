import React, { useState } from 'react'
import logo_1 from '/assets/images/avatar/1.jpg'
import AuthService from '../context/Auth_2'
function Header({ obtaine_msg }) {

    const [style_toggle, setStyle_toggle] = useState('show')
    const adminUsername = localStorage.getItem('adminUsername')

    // const handleLogout = () => {
    //     AuthService.logout()
    //     location.reload()

    // }

    const change_style = () => {
        if (style_toggle == 'show') {
            setStyle_toggle('show menu-toggle')
        } else {
            setStyle_toggle('show')
        }
        obtaine_msg(style_toggle)
    }



    return (
        <div className="header">
            <div className="header-content clearfix">
                <div className="nav-control">
                    <div className="hamburger" onClick={change_style}>
                        <span className="toggle-icon">
                            <i className="icon-menu" />
                        </span>
                    </div>
                </div>

                <div className="header-right">
                    <ul className="clearfix">

                        {adminUsername
                            ? <li className="icons dropdown">
                                <div
                                    className="user-img c-pointer position-relative"
                                    data-toggle="dropdown"
                                >
                                    <span className="activity active" />
                                    <img src="../../assets/images/user/1.png" height={40} width={40} alt="" />
                                </div>
                                <div className="drop-down dropdown-profile animated fadeIn dropdown-menu">
                                    <div className="dropdown-content-body">
                                        <ul>
                                            <li>
                                                <a href="app-profile.html">
                                                    <i className="icon-user" /> <span>ชื่อ {adminUsername}</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    <i className="icon-key" /> <span>ออกจากระบบ</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            : <div></div>}


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header