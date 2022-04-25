import "./LogoutGoogle.css";
import {GoogleLogout} from "react-google-login";

export const LogoutGoogle = function () {

    const clientId = "583129085044-bk7cr6ns7s7q327e2qokssd091jvbuvo.apps.googleusercontent.com";

    const onSuccess = () => {
        alert("Logout made successfully");
        window.location.replace("http://localhost:8000/home");
    }

    return(
        <>
            <GoogleLogout
                clientId={clientId}
                buttonText="S'inscrire avec Google"
                onLogoutSuccess={onSuccess}
                className="logoutGoogle"
            ></GoogleLogout>

        </>
    );
}