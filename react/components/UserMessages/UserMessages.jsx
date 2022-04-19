import "./UserMessages.css";

export const UserMessages = function () {

    return(
     <div className="UserMessages flexRow">
         <div className="tweet-left">
             <div className="image-user align justify">User</div>
         </div>
         <div className="tweet-right">
             <div className="flexRow align">
                 <p>Name</p>
                 <p className="pseudo">@pseudo . le 00/00/0000 à 00h00</p>
             </div>
             <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis,
                 sapien dui mattis dui, non pulvinar lorem felis nec erat
             </p>
         </div>
     </div>
    );
}