import "./Header.css";
import {NavLink, Outlet} from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faBell} from '@fortawesome/free-regular-svg-icons'
import {faCog, faPaintBrush} from "@fortawesome/free-solid-svg-icons";

export const Header = function () {

    let a = 1;

    /**
     * Display a sub nav
     */
    function displaySubNav() {
        if (a === 1) {
            document.getElementById("sub-nav-links").style.display = "flex";
            document.getElementById("more").style.fontWeight = "bold";
            a++;
        }
        else if(a !== 1) {
            document.getElementById("sub-nav-links").style.display = "none";
            document.getElementById("more").style.fontWeight = "normal";
            a--;
        }
    }

    return (
        <header className="Header">
            <FontAwesomeIcon id="logoTwitter" icon={faTwitter}/>
            <div className="nav-links">
                <NavLink style={({isActive}) => {return {fontWeight: isActive ? "bold" : "normal"};}} to="/">Accueil</NavLink>
                <NavLink style={({isActive}) => {return {fontWeight: isActive ? "bold" : "normal"};}} to="/1">Explorer</NavLink>
                <NavLink style={({isActive}) => {return {fontWeight: isActive ? "bold" : "normal"};}} to="/2"><FontAwesomeIcon className="icon" icon={faBell}/>Notifications</NavLink>
                <NavLink style={({isActive}) => {return {fontWeight: isActive ? "bold" : "normal"};}} to="/3">Messages</NavLink>
                <NavLink style={({isActive}) => {return {fontWeight: isActive ? "bold" : "normal"};}} to="/4">Signets</NavLink>
                <NavLink style={({isActive}) => {return {fontWeight: isActive ? "bold" : "normal"};}} to="/5">Listes</NavLink>
                <NavLink style={({isActive}) => {return {fontWeight: isActive ? "bold" : "normal"};}} to="/6">Profil</NavLink>
                <NavLink to="" id="more" onClick={displaySubNav}>Plus</NavLink>
                <div id="sub-nav-links">
                    <NavLink to=""><FontAwesomeIcon className="icon" icon={faCog}/>Paramètres</NavLink>
                    <NavLink to=""><FontAwesomeIcon className="icon" icon={faPaintBrush}/>Affichage</NavLink>
                </div>
            </div>
            <Outlet />
        </header>
    );
};
