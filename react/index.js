import "./index.css";
import {Home} from "./pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RouteNotFound} from "./components/RouteNotFound/RouteNotFound";
import {Messages} from "./pages/Messages/Messages";
import {Profile} from "./pages/Profile/Profile";
import {Log} from "./pages/Log/Log";
import {useState} from "react";
import {List} from "./pages/List/List";
import {BookMark} from "./pages/BookMark/BookMark";
import {Parameters} from "./pages/Parameters/Parameters";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Log/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/lists" element={<List/>}/>
            <Route path="/bookMarks" element={<BookMark/>}/>
            <Route path="/parameters" element={<Parameters/>}/>
            <Route path="*" element={<RouteNotFound/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
