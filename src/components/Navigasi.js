import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

import TombolHome from "./Navigasi/TombolHome.js";
import "../components/com.css";
import {Link} from "react-router-dom";
import "../App.css"

function Navigasi() {
    return (
        <>
            <Navbar bg="none" variant="light" sticky="top" className="Flex2 w-100 position-fixed ">
                <Container className="Flex2 ">
                    <Link to="/" className="Flex-kiri Link">

                        <TombolHome/>
                    </Link>

                    <Nav className=" justify-content-end navtag px-3 Flex-kanan">

                        <Link to="/home" className="Link">
                            Home
                        </Link>


                        <Link to="/closer" className="Link">Introduction</Link>
                        <Link to="/pendidikan" className="Link">
                            Education
                        </Link>

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}


export default Navigasi;
