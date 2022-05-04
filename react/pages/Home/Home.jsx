import "./Home.css";

import {useEffect, useState} from "react";
import {Search} from "../../components/Search/Search";
import {TweetItem} from "../../components/TweetItem/TweetItem";
import {Disconnection} from "../../components/Disconnection/Disconnection";
import {AddTweet} from "../../components/AddTweet/AddTweet";
import {Header} from "../../components/Header/Header";
import {UseFetch} from "../../hooks/UseFetch";

export const Home = function () {

    const {isLoading, apiData} = UseFetch("api/user/25");

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
        <>
            <Header user={apiData} />
            <main className="Home">
                <div id="home-top" className="flexRow align">
                    <div className="flexRow">
                        {apiData.pictureProfile !== null ? <img id="displayMenu" onClick={displayHeader} className="image-user" src={apiData.pictureProfile} />
                            :
                            <img id="displayMenu" onClick={displayHeader}  className="image-user" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png" />
                        }
                        <h1 className="blue">{page}</h1>
                    </div>
                    <Search />
                </div>
                <button id="addTweet" className="buttonBlue button" onClick={displayAddTweet}>Tweeter</button>
                <TweetItem />
                <TweetItem />
                <TweetItem />
                <Disconnection user={apiData}/>
                <AddTweet />
            </main>
        </>
    );
};
