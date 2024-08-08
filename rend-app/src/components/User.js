import React from "react";

const User = React.memo(({user}) => {

        return (
           <div className="user">
            <p>
                {user.name}
            </p> 
           </div>
        );
    }

);

export default User;