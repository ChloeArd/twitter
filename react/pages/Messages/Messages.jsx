import "./Messages.css";

import {useEffect} from "react";
import {Search} from "../../components/Search/Search";
import {Disconnection} from "../../components/Disconnection/Disconnection";
import {faCog, faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import {faPlusSquare, faHandPointRight, faImage} from '@fortawesome/free-regular-svg-icons';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {UserMessages} from "../../components/UserMessages/UserMessages";

export const Messages = function () {
    const page = "Messages";

    useEffect(() => {
        document.title = page;
    }, []);

    // display a header
    function displayHeader() {
        document.getElementById("header-mobile").style.display = "flex";
    }


    return (
        <main className="Messages">
            <div id="home-top" className="flexRow align">
                <div className="flexRow">
                    <div id="displayMenu" onClick={displayHeader} className="image-user align justify">User</div>
                    <h1 className="titlePage">{page}</h1>
                </div>
                <div className="flex-end">
                    <FontAwesomeIcon icon={faCog} className="icon icon2 grey" />
                    <FontAwesomeIcon icon={faPlusSquare} className="icon icon2 grey" />
                </div>
            </div>
            <div className="width_100">
                <Search />
            </div>

            <div className="scrollBar">
                <UserMessages />
                <UserMessages />
                <UserMessages />
                <UserMessages />
            </div>
            <div id="nameUserMessages" className="flexRow align">
                <div className="image-user-session align justify">User</div>
                <div className="flexColumn pad-10-20">
                    <p>Name</p>
                    <p className="pseudo-2">@pseudo</p>
                </div>
                <div className="flex-end">
                    <FontAwesomeIcon icon={faExclamationCircle} className="icon grey" />
                </div>
            </div>

            <div className="scrollBar2">
                <div id="writeMessage">
                    <div className="parent-div">
                        <button className="btn-upload"><FontAwesomeIcon icon={faImage} /></button>
                        <input type="file" name="file"/>
                    </div>
                    <input id="inputMessage" name="message" type="text"/>
                    <button type="submit" className="buttonSend"><FontAwesomeIcon icon={faHandPointRight} /></button>
                </div>
            </div>
            <Disconnection />
        </main>
    );
}