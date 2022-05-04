import "./Log.css";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {LoginGoogle} from "../../components/LoginGoogle/LoginGoogle";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

export const Log = function () {

    const {register, handleSubmit} = useForm();
    const [user, setUser] = useState([]);


    function onSubmit(formData) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/user/add");
        xhr.responseType = "json";
        xhr.onload = () => xhr.status === 200 && setUser(xhr.response)
        const body = {
            name: formData.name,
            pseudo: formData.name,
            email: formData.email,
            phone: formData.phone,
            region: formData.region,
            birthday: formData.birthday,
            password: formData.password,
            repeat_password: formData.passwordR,
        }
        xhr.send(JSON.stringify(body));

        window.location.href = "http://localhost:8000?success=0"
    }

    let a = 0;
    function displayFormRegistration () {
        if (a === 0) {
            document.getElementById("containerRegistration").style.display = "flex";
            a++;
        }
        else  {
            document.getElementById("containerRegistration").style.display = "none";
            a = 0;
        }
    }

    let b = 0;
    function displayFormInscription() {
        if (b === 0) {
            document.getElementById("containerInscription").style.display = "flex";
            b++;
        }
        else  {
            document.getElementById("containerInscription").style.display = "none";
            b = 0;
        }
    }

    return(
        <div className="Log">
            <h1><FontAwesomeIcon id="logoTwitter2" icon={faTwitter}/>Ça se passe maintenant </h1>
            <div id="containerRegIns" className="flexRow">
                <div id="registration">
                    <h2>Rejoins Twitter dès aujourd'hui.</h2>
                    <LoginGoogle name={"S'inscrire avec Google"} />
                    <p>Ou</p>
                    <button id="buttonRegistration" className="button buttonBlue" onClick={displayFormRegistration}>S'inscrire avec un numéro de teléphone ou une adresse mail</button>
                    <form onSubmit={handleSubmit(onSubmit)} id="containerRegistration">
                        <input type="text" name="name" placeholder="Nom d'utilisateur" {...register("name")} required/>
                        <input type="email" name="email" placeholder="Email" {...register("email")} required/>
                        <input type="tel" name="phone" placeholder="Téléphone" {...register("phone")} required/>
                        <input type="text" name="region" placeholder="Région" {...register("region")} required/>
                        <label htmlFor="birthday">Date de naissance</label>
                        <input type="date" name="birthday" {...register("birthday")} required/>
                        <label htmlFor="psw">Mot de passe</label>
                        <input type="password" name="psw_reg" {...register("password")} required/>
                        <label htmlFor="psw_repeat">Répéter le mot de passe</label>
                        <input type="password" name="psw_repeat" {...register("passwordR")} required></input>
                        <input type="submit" value="S'inscrire" />
                    </form>

                </div>
                <div id="inscription">
                    <h2>Connecte-toi.</h2>
                    <LoginGoogle name="Se connecter avec Google" />
                    <p>Ou</p>
                    <button id="buttonInscription" className="button buttonBlue" onClick={displayFormInscription}>Se connecter avec un numéro de teléphone ou une adresse mail</button>
                    <div id="containerInscription">
                        <input type="email" name="email_conn" placeholder="Email"/>
                        <input type="tel" name="phone" placeholder="Téléphone"/>
                        <label htmlFor="psw_conn">Mot de passe</label>
                        <input type="password" name="psw_conn" required/>
                        <input type="submit" value="Se connecter"/>
                    </div>
                </div>
            </div>
        </div>
    );
}