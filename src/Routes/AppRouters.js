import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import { SessionContext } from "../useContext/SessionContext";
import React, { useState } from "react";
import RelatedTopics from "../components/RelatedTopics";

function AppRouters() {
    const [sessions, setSessions] = useState({
        description: "Global changes in eastern economy",
        primary_topic: "Economy"
    });
    return (
        <SessionContext.Provider value={{ sessions, setSessions }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/topics" element={<RelatedTopics />}/>
                </Routes>
            </BrowserRouter>
        </SessionContext.Provider>
    );
}

export default AppRouters;
