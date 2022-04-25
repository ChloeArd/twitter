import "./ListItem.css";

export const ListItem = function ({sessionGoogle}) {

    return(
        <div className="ListItem flexRow">
            <div className="pictureList justify">
                <img src="https://st.depositphotos.com/1657957/4311/v/600/depositphotos_43118371-stock-illustration-optical-illusion.jpg"/>
            </div>
            <div className="infoList flexColumn">
                <h3>Name List</h3>
                <div className="flexRow">
                    {sessionGoogle !== [] ? <img className="image-user-list" src={sessionGoogle.imageUrl}/>:
                        <img className="image-user-list" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png"/>
                    }
                    <p>{sessionGoogle.name}</p>
                    <p className="grey">@pseudo</p>
                </div>
            </div>
        </div>
    );
}