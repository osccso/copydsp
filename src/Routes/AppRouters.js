import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
// import { SessionContext } from "../useContext/SessionContext";
import React, { useState } from "react";

function AppRouters() {
    // const [dataMain,setDataMain] = useState({})
    return (
        // <SessionContext.Provider value={{ dataMain,setDataMain}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        // {/* </SessionContext.Provider> */}
    );
}

export default AppRouters;
