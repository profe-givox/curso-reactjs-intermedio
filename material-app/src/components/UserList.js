import React from "react";
import UserCard from './UserCard'

const UserList =  () => {
    const users = [
        {id:1,name:'Juan Perez', email: 'juan.perez@example.com', avatar:'https://via.placeholder.com/140'},
        {id:1,name:'Maria Lopez', email: 'maria.lopez@example.com', avatar:'https://via.placeholder.com/140'},
        {id:1,name:'Carlos Garcia', email: 'carlos.garcia@example.com', avatar:'https://via.placeholder.com/140'},
    ];

    return (
        <div style={{display: 'flex', fkexWrap: 'wrap'}}>
            {users.map(
                user => (
                    <UserCard key={user.id} user={user} />      
                )
            )}
        </div>
    );
};

export default UserList;