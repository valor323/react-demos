import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Greeting from './greeting';

const App = () => (
    <div>
        <div className="app">
        <Greeting name ='Martian ManHunter' favoriteColor = 'green'/>
        <Greeting name= 'EarthX Flash' favoriteColor = 'red'/>
            <img src={logo} className="logo rotate"/>
            <h1>Welcome to React</h1>
        </div>
    </div>
);

export default App;
