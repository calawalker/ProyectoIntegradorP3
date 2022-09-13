import React, { Component } from 'react';
import Search from '../Search/Search';
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

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            personajes: [],
            backup: [],
            prueba: ''
        }
    }

    componentDidMount() {
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums')
            .then(resp => resp.json())
            .then(data => this.setState({
                personajes: data.results,
                backup: data.results
            }))
            .catch(err => console.log(err))
    }

    componentDidUpdate() {
    }

    buscar(id) {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${id}`)
            .then(resp => resp.json())
            .then(data => this.setState({
                albums: data.results
            }))
            .catch(err => console.log(err))
    }

    /*     filtrarAlbumes(title){
            let arrayFiltrado = 
            this.state.backup.filter
            (album => album.title.toLowerCase().includes(title.toLowerCase()))
            this.setState({
                albums: arrayFiltrado
            })
        } */

    render() {
        return (
            <>
                <nav>
                    <ul className="main-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/favoritos">Favoritos</Link></li>
                        <li><Link to="/todoslosalbumes">Todos los albumes</Link></li>
                        <li><Link to="/todoslostracks">Todos los tracks</Link></li>
                    </ul>
                    <ul><Search filtrar={(nombre) => this.filtrarAlbumes(nombre)} /></ul>
                    <ul className="user">
                        <li>{this.props.nombre}
                            <img src="./img/logo.png" alt="logo" />
                        </li>
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
}


export default Navbar