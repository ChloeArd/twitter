import "./EditProfile.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Search} from "../Search/Search";

export const EditProfile = function () {

    function closeModal() {
        document.getElementById("EditProfile").style.display = "none";
    }

    return (
        <div id="EditProfile" className="EditProfile">
            <div className="modal">
                <div className="flexRow align">
                    <FontAwesomeIcon id="closeModalAddTweet" className="icon grey" icon={faTimes} onClick={closeModal}/>
                </div>
                <div className="addContent">
                    <h3>Editer le profil</h3>
                </div>
                <div className="flexColumn">
                    <label>La bannière</label>
                    <input type="file"/>
                    <label>La photo de profil</label>
                    <input type="file"/>
                    <label>Nom</label>
                    <input type="text"/>
                    <label>Biographie</label>
                    <textarea></textarea>
                    <label>Localisation</label>
                    <input type="text"/>
                    <label>Date de naissance</label>
                    <input type="date"/>
                    <button type="submit" className="button buttonBlue">Enregistrer</button>
                </div>
            </div>
        </div>
    );
}