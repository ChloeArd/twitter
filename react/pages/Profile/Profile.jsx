import "./Profile.css";
import {useEffect, useState} from "react";
import {Disconnection} from "../../components/Disconnection/Disconnection";
import {EditProfile} from "../../components/EditProfile/EditProfile";
import {Header} from "../../components/Header/Header";
import {ProfileComponent} from "../../components/ProfileComponent/ProfileComponent";
import {UseFetch} from "../../hooks/UseFetch";

export const Profile = function () {

    const {isLoading, apiData} = UseFetch("api/user/25");

    return (
        <>
            <Header user={apiData} />
            <main className="Profile">
                <ProfileComponent user={apiData} />
                <EditProfile user={apiData} />
                <Disconnection user={apiData} />
            </main>
        </>
    );
}