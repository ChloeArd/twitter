import "./Search.css"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

export const Search = function () {

    return(
        <div className="Search align">
            <span id="logo-search"><FontAwesomeIcon icon={faSearch} className="grey" /></span>
            <input type="text" id="input-search" />
            <input type="submit" id="ok-search" className="buttonBlue" value="Ok"/>
        </div>
    )
}