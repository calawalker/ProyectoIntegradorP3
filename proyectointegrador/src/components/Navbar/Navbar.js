import React from 'react';
import './style.css'

function Navbar(props){

    return (
        <nav>
            <ul className="main-nav">
                {props.opciones.map((opcion, idx) => <li key={opcion + idx}>{opcion}</li>)}
            </ul>
            <ul className="user">
            <li>{props.nombre}
                <img src= "./img/logo.png" alt="logo" />
            </li>
        </ul>
        </nav>
    )
}

export default Navbar