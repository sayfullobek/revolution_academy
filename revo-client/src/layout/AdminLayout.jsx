import React, {useEffect, useState} from 'react'
import {Outlet, useNavigate, useLocation} from 'react-router-dom'
import {Header} from '../component/adminComponent/Header'
import {Sidebar} from '../component/adminComponent/SideBar'
import {isAuthenticated} from '../handlers/auth'
import {NotFoundPages} from '../pages/NotFoundPages'
import '../pages/adminPanel/stylesAdmin/style.css'
import '../pages/adminPanel/stylesAdmin/main'
import {FooterAdmin} from "../component/adminComponent/FooterAdmin";

export const AdminLayout = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    const [loading, setLoading] = useState(false)
    const role = localStorage.getItem('role')
    const location = useLocation()

    if ((location.pathname === '/admin' || location.pathname === "/admin/users") && role === 'undefained' || localStorage.length === 0) {
        navigate('/')
    } else if ((location.pathname === "/admin" || location.pathname === "/admin/users") && role === "BOT_ADMIN") {
        navigate('/admin/bot')
    } else if ((location.pathname === "/admin" || location.pathname === "/admin/users") && role === "ADMIN_CRM") {
        navigate('/admin/crm')
    } else if ((location.pathname === "/admin" || location.pathname === "/admin/users") && role === "TEACHER") {
        navigate('/admin/teacher')
    } else if ((location.pathname === "/admin" || location.pathname === "/admin/users") && role === "ADMIN_CLIENT") {
        navigate('/admin/client')
    } else if ((location.pathname === "/admin" || location.pathname === "/admin/users") && role === "USER") {
        navigate('/user/panel')
    }

    useEffect(() => {
        const redirectAdminPanel = () => {
            const token = localStorage.getItem('token');
            const isAuth = isAuthenticated(token)
            if (!isAuth) return navigate('/')
            setLoading(true)
        }
        redirectAdminPanel()
    })

    const clickToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            {role === "SuperAdmin" || role === "BOT_ADMIN" || role === "ADMIN_CLIENT" || role === "ADMIN_CRM" || role === "TEACHER" ? (
                <>
                    <Header clickToggle={clickToggle}/>
                    <Sidebar clickToggle={clickToggle} toggle={toggle}/>
                    <main id='main' className={'main'} style={{marginLeft: toggle && '0'}}>
                        {loading ? (
                            <>
                                <Outlet/>
                            </>
                        ) : (
                            <div id="loader-container" className='d-flex align-items-center justify-content-center'>
                                <div className="spinner-border">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )}
                    </main>
                    <FooterAdmin/>
                </>
            ) : (
                <NotFoundPages/>
            )}
        </>
    )
}