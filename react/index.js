import "./index.css";
import {Home} from "./pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RouteNotFound} from "./components/RouteNotFound/RouteNotFound";
import {Messages} from "./pages/Messages/Messages";
import {Profile} from "./pages/Profile/Profile";
import {Log} from "./pages/Log/Log";
import {List} from "./pages/List/List";
import {BookMark} from "./pages/BookMark/BookMark";
import {ParametersPassword} from "./pages/ParametersPassword/ParametersPassword";
import {ParametersDeactivate} from "./pages/ParametersDeactivate/ParametersDeactivate";
import {ParametersDisplay} from "./pages/ParametersDisplay/ParametersDisplay";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Log/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/lists" element={<List/>}/>
            <Route path="/bookMarks" element={<BookMark/>}/>
            <Route path="/parameters/password" element={<ParametersPassword/>}/>
            <Route path="/parameters/deactivate" element={<ParametersDeactivate/>}/>
            <Route path="/parameters/deactivate" element={<ParametersDeactivate/>}/>
            <Route path="/parameters/display" element={<ParametersDisplay/>}/>
            <Route path="*" element={<RouteNotFound/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
