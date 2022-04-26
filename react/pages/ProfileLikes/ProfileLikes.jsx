import "./ProfileLikes.css";
import {useEffect, useState} from "react";
import {Disconnection} from "../../components/Disconnection/Disconnection";
import {EditProfile} from "../../components/EditProfile/EditProfile";
import {Header} from "../../components/Header/Header";
import {ProfileComponent} from "../../components/ProfileComponent/ProfileComponent";

export const ProfileLikes = function () {

    const [sessionGoogle, setSessionGoogle] = useState(JSON.parse(sessionStorage.getItem("infoGoogle")));

    return (
        <>
            <Header sessionGoogle={sessionGoogle} />
            <main className="ProfileLikes">
                <ProfileComponent sessionGoogle={sessionGoogle} />
                <EditProfile sessionGoogle={sessionGoogle} />
                <Disconnection sessionGoogle={sessionGoogle} />
            </main>
        </>
    );
}