import React from 'react'
import Navigasi from "./Navigasi.js";
import Footer from "./Footer.js";
import {Outlet} from "react-router-dom";
import "../App.css"

function Layout() {
    return (
        <div>
            <Navigasi/>
            <Outlet/>
            <Footer/>

        </div>
    )
}

export default Layout;
