import "./Home.css";

import {useEffect, useState} from "react";
import {Search} from "../../components/Search/Search";
import {TweetItem} from "../../components/TweetItem/TweetItem";
import {Disconnection} from "../../components/Disconnection/Disconnection";
import {AddTweet} from "../../components/AddTweet/AddTweet";

export const Home = function () {

    const page = "Accueil";

    useEffect(() => {
        document.title = page;
    }, []);

    // display a header
    function displayHeader() {
        document.getElementById("header-mobile").style.display = "flex";
    }

    function displayAddTweet() {
        document.getElementById("AddTweet").style.display = "block";
    }

    return (
        <main className="Home">
            <div id="home-top" className="flexRow align">
                <div className="flexRow">
                    <div id="displayMenu" onClick={displayHeader} className="image-user align justify">User</div>
                    <h1 className="titlePage">{page}</h1>
                </div>
                <Search />
            </div>
            <button id="addTweet" className="buttonBlue button" onClick={displayAddTweet}>Tweeter</button>
            <TweetItem />
            <TweetItem />
            <TweetItem />
            <Disconnection />
            <AddTweet />
        </main>
    );
};
