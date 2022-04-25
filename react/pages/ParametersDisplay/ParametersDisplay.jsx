import "./ParametersDisplay.css";
import {Header} from "../../components/Header/Header";
import {Disconnection} from "../../components/Disconnection/Disconnection";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faArrowLeft, faKey, faPaintBrush, faUserXmark} from "@fortawesome/free-solid-svg-icons";

export const ParametersDisplay = function () {

    const [sessionGoogle, setSessionGoogle] = useState(JSON.parse(sessionStorage.getItem("infoGoogle")));
    const page = "Paramètres";

    return(
        <>
            <Header sessionGoogle={sessionGoogle}/>
            <main className="ParametersDisplay">
                <div id="profile-top" className="flexRow align">
                    <NavLink to="/home"><FontAwesomeIcon icon={faArrowLeft} className="grey icon" /></NavLink>
                    <div className="flexColumn pseudoProfile">
                        <h1 className="titlePage">{page}</h1>
                    </div>
                </div>
                <div className="flexRow">
                    <div id="leftParameters" className="flexColumn">
                        <NavLink to="/parameters/password" style={({isActive}) => {return {backgroundColor: isActive ? "#f1f2f3" : "transparent"};}}><FontAwesomeIcon className="icon blue" icon={faKey}/>Changez de mot de passe <FontAwesomeIcon className="icon angleRight" icon={faAngleRight}/></NavLink>
                        <NavLink to="/parameters/deactivate" style={({isActive}) => {return {backgroundColor: isActive ? "#f1f2f3" : "transparent"};}}><FontAwesomeIcon className="icon blue" icon={faUserXmark}/>Désactiver le compte <FontAwesomeIcon className="icon angleRight" icon={faAngleRight}/></NavLink>
                        <NavLink to="/parameters/display" style={({isActive}) => {return {backgroundColor: isActive ? "#f1f2f3" : "transparent"};}}><FontAwesomeIcon className="icon blue" icon={faPaintBrush}/>Affichage <FontAwesomeIcon className="icon angleRight" icon={faAngleRight}/></NavLink>
                    </div>
                    <div id="rightParameters" className="flexColumn justify">
                        <h1>Affichage</h1>
                        <p className="grey">Gérer le thème du compte.</p>
                        <button id="buttonBlack">Mode sombre</button>
                        <button id="buttonWhite">Mode claire</button>
                    </div>
                </div>

                <Disconnection sessionGoogle={sessionGoogle} />
            </main>
        </>
    );
}