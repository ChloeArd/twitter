import "./AddList.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export const AddList = function () {

    function closeModal() {
        document.getElementById("AddList").style.display = "none";
    }

    return(
        <div id="AddList" className="addList">
            <div className="modal">
                <div className="flexRow align">
                    <FontAwesomeIcon id="closeModalAddTweet" className="icon grey" icon={faTimes} onClick={closeModal}/>
                </div>
                <div className="addContent">
                    <h3>Créer une liste</h3>
                </div>
                <div className="flexColumn">
                    <label>Image</label>
                    <input type="file"/>
                    <label>Nom</label>
                    <input type="text"/>
                    <label>Description</label>
                    <textarea></textarea>
                    <div className="flexRow align">
                        <input type="checkbox" name="privateList"/>
                        <label htmlFor="privateList">Rendre privée</label>
                    </div>
                    <p>Lorsque vous rendez une liste privée, vous seul pouvez la voir.</p>
                    <button type="submit" className="button buttonBlue">Enregistrer</button>
                </div>
            </div>
        </div>
    );
}