import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "./com.css";
import {Link} from "react-router-dom"

function Lanjut({isi, link}) {
    return (
        <div>

            <Link to={link}
                className="lanjut text-center Link">
                {isi} </Link>


        </div>
    );
}
export default Lanjut;
