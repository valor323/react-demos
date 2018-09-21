import React from 'react';
import Avengers from './images/avengers.jpeg';


export default () => {
    const movie = {
        color: 'red',
        fontSize: '2.5em',
        fontWeight: 'bold'
    }
    const movieStuff = {
        color: 'blue',
        fontSize: '1.25em',
        fontStyle: 'italic'
    }
    return(
    <div>
        <h3 className="movie" style={movie}>Movies go here</h3>
        <h5 className="moviestuff" style={movieStuff}>Here they are</h5>
        <img src={Avengers}/>
    </div>
    )
}