import "./BookMark.css";
import {Header} from "../../components/Header/Header";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import {faPlusSquare} from "@fortawesome/free-regular-svg-icons";
import {ListItem} from "../../components/ListItem/ListItem";
import {AddList} from "../../components/AddList/AddList";
import {Disconnection} from "../../components/Disconnection/Disconnection";
import {useState} from "react";

export const BookMark = function () {

    const page = "Signets";
    const [sessionGoogle, setSessionGoogle] = useState(JSON.parse(sessionStorage.getItem("infoGoogle")));

    return(
        <>
            <Header sessionGoogle={sessionGoogle}/>
            <main className="List">
                <div id="profile-top" className="flexRow align">
                    <NavLink to="/home"><FontAwesomeIcon icon={faArrowLeft} className="grey icon" /></NavLink>
                    <div className="flexColumn pseudoProfile">
                        <h1 className="titlePage">{page}</h1>
                        <p className="grey">@pseudo</p>
                    </div>
                </div>
                <h1 className="pad-10-20">Vos signets</h1>
                <Disconnection sessionGoogle={sessionGoogle} />
            </main>
        </>
    );
}