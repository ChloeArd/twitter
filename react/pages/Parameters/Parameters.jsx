import "./Parameters.css";
import {Header} from "../../components/Header/Header";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faKey, faPaintBrush, faUserXmark, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {Disconnection} from "../../components/Disconnection/Disconnection";
import {useState} from "react";

export const Parameters = function () {

    const [sessionGoogle, setSessionGoogle] = useState(JSON.parse(sessionStorage.getItem("infoGoogle")));
    const page = "Paramètres";

    // Display a form to create list
    function displayAddList() {
        document.getElementById("AddList").style.display = "flex";
    }

    return(
        <>
            <Header sessionGoogle={sessionGoogle}/>
            <main className="List">
                <div id="profile-top" className="flexRow align">
                    <NavLink to="/home"><FontAwesomeIcon icon={faArrowLeft} className="grey icon" /></NavLink>
                    <div className="flexColumn pseudoProfile">
                        <h1 className="titlePage">{page}</h1>
                    </div>
                </div>
                <div id="leftParameters">
                    <p><FontAwesomeIcon className="icon blue" icon={faKey}/>Changez de mot de passe <FontAwesomeIcon className="icon angleRight" icon={faAngleRight}/></p>
                    <p><FontAwesomeIcon className="icon blue" icon={faUserXmark}/>Désactiver le compte <FontAwesomeIcon className="icon angleRight" icon={faAngleRight}/></p>
                    <p><FontAwesomeIcon className="icon blue" icon={faPaintBrush}/>Affichage <FontAwesomeIcon className="icon angleRight" icon={faAngleRight}/></p>
                </div>

                <Disconnection sessionGoogle={sessionGoogle} />
            </main>
        </>
    );
}