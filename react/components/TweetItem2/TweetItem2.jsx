import "./TweetItem2.css";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRetweet, faTrash} from '@fortawesome/free-solid-svg-icons';
import {faComment, faHeart, faShareSquare} from '@fortawesome/free-regular-svg-icons';
import {AddComment} from "../AddComment/AddComment";


export const TweetItem2 = function ({tweet, user}) {

    function displayAddComment() {
        document.getElementById("AddComment").style.display = "block";
    }

    function deleteTweet() {
        console.log("a")
    }

    return(
        <div className="TweetItem flexRow">
            <div className="tweet-left">
                {user.pictureProfile !== null ? <img className="image-user-session" src={user.pictureProfile} /> :
                    <img className="image-user-session align justify" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png"/>
                }
            </div>
            <div className="tweet-right">
                <div className="flexRow align">
                    <p>{user.name}</p>
                    <p className="pseudo">@{user.pseudo} . le  {tweet.date}</p>
                    <FontAwesomeIcon icon={faTrash} className="red ellipsis" onClick={deleteTweet}/>
                </div>
                {tweet.tweet !== null ? <p>{tweet.tweet}</p> : ""}
                <div className="imageTweet2">
                    {tweet.image !== null ? <img className="width_100"  src={"./assets/imageTweet/" + tweet.image}/> : ""}
                </div>

                <div className="container-icon">
                    <FontAwesomeIcon className="grey" icon={faComment} onClick={displayAddComment} />
                    <FontAwesomeIcon className="grey" icon={faRetweet} />
                    <FontAwesomeIcon className="grey" icon={faHeart} />
                    <FontAwesomeIcon className="grey" icon={faShareSquare} />
                </div>
            </div>
            <AddComment />
        </div>
    );
}