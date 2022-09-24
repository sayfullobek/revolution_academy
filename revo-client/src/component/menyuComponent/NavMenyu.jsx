import React from "react";
import {AuthDropDown} from "./AuthDropDown";

export const NavMenyu = () => {
    return(
        <div className="menu_container menu_mm">

            <div className="menu_close_container">
                <div className="menu_close"/>
            </div>

            <div className="menu_inner menu_mm">
                <div className="menu menu_mm">
                    <ul className="menu_list menu_mm">
                        <li className="menu_item menu_mm"><a href="#">Home</a></li>
                        <li className="menu_item menu_mm"><a href="#">About us</a></li>
                        <li className="menu_item menu_mm"><a href="#">Courses</a></li>
                        <li className="menu_item menu_mm"><a href="#">Elements</a></li>
                        <li className="menu_item menu_mm"><a href="#">News</a></li>
                        <li className="main_nav_item mb-5"><AuthDropDown/></li>
                    </ul>


                    <div className="menu_social_container menu_mm">
                        <ul className="menu_social menu_mm">
                            <li className="menu_social_item menu_mm"><a href="#"><i
                                className="fab fa-pinterest"/></a></li>
                            <li className="menu_social_item menu_mm"><a href="#"><i
                                className="fab fa-linkedin-in"/></a></li>
                            <li className="menu_social_item menu_mm"><a href="#"><i
                                className="fab fa-instagram"/></a></li>
                            <li className="menu_social_item menu_mm"><a href="#"><i
                                className="fab fa-facebook-f"/></a></li>
                            <li className="menu_social_item menu_mm"><a href="#"><i className="fab fa-twitter"/></a>
                            </li>
                        </ul>
                    </div>

                    <div className="menu_copyright menu_mm">Colorlib All rights reserved</div>
                </div>

            </div>
        </div>
    )
}