import React from 'react';

function Navbar(){

    return (
        <nav>
            <ul className="main-nav">
                <li><img src="./img/logo.png" alt=""/></li>
                <li>Home</li>
                <li>Favoritos</li>
                <li>Ver todas</li>
            </ul>
            <ul className="user">
                <li>Nombre usuario <img src="" alt=""/></li>
            </ul>
        </nav>
    )
}

export default Navbar