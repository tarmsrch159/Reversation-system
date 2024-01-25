import React from 'react'
import logo from '/assets/images/logo.png'
import logo_compact from '/assets/images/logo-compact.png'

function Header_start() {
    return (
        <div className="nav-header">
            <div className="brand-logo">
                <a href="index.html">
                    <b className="logo-abbr">
                        <img src='{logo}' alt="" />{" "}
                    </b>
                    <span className="logo-compact">
                        <img src='{logo_compact}' alt="" />
                    </span>
                    <span className="brand-title">
                        <img src="/assets/images/logo-text.png" alt="" />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Header_start