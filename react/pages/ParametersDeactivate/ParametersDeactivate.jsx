import "./ParametersDeactivate.css";
import {Header} from "../../components/Header/Header";
import {Disconnection} from "../../components/Disconnection/Disconnection";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faArrowLeft, faKey, faPaintBrush, faUserXmark} from "@fortawesome/free-solid-svg-icons";

export const ParametersDeactivate = function () {

    const [sessionGoogle, setSessionGoogle] = useState(JSON.parse(sessionStorage.getItem("infoGoogle")));
    const page = "Paramètres";

    return(
        <>
            <Header sessionGoogle={sessionGoogle}/>
            <main className="ParametersDeactivate">
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
                        <h1>Désactiver le compte</h1>
                        <h2>Ceci désactivera votre compte</h2>
                        <p className="grey">Vous vous apprêtez à lancer la procédure de désactivation de votre compte Twitter.
                            Votre nom d'affichage, votre @nomdutilisateur et votre profil public ne seront plus visibles sur
                            twitter.com, Twitter pour iOS et Twitter pour Android.</p>
                        <input type="submit" className="button buttonSend" value="Désactiver"/>
                    </div>
                </div>

                <Disconnection sessionGoogle={sessionGoogle} />
            </main>
        </>
    );
}