import "./List.css";
import {Header} from "../../components/Header/Header";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faEllipsisH,} from "@fortawesome/free-solid-svg-icons";
import {Disconnection} from "../../components/Disconnection/Disconnection";
import {useState} from "react";
import {faPlusSquare} from "@fortawesome/free-regular-svg-icons";
import {ListItem} from "../../components/ListItem/ListItem";
import {AddList} from "../../components/AddList/AddList";

export const List = function () {

    const page = "Listes";
    const [sessionGoogle, setSessionGoogle] = useState(JSON.parse(sessionStorage.getItem("infoGoogle")));

    // Display a form to create list
    function displayAddList() {
        document.getElementById("AddList").style.display = "flex";
    }

    return (
        <>
            <Header sessionGoogle={sessionGoogle}/>
            <main className="List">
                <div id="profile-top" className="flexRow align">
                    <NavLink to="/home"><FontAwesomeIcon icon={faArrowLeft} className="grey icon" /></NavLink>
                    <div className="flexColumn pseudoProfile">
                        <h1 className="titlePage">{page}</h1>
                        <p className="grey">@pseudo</p>
                    </div>
                    <div className="flex-end2">
                        <FontAwesomeIcon icon={faPlusSquare} className="icon icon2 grey" onClick={displayAddList} />
                        <FontAwesomeIcon icon={faEllipsisH} className="grey"/>
                    </div>
                </div>
                <h1 className="pad-10-20">Vos listes</h1>
                <ListItem sessionGoogle={sessionGoogle} />
                <AddList />
                <Disconnection sessionGoogle={sessionGoogle} />
            </main>
        </>
    );
}