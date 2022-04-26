import "./Log.css";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {LoginGoogle} from "../../components/LoginGoogle/LoginGoogle";
import {LogoutGoogle} from "../../components/LogoutGoogle/LogoutGoogle";

export const Log = function () {

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
                    <LogoutGoogle />
                    <p>Ou</p>
                    <button id="buttonRegistration" className="button buttonBlue" onClick={displayFormRegistration}>S'inscrire avec un numéro de teléphone ou une adresse mail</button>
                    <div id="containerRegistration">
                        <input type="text" name="name" placeholder="Nom d'utilisateur" required/>
                        <input type="email" name="email" placeholder="Email"/>
                        <input type="tel" name="phone" placeholder="Téléphone"/>
                        <input type="text" name="region" placeholder="Région" required/>
                        <label htmlFor="date">Date de naissance</label>
                        <input type="date" name="date" required/>
                        <label htmlFor="psw">Mot de passe</label>
                        <input type="password" name="psw_reg" required/>
                        <label htmlFor="psw_repeat">Répéter le mot de passe</label>
                        <input type="password" name="psw_repeat" required></input>
                        <input type="submit" value="S'inscrire"/>
                    </div>

                </div>
                <div id="inscription">
                    <h2>Connecte-toi.</h2>
                    <LoginGoogle />
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