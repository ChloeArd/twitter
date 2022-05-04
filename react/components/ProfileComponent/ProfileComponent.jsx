import "./ProfileComponent.css";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faBirthdayCake, faCalendarAlt, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

export const ProfileComponent = function ({user}) {

    console.log(user);

    const page = user.name;

    useEffect(() => {
        document.title = page;
    }, []);

    function displayEditProfile() {
        document.getElementById("EditProfile").style.display = "flex";
    }

    return (
        <>
            <div id="profile-top" className="flexRow align">
                <NavLink to="/home"><FontAwesomeIcon icon={faArrowLeft} className="grey icon" /></NavLink>
                <div className="flexColumn pseudoProfile">
                    <h1 className="titlePage">{user.name}</h1>
                    <p className="grey">0 Tweets</p>
                </div>
            </div>
            <img id="background-user" src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-blue-minimalist-technology-computer-banner-image_188887.jpg"/>
            <div id="photo-user">
                {user.pictureProfile !== null ? <img src={user.pictureProfile} /> :
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png"/>
                }
            </div>
            <div id="info-user">
                <div className="flex-end2">
                    <button id="editProfile" onClick={displayEditProfile}>Editer le profil</button>
                </div>
                <h1>{user.name}</h1>
                <p className="grey">@{user.pseudo}</p>
                <p id="description-user">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus ...
                    nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
                <div className="flexRow align pad-bottom">
                    <p className="grey pad-right"><FontAwesomeIcon icon={faMapMarkerAlt} className="blue pad-right" />Région</p>
                    <p className="grey"><FontAwesomeIcon icon={faBirthdayCake} className="blue pad-right" /> 00/00/0000</p>
                </div>
                <p className="grey pad-bottom"><FontAwesomeIcon icon={faCalendarAlt} className="blue pad-right" /> A rejoint Twitter le {user.dateCreated}</p>
                <div id="subscribe" className="flexRow">
                    <p className="grey pad-right"><span className="blue">55</span> abonnements</p>
                    <p className="grey"><span className="blue">55</span> abonnés</p>
                </div>
            </div>
            <div id="tweets-user" className="flexRow align justifyContent">
                <NavLink to="/profile/" style={({isActive}) => {return {borderBottom: isActive ? "5px solid #0d6efd" : "none"};}}>Tweets</NavLink>
                <NavLink to="/profile/with_replies" style={({isActive}) => {return {borderBottom: isActive ? "5px solid #0d6efd" : "none"};}}>Tweets et réponses</NavLink>
                <NavLink to="/profile/media" style={({isActive}) => {return {borderBottom: isActive ? "5px solid #0d6efd" : "none"};}}>Médias</NavLink>
                <NavLink to="/profile/likes" style={({isActive}) => {return {borderBottom: isActive ? "5px solid #0d6efd" : "none"};}}>J'aime</NavLink>
            </div>
        </>
    );
}