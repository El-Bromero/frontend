import React from 'react';

import UserList from '../components/UsersList';

function Users () {

    const USERS = [{id: 'u1', name: 'Max Schartz', image: 'https://toppng.com/uploads/preview/stock-person-png-stock-photo-man-11563049686zqeb9zmqjd.png' , places: 3 }]

    return <UserList items={USERS} />;

};

export default Users;