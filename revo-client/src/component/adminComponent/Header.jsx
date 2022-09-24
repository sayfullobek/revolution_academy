import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {logout} from '../../handlers/auth'

export const Header = ({clickToggle}) => {
    const role = localStorage.getItem("role")
    const id = localStorage.getItem('id')
    const navigate = useNavigate()
    const lastName = localStorage.getItem('lastName')
    const firstName = localStorage.getItem('firstName')
    const fullName = firstName.toLowerCase() + " " + lastName.toLowerCase()
    const en = localStorage.getItem("enLan")
    const ru = localStorage.getItem("ruLan")

    return (
        <header id="header" style={{height: '60px', clear: 'both', margin: '0', padding: '0'}}
                className="fixed-top bg-light d-flex align-items-center justify-content-center shadow-6-soft">
            <div className="d-flex align-items-center justify-content-between">
                <Link
                    to={role === "SuperAdmin" ? "/admin" : role === "ADMIN_CRM" ? '/admin/crm' : role === "TEACHER" ? "/admin/teacher" : role === "BOT_ADMIN" ? "/admin/bot" : role === "ADMIN_CLIENT" ? "/admin/client" : ""}
                    className="logo d-flex align-items-center">
               <span className="fw-bold text-uppercase d-none d-lg-block text-warning">
                   {ru === "true" ? "Панель управления" : en === "true" ? "Dashboard" : "Boshqaruv paneli"}
               </span>
                </Link>
                <i className="fas fa-bars toggle-sidebar-btn text-warning m-4"
                   style={{fontSize: '25px', cursor: 'pointer'}}
                   onClick={clickToggle}/>
            </div>
            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <li className="nav-item dropdown pe-3">
                        <h2 className="nav-profile d-flex align-items-center">
                            <Link to={`/admin/see/profile/${id}`} className="btn btn-link">
                                <i className="fas fa-user-circle fs-2 text-warning"/>
                            </Link>
                        </h2>
                    </li>
                    <div className="dropdown">
                        <button
                            className="btn text-warning dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {ru === "true" ? "orqaga" : en === "true" ? "back" : "menyu"}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li className="nav-item pe-3">
                                <span className="pe-2 d-md-block text-center text-warning"
                                      style={{fontSize: '16px'}}>{fullName}</span>
                            </li>
                            <li className="nav-item pe-3">
                                <button className={"btn dropdown-item btn-outline-warning d-flex align-items-center"}
                                        onClick={() => {
                                            logout(navigate)
                                        }}>
                                    <span>chiqish</span>
                                </button>
                            </li>
                            <li className="nav-item pe-3">
                                <Link to={"/"}
                                      className={"btn dropdown-item btn-outline-warning d-flex align-items-center"}
                                      style={{cursor: 'pointer'}}>
                                    <span>orqaga</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </ul>
            </nav>
        </header>
    )
}