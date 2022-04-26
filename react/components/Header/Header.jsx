import "./Header.css";
import {NavLink, Outlet} from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faBell} from '@fortawesome/free-regular-svg-icons'
import {faCog, faTimes, faUser, faBookmark, faListUl, faHome, faComment} from "@fortawesome/free-solid-svg-icons";

export const Header = function ({sessionGoogle}) {

    // close a header
    function closeHeader() {
        document.getElementById("header-mobile").style.display = "none";
    }

    return (
        <header className="Header">
            <div className="header-pc flexRow align">
                <FontAwesomeIcon id="logoTwitter" icon={faTwitter}/>
                <div className="nav-links">
                    <NavLink style={({isActive}) => {return {fontWeight: isActive ? "bold" : "normal"};}} to="/home">Accueil</NavLink>
                    <NavLink style={({isActive}) => {return {fontWeight: isActive ? "bold" : "normal"};}} to="/notifications"><FontAwesomeIcon className="icon" icon={faBell}/>Notifications</NavLink>
                    <NavLink style={({isActive}) => {return {fontWeight: isActive ? "bold" : "normal"};}} to="/messages">Messages</NavLink>
                    <NavLink style={({isActive}) => {return {fontWeight: isActive ? "bold" : "normal"};}} to="/bookMarks">Signets</NavLink>
                    <NavLink style={({isActive}) => {return {fontWeight: isActive ? "bold" : "normal"};}} to="/Lists">Listes</NavLink>
                    <NavLink style={({isActive}) => {return {fontWeight: isActive ? "bold" : "normal"};}} to="/profile/">Profil</NavLink>
                    <NavLink to="/parameters/password"><FontAwesomeIcon className="icon" icon={faCog}/></NavLink>
                </div>
                <Outlet />
            </div>
            <div id="header-mobile" className="header-mobile flexRow">
                <h3>Information du compte</h3>
                <FontAwesomeIcon id="close" className="icon grey" icon={faTimes} onClick={closeHeader}/>
                <div className="pad-0-15">
                    {sessionGoogle !== [] ? <img className="image-user" src={sessionGoogle.imageUrl} /> :
                        <img className="image-user align justify" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png" />
                    }

                    <p className="name">{sessionGoogle.name}</p>
                </div>
                <p className="pad-0-15 grey">@pseudo</p>
                <div className="subscribe">
                    <p className="pad-0-15">55 <span className="grey">abonnements</span></p>
                    <p className="pad-0-15">55 <span className="grey">abonnés</span></p>
                </div>

                <div className="nav-links">
                    <NavLink to="/home"><FontAwesomeIcon className="icon" icon={faHome}/>Accueil</NavLink>
                    <NavLink to="/notifications"><FontAwesomeIcon className="icon" icon={faBell}/>Notifications</NavLink>
                    <NavLink to="/messages"><FontAwesomeIcon className="icon" icon={faComment}/>Messages</NavLink>
                    <NavLink to="/profile/"><FontAwesomeIcon className="icon" icon={faUser}/>Profil</NavLink>
                    <NavLink to="/bookMarks"><FontAwesomeIcon className="icon" icon={faBookmark}/>Signets</NavLink>
                    <NavLink to="/lists"><FontAwesomeIcon className="icon" icon={faListUl}/>Listes</NavLink>
                    <NavLink to="/parameters/password"><FontAwesomeIcon className="icon" icon={faCog}/>Paramètres</NavLink>
                </div>
            </div>
        </header>
    );
};
