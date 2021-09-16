import React from "react";
import './style-scss/style.scss';
import AppRoute from "./Routing/appRoute";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";


function App() {
    return (
        <div className="App">
        <BrowserRouter basename={'/Star-wars/'}>
            <Navbar />
            <AppRoute/>
        </BrowserRouter>
        </div>
    );
}

export default App;
