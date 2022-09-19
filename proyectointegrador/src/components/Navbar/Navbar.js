import React, { Component } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom'
import Favoritos from "../../screens/Favoritos/Favoritos"
import Home from "../../screens/Home/Home"
import Vertodoslosalbumes from "../../screens/Vertodoslosalbumes/Vertodoslosalbumes"
import Vertodoslostracks from "../../screens/Vertodoslostracks/Vertodoslostracks"
import Notfound from "../../screens/Notfound/Notfound"
import Detallealbum from "../../screens/Detallealbum/Detallealbum"
import Detalletracks from "../../screens/Detalletracks/Detalletracks"

function Navbar() {  
            return (
                <>
                    <nav>
                        <ul className="main-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/favoritos">Favoritos</Link></li>
                            <li><Link to="/todoslosalbumes">Todos los albumes</Link></li>
                            <li><Link to="/todoslostracks">Todos los tracks</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path='/' exact={true} component={Home} />
                        <Route path='/favoritos' component={Favoritos} />
                        <Route path='/todoslosalbumes' component={Vertodoslosalbumes} />
                        <Route path='/todoslostracks' component={Vertodoslostracks} />
                        <Route path='/detallealbum/:id' component={Detallealbum} ></Route> 
                        <Route path='/detalletracks/:id' component={Detalletracks} ></Route>
                        <Route path='' component={Notfound} />
                    </Switch>
                </>
            )
  }

export default Navbar