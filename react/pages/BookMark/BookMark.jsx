import "./BookMark.css";
import {Header} from "../../components/Header/Header";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import {Disconnection} from "../../components/Disconnection/Disconnection";
import {useState} from "react";
import {UseFetch} from "../../hooks/UseFetch";

export const BookMark = function () {

    const page = "Signets";
    const {isLoading, apiData} = UseFetch("api/user/25");

    return(
        <>
            <Header user={apiData}/>
            <main className="List">
                <div id="profile-top" className="flexRow align">
                    <NavLink to="/home"><FontAwesomeIcon icon={faArrowLeft} className="grey icon" /></NavLink>
                    <div className="flexColumn pseudoProfile">
                        <h1 className="titlePage">{page}</h1>
                        <p className="grey">@{apiData.pseudo}</p>
                    </div>
                </div>
                <h1 className="pad-10-20">Vos signets</h1>
                <Disconnection user={apiData} />
            </main>
        </>
    );
}