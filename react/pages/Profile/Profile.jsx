import "./Profile.css";
import {Disconnection} from "../../components/Disconnection/Disconnection";
import {EditProfile} from "../../components/EditProfile/EditProfile";
import {Header} from "../../components/Header/Header";
import {ProfileComponent} from "../../components/ProfileComponent/ProfileComponent";
import {UseFetch} from "../../hooks/UseFetch";
import {TweetItem2} from "../../components/TweetItem2/TweetItem2";

export const Profile = function () {

    const {isLoading, apiData} = UseFetch("api/user/25");
    console.log(apiData.tweets);

    return (
        <>
            <Header user={apiData} />
            <main className="Profile">
                <ProfileComponent user={apiData} />
                {apiData.tweets !== undefined ? apiData.tweets
                    .map(tweet => <TweetItem2 key={tweet.id} tweet={tweet} user={apiData} />) : ""}
                <EditProfile user={apiData} />
                <Disconnection user={apiData} />
            </main>
        </>
    );
}