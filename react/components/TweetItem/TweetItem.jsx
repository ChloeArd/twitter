import "./TweetItem.css";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH, faSync} from '@fortawesome/free-solid-svg-icons';
import {faComment, faHeart, faShareSquare} from '@fortawesome/free-regular-svg-icons';


export const TweetItem = function () {

    return(
        <div className="TweetItem flexRow">
            <div className="tweet-left">
                <div className="image-user">a</div>
            </div>
            <div className="tweet-right">
                <div className="flexRow align">
                    <p>Name</p>
                    <p className="pseudo">@pseudo . le 00/00/0000 à 00h00</p>
                    <FontAwesomeIcon icon={faEllipsisH} className="grey ellipsis"/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis,
                    sapien dui mattis dui, non pulvinar lorem felis nec erat
                </p>
                <div className="container-icon">
                    <FontAwesomeIcon className="grey" icon={faComment} />
                    <FontAwesomeIcon className="grey" icon={faSync} />
                    <FontAwesomeIcon className="grey" icon={faHeart} />
                    <FontAwesomeIcon className="grey" icon={faShareSquare} />
                </div>
            </div>
        </div>
    );
}