import "./ListItem.css";

export const ListItem = function ({user}) {

    return(
        <div className="ListItem flexRow">
            <div className="pictureList justify">
                <img src="https://st.depositphotos.com/1657957/4311/v/600/depositphotos_43118371-stock-illustration-optical-illusion.jpg"/>
            </div>
            <div className="infoList flexColumn">
                <h3>Name List</h3>
                <div className="flexRow">
                    {user.pictureProfile !== null ? <img className="image-user-list" src={user.pictureProfile}/>:
                        <img className="image-user-list" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png"/>
                    }
                    <p>{user.name}</p>
                    <p className="grey">@{user.pseudo}</p>
                </div>
            </div>
        </div>
    );
}