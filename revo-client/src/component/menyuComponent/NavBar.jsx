import React from "react";
import {AuthDropDown} from "./AuthDropDown";
import {Link} from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <div className="header_content d-flex flex-row align-items-center" style={{height:'100%'}}>
                <div className="logo_container">
                    <div className="logo">
                        <img src="../revo_logo.jpg" alt=""/>
                        <span>Revolution</span>
                    </div>
                </div>

                <nav className="main_nav_container p-0 m-0">
                    <div className="main_nav">
                        <ul className="main_nav_list d-flex m-0">
                            <li className="main_nav_item"><Link to={"/"}>menu</Link></li>
                            <li className="main_nav_item"><a href="#">about us</a></li>
                            <li className="main_nav_item"><a href="#">courses</a></li>
                            <li className="main_nav_item"><a href="#">elements</a></li>
                            <li className="main_nav_item"><a href="#">news</a></li>
                            <li className="main_nav_item"><AuthDropDown/></li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="header_side d-flex flex-row justify-content-center align-items-center">
                <img src="./assets/images/phone-call.svg" alt=""/>
                <span>+43 4566 7788 2457</span>
            </div>

            <div className="hamburger_container">
                <i className="fas fa-bars trans_200"/>
            </div>
        </>
    )
}