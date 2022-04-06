import "./Disconnection.css";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

export const Disconnection = function () {

    return(
        <div className="Disconnection flexRow align">
            <div className="image-user-session">a</div>
            <div className="flexColumn pad-10-20">
                <p>Name</p>
                <p className="pseudo-2">@pseudo</p>
            </div>
            <FontAwesomeIcon icon={faSignOutAlt} className="grey"/>
        </div>
    )
}