import "./Home.css";

import {useEffect, useState} from "react";
import {Search} from "../../components/Search/Search";
import {TweetItem} from "../../components/TweetItem/TweetItem";

export const Home = function () {

    const page = "Accueil";

    useEffect(() => {
        document.title = page;
    }, []);

    return (
        <main className="Home">
            <div className="flexRow align">
                <h1 className="titlePage">{page}</h1>
                <Search/>
            </div>
            <button id="addTweet" className="buttonBlue button">Tweeter</button>
            <TweetItem/>
            <TweetItem/>
            <TweetItem/>
        </main>
    );
};
