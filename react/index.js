import "./index.scss";
import {Home} from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Header} from "./components/Header/Header";
import {RouteNotFound} from "./components/RouteNotFound/RouteNotFound";


ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
