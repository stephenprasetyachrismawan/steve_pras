// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";


import "./components/com.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home.js";
import Closer from "./pages/Closer.js";
import Education from "./pages/Education.js";

function App() {
    return (
        <div>

            <Routes>

                <Route path="/"
                    element={<Layout/>}>
                    <Route index
                        element={<Home/>}/>
                    <Route path="home"
                        element={<Home/>}/>
                    <Route path="closer"
                        element={<Closer/>}/>
                    <Route path="pendidikan"
                        element={<Education/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
