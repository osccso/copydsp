import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import { SesionContext } from "../useContext/SessionContext";
import React, { useState } from "react";

function AppRouters() {
    const [sessions, setSessions] = useState({
        description: "",
        primary_topic: "",
    });
    return (
        <SesionContext.Provider value={{ sessions, setSessions }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </SesionContext.Provider>
    );
}

export default AppRouters;
