import "./AddComment.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export const AddComment = function () {
    function closeModal() {
        document.getElementById("AddComment").style.display = "none";
    }

    return(
        <div id="AddComment" className="AddComment">
            <div className="modal">
                <FontAwesomeIcon id="closeModalAddTweet" className="icon grey" icon={faTimes} onClick={closeModal}/>
                <div className="flexRow addContent">
                    <div className="image-user align justify">User</div>
                    <div className="flexColumn pad-0-15">
                        <div className="flexRow align">
                            <p>Name</p>
                            <p className="pseudo">@pseudo . le 00/00/0000 à 00h00</p>
                        </div>
                        <p className="contentOfUser">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum a ligula eget blandit.
                            Ut non varius dolor, ac eleifend velit. Mauris mauris justo, sodales cursus nunc in, dignissim
                            ultrices purus.
                        </p>

                        <p className="grey">En réponse à <span className="blue">@pseudo</span></p>
                    </div>
                </div>

                <div className="lineHorizontal" />

                <div className="flexRow addContent">
                    <div className="image-user align justify">User</div>
                    <div className="flexColumn">
                        <textarea placeholder="Tweeter votre réponse."></textarea>
                        <input type="file"/>
                        <button id="submitTweet" className="buttonBlue button" type="submit">Répondre</button>
                    </div>
                </div>
            </div>
        </div>
    );
}