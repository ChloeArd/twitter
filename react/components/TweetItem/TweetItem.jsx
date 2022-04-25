import "./TweetItem.css";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH, faRetweet} from '@fortawesome/free-solid-svg-icons';
import {faComment, faHeart, faShareSquare} from '@fortawesome/free-regular-svg-icons';
import {AddComment} from "../AddComment/AddComment";


export const TweetItem = function () {

    function displayAddComment() {
        document.getElementById("AddComment").style.display = "block";
    }

    function displayOptionTweet() {
        document.getElementById("optionTweet").style.display = "block";
    }

    function displayNoneOptionTweet() {
        document.getElementById("optionTweet").style.display = "none";
    }

    return(
        <div className="TweetItem flexRow">
            <div className="tweet-left">
                <div className="image-user align justify">User</div>
            </div>
            <div className="tweet-right">
                <div className="flexRow align">
                    <p>Name</p>
                    <p className="pseudo">@pseudo . le 00/00/0000 à 00h00</p>
                    <FontAwesomeIcon icon={faEllipsisH} onClick={displayOptionTweet} className="grey ellipsis"/>
                    <div id="optionTweet" className="optionTweet" onMouseLeave={displayNoneOptionTweet}>
                        <p>Ajouter @pseudo à des Listes/le retirer de Listes</p>
                        <p>Enregistrer le tweet dans les Signets</p>
                        <p>Se désabonner de @pseudo</p>
                        <p>Bloquer @pseudo</p>
                        <p>Signaler le tweet</p>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis,
                    sapien dui mattis dui, non pulvinar lorem felis nec erat
                </p>
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