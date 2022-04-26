import "./AddMessage.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Search} from "../Search/Search";

export const AddMessage = function () {

    function closeModal() {
        document.getElementById("addMessage").style.display = "none";
    }

    return(
        <div id="addMessage" className="AddMessage">
            <div className="modal">
                <div className="flexRow align">
                    <FontAwesomeIcon id="closeModalAddTweet" className="icon grey" icon={faTimes} onClick={closeModal}/>
                </div>
                <div className="addContent">
                    <h3>Nouveau message</h3>
                    <Search />
                    <textarea></textarea>
                    <input type="submit" className="button buttonBlue" value="Envoyer"/>
                </div>
            </div>
        </div>
    );
}