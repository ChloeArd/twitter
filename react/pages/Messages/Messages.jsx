import "./Messages.css";

import {useEffect, useState} from "react";
import {Search} from "../../components/Search/Search";
import {Disconnection} from "../../components/Disconnection/Disconnection";
import {faCog, faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import {faPlusSquare, faHandPointRight, faImage} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {UserMessages} from "../../components/UserMessages/UserMessages";
import {AddMessage} from "../../components/AddMessage/AddMessage";
import {Header} from "../../components/Header/Header";
import {UseFetch} from "../../hooks/UseFetch";

export const Messages = function () {
    const page = "Messages";

    const {isLoading, apiData} = UseFetch("api/user/25");

    useEffect(() => {
        document.title = page;
    }, []);

    // display a header
    function displayHeader() {
        document.getElementById("header-mobile").style.display = "flex";
    }

    let a = 1;

    // display a modal info
    function displayInfo() {
        if (a === 1) {
            document.getElementById("info").style.display = "block";
            a++;
        }
        else {
            document.getElementById("info").style.display = "none";
            a = 1;
        }
    }

    // Display a modal for a new message
    function displayAddMessage() {
        document.getElementById("addMessage").style.display = "flex";
    }

    return (
        <>
            <Header user={apiData} />
            <main className="Messages">
                <div id="home-top" className="flexRow align">
                    <div className="flexRow">
                        {apiData.pictureProfile !== null ? <img id="displayMenu" onClick={displayHeader} className="image-user" src={apiData.pictureProfile} />
                            :
                            <img id="displayMenu" onClick={displayHeader}  className="image-user" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png" />
                        }
                        <h1 className="titlePage">{page}</h1>
                    </div>
                    <div className="flex-end">
                        <FontAwesomeIcon icon={faCog} className="icon icon2 grey" />
                        <FontAwesomeIcon icon={faPlusSquare} className="icon icon2 grey" onClick={displayAddMessage} />
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
                        <FontAwesomeIcon icon={faExclamationCircle} className="icon grey" onClick={displayInfo} />
                        <div id="info">
                            <p className="blue">Bloquer @pseudo</p>
                            <p className="blue">Signaler @pseudo</p>
                            <p className="red">Quitter la conversation</p>
                        </div>
                    </div>
                </div>

                <div className="scrollBar2">
                    <div className="messages-right">
                        <div>
                            Lorem ipsum dolor sit amet
                        </div>
                        <p>00/00/0000 à 00h00</p>
                    </div>

                    <div className="messages-left">
                        <div>
                            Lorem ipsum dolor sit amet
                        </div>
                        <p>00/00/0000 à 00h00</p>
                    </div>

                    <div id="writeMessage">
                        <div className="parent-div">
                            <button className="btn-upload"><FontAwesomeIcon icon={faImage} /></button>
                            <input type="file" name="file"/>
                        </div>
                        <input id="inputMessage" name="message" type="text"/>
                        <button type="submit" className="buttonSend"><FontAwesomeIcon icon={faHandPointRight} /></button>
                    </div>
                </div>
                <AddMessage />
                <Disconnection user={apiData} />
            </main>
        </>

    );
}