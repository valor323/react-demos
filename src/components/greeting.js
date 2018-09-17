import React from 'react';

function Greeting(props){
    console.log('props:', props)

    const style = {
        color: props.favoriteColor
    };

    return <h1 style={style}> I am the {props.name} and I come in peace!</h1>
}

export default Greeting;