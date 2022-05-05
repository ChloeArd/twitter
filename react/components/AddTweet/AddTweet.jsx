import "./AddTweet.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {useForm} from "react-hook-form";
import {useState} from "react";

export const AddTweet = function () {

    const {register, handleSubmit} = useForm();
    const [tweet, setTweet] = useState([]);


    function closeModal() {
        document.getElementById("AddTweet").style.display = "none";
    }


    function onSubmit(formData) {
        console.log(formData);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/tweet/add");
        xhr.responseType = "json";
        xhr.onload = () => xhr.status === 200 && setTweet(xhr.response)
        const body = {
            tweet: formData.tweet,
            image: formData.image[0].name,
            view: formData.view,
            user_id: 17,
        }
        xhr.send(JSON.stringify(body));

        window.location.href = "http://localhost:8000/home?success=0"
    }

    return(
        <div id="AddTweet" className="AddTweet">
            <div className="modal">
                <FontAwesomeIcon id="closeModalAddTweet" className="icon grey" icon={faTimes} onClick={closeModal}/>
                <div className="flexRow addContent">
                    <div className="image-user align justify">User</div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flexColumn">
                        <textarea placeholder="Quoi de neuf ?" {...register("tweet")}></textarea>
                        <input type="file" {...register("image")}/>
                        <p className="grey">Qui peut répondre ?</p>
                        <select id="selectResponse" {...register("view")} required>
                            <option value="Tout le monde">Tout le monde</option>
                            <option value="Personnes que vous suivez">Personnes que vous suivez</option>
                            <option value="Personnes que vous mentionnez">Personnes que vous mentionnez</option>
                            <option value="Personne">Personne</option>
                        </select>
                        <input id="submitTweet" className="buttonBlue button" type="submit" value="Tweeter" />
                    </form>
                </div>
            </div>
        </div>
    );
}