import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';


const user = {
    firstName: 'Beef',
    lastName: 'Burrito',
};


function fullName(user){
    return `${user.firstName} ${user.lastName}`
}

const greeting = <h1>Hello {fullName(user)} Yum! :)</h1>

ReactDOM.render(
    greeting,
    document.getElementById('root')
);
