import React from 'react';

export const users = {
    name: "Matheus"
};


const UserContext = React.createContext(users.name);
export default UserContext;