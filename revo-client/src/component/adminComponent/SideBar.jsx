import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {useMediaQuery} from 'react-responsive'

export const Sidebar = ({toggle, clickToggle}) => {
    const view = localStorage.getItem("view")
    const isMobile = useMediaQuery({maxWidth: 1199})
    const role = localStorage.getItem('role')
    const location = useLocation().pathname
    const en = localStorage.getItem('enLan')
    const ru = localStorage.getItem('ruLan')

    if (location === "/admin/message") {
        localStorage.setItem("view", '0')
    }

    const navLinkInfos = role === 'SuperAdmin' ? [
        {
            title: ru === "true" ? "Домашняя страница" : en === "true" ? "Homepage" : "Bosh sahifa",
            link: '/admin',
            icon: 'fas fa-home'
        }, {
            title: "employes",
            link: '/admin/users',
            icon: 'fa-solid fa-users'
        },
        {
            title: "foydalanuvhilar",
            link: '/admin/users/online',
            icon: 'fa-solid fa-user'
        },
        {
            title: "messenger",
            link: "/admin/messenger",
            icon: 'fa-solid fa-message'
        },
        {
            title: "icons",
            link: "/admin/icons",
            icon: "fa-regular fa-icons"
        }
    ] : role === "BOT_ADMIN" ? [
        {
            title: ru === "true" ? "Домашняя страница" : en === "true" ? "Homepage" : "Bosh sahifa",
            link: '/admin/bot',
            icon: 'fas fa-home'
        },
        {
            title: "messenger",
            link: "/admin/messenger",
            icon: 'fa-solid fa-message'
        },
        {
            title: "icons",
            link: "/admin/icons",
            icon: "fa-regular fa-icons"
        }
    ] : role === "ADMIN_CRM" ? [
        {
            title: ru === "true" ? "Домашняя страница" : en === "true" ? "Homepage" : "Bosh sahifa",
            link: '/admin/crm',
            icon: 'fas fa-home'
        },
        {
            title: "messenger",
            link: "/admin/messenger",
            icon: 'fa-solid fa-message'
        },
        {
            title: "icons",
            link: "/admin/icons",
            icon: "fa-regular fa-icons"
        }
    ] : role === "TEACHER" ? [
        {
            title: ru === "true" ? "Домашняя страница" : en === "true" ? "Homepage" : "Bosh sahifa",
            link: '/admin/teacher',
            icon: 'fas fa-home'
        },
        {
            title: "messenger",
            link: "/admin/messenger",
            icon: 'fa-solid fa-message'
        },
        {
            title: "icons",
            link: "/admin/icons",
            icon: "fa-regular fa-icons"
        }
    ] : role === "ADMIN_CLIENT" ? [
        {
            title: ru === "true" ? "Домашняя страница" : en === "true" ? "Homepage" : "Bosh sahifa",
            link: '/admin/client',
            icon: 'fas fa-home'
        },
        {
            title: "foydalanuvhilar",
            link: '/admin/users/online',
            icon: 'fa-solid fa-users'
        },
        {
            title: "messenger",
            link: "/admin/messenger",
            icon: 'fa-solid fa-message'
        },
        {
            title: "icons",
            link: "/admin/icons",
            icon: "fa-regular fa-icons"
        }
    ] : [
        ""
    ]

    return (
        <div className={toggle ? 'toggle-sidebar' : ''}>
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    {navLinkInfos.map(item => (
                        <li className={'nav-item'} key={item.link}>
                            <Link className={location === item.link ? `nav-link p-2 bg-warning` : 'nav-link p-2'}
                                  to={item.link} onClick={isMobile && clickToggle}>
                        <span className={'card-title pb-0 pt-0 m-0'}>
                           <i className={location === item.link ? `${item.icon} text-white` : `${item.icon} text-warning`}/>
                        </span>
                                <span
                                    className={location === item.link ? 'text-white pb-0 pt-0 m-0' : 'text-warning pb-0 pt-0 m-0'}>{item.title}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>

        </div>
    )
}