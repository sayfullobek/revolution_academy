import React from "react";
import {Outlet} from "react-router-dom";
import {NavBar} from "../component/menyuComponent/NavBar";
import {Footer} from "../component/menyuComponent/Footer";
import {NavMenyu} from "../component/menyuComponent/NavMenyu";

export const MenyuLayout = () => {
    return (
        <>
            <header className="header d-flex flex-row p-0">
                <NavBar/>
                <NavMenyu/>
            </header>
            <Outlet/>
            <Footer/>
        </>
    )
}