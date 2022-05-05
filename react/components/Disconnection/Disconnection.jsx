import "./Disconnection.css";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {LogoutGoogle} from "../LogoutGoogle/LogoutGoogle";

export const Disconnection = function ({user}) {

    return(
        <div className="Disconnection flexRow align">
            {user.pictureProfile !== null ? <img className="image-user-session" src={user.pictureProfile} /> :
            <img className="image-user-session align justify" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png"/>
            }

            <div className="flexColumn pad-10-20">
                <p>{user.name}</p>
                <p className="pseudo-2">@{user.pseudo}</p>
                {user.google !== null ? <LogoutGoogle /> : ""}
            </div>
            {user.google !== null ? "" : <FontAwesomeIcon icon={faSignOutAlt} className="grey"/>}
        </div>
    )
}