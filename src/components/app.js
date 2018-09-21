import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Music from './music';
import Books from './books';
import Movies from './movie';

const App = () => (
    <div>
        <div className="app">
            <Music/>
            <Books/>
            <Movies/>
        </div>
    </div>
);

export default App;
