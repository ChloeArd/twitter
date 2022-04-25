import "./LoginGoogle.css";
import GoogleLogin from "react-google-login";

export const LoginGoogle = function (key, value) {

    const clientId = "583129085044-bk7cr6ns7s7q327e2qokssd091jvbuvo.apps.googleusercontent.com";

    let IDGoogle = [];

    const onSuccess = (res) => {
        console.log("[Login Success] currentUser:", res.profileObj);
        console.log(res.profileObj);
        IDGoogle.push(JSON.stringify(res.profileObj));
        sessionStorage.setItem("emailGoogle", IDGoogle[0]['email']);
        sessionStorage.setItem("nameGoogle", IDGoogle[0]['name']);
        sessionStorage.setItem("imageGoogle", IDGoogle[0]['imageUrl']);
        sessionStorage.setItem("infoGoogle", JSON.stringify(res.profileObj));
        window.location.replace("http://localhost:8000/home");
    }

    const onFailure = (res) => {
        console.log("[Login failed] res:", res);
    }

    return(
        <>
            <GoogleLogin
                clientId={clientId}
                buttonText="Se connecter avec Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy="single_host_origin"
                isSignedIn={true}
                className="loginGoogle"
            />

            {IDGoogle.map(value => <p>{value.email}</p>)}
        </>
    );
}