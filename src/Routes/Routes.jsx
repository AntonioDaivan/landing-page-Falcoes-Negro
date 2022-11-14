import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import  HomePage  from "../pages/Home";

export default props => {
        <Routes>
            <Route exact path="/" element={<HomePage />}>Home</Route>
            <Route exact path="/About" element={<About />}>About</Route>
            <Route path="*" element={<HomePage />}>Home</Route>
        </Routes>
}
