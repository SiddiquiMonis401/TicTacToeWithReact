import React from 'react';
import '../App.css'

function Square(props) {
    return (
        <button className="Box" onClick={()=>props.onClick()}>
            {props.value}
        </button>
    );
}

export default Square;