import Pendidikan from "../components/Pendidikan.js";
import Carousel from "../components/Carousel.js";
import {carousel_} from "../components/Data.js";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/com.css";


import React from 'react'

function Education() {
    return (
        <div className=" vh-100 ">
            <br/>
            <br/>
            <Pendidikan className=" "/>
            <div className="App w-100 ">

                <Carousel karusel={carousel_}/></div>
        </div>


    )
}

export default Education
