import "./Log.css";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Log = function () {

    return(
        <div className="Log">
            <h1><FontAwesomeIcon id="logoTwitter2" icon={faTwitter}/>Ça se passe maintenant </h1>
            <div className="flexRow">
                <div id="registration">
                    <h2>Rejoins Twitter dès aujourd'hui.</h2>
                </div>
                <div id="inscription">
                    <h2>Connecte-toi.</h2>

                    <GoogleLogin></GoogleLogin>
                </div>
            </div>
        </div>
    );
}