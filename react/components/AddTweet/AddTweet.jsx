import "./AddTweet.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export const AddTweet = function () {

    function closeModal() {
        document.getElementById("AddTweet").style.display = "none";
    }

    return(
        <div id="AddTweet" className="AddTweet">
            <div className="modal">
                <FontAwesomeIcon id="closeModalAddTweet" className="icon grey" icon={faTimes} onClick={closeModal}/>
                <div className="flexRow addContent">
                    <div className="image-user align justify">User</div>
                    <div className="flexColumn">
                        <textarea placeholder="Quoi de neuf ?"></textarea>
                        <input type="file" multiple/>
                        <p className="grey">Qui peut répondre ?</p>
                        <select id="selectResponse">
                            <option value="Tout le monde">Tout le monde</option>
                            <option value="Personnes que vous suivez">Personnes que vous suivez</option>
                            <option value="Personnes que vous mentionnez">Personnes que vous mentionnez</option>
                            <option value="Personne">Personne</option>
                        </select>
                        <button id="submitTweet" className="buttonBlue button" type="submit">Tweeter</button>
                    </div>
                </div>
            </div>
        </div>
    );

}