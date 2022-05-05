import "./LoginGoogle.css";
import GoogleLogin from "react-google-login";
import {useEffect, useState} from "react";

export const LoginGoogle = function ({name}) {

    const clientId = "583129085044-bk7cr6ns7s7q327e2qokssd091jvbuvo.apps.googleusercontent.com";

    const [user, setUser] = useState([]);

    const onSuccess = async (res) => {
        console.log("[Login Success]");
        sessionStorage.setItem("infoGoogle", JSON.stringify(res.profileObj));

        window.location.replace("http://localhost:8000/home");
    }

    const [sessionGoogle, setSessionGoogle] = useState(JSON.parse(sessionStorage.getItem("infoGoogle")));

    if (sessionGoogle !== null) {
        useEffect(() => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "/api/user/google");
            xhr.responseType = "json";
            xhr.onload = () => xhr.status === 200 && setUser(xhr.response)
            const body = {
                name: sessionGoogle.name,
                pseudo: sessionGoogle.name,
                email: sessionGoogle.email,
                image: sessionGoogle.imageUrl,
                google: sessionGoogle.googleId,
            }
            xhr.send(JSON.stringify(body));
        }, [])
    }


    const onFailure = (res) => {
        console.log("[Login failed] res:", res);
    }

    return(
        <>
            <GoogleLogin
                clientId={clientId}
                buttonText={name}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy="single_host_origin"
                isSignedIn={true}
                className="loginGoogle"
            />
        </>
    );
}