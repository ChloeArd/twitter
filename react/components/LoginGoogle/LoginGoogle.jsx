import "./LoginGoogle.css";
import GoogleLogin from "react-google-login";

export const LoginGoogle = function ({name}) {

    const clientId = "583129085044-bk7cr6ns7s7q327e2qokssd091jvbuvo.apps.googleusercontent.com";

    const onSuccess = async (res) => {
        console.log("[Login Success]");
        sessionStorage.setItem("infoGoogle", JSON.stringify(res.profileObj));

        /*await fetch("/api/user/add", {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                "pseudo": res.profileObj.name,
                "name": res.profileObj.name,
                "picture_profile": res.profileObj.imageUrl,
                "email": res.profileObj.email,
                "google": res.profileObj.googleId,
                "date_created": new Date().getDate(),
                "roles": ["ROLE_USER"]
            })
        });*/

        window.location.replace("http://localhost:8000/home");
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