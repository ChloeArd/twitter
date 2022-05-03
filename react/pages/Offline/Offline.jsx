import "./Offline.css";

import {useEffect} from "react";

export const Offline = function () {

    const page = "Hors ligne";

    useEffect(() => {
        document.title = page;
    }, []);

    return (
        <main className="Home">
            <h1>Vous êtes hors ligne !</h1>
        </main>
    );
};
