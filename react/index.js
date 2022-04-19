import "./index.css";
import {Home} from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Header} from "./components/Header/Header";
import {RouteNotFound} from "./components/RouteNotFound/RouteNotFound";
import {Messages} from "./pages/Messages/Messages";


ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
