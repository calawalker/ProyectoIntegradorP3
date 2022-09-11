import React, { Component } from 'react';
import Search from '../Search/Search';
import './style.css'


class Navbar extends Component{ 

    constructor(props){
        super(props)
        this.state={
            personajes: [],
            backup:[],
            prueba:''
        }
    }
    
    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums')
        .then(resp => resp.json())
        .then(data => this.setState({
            personajes: data.results,
            backup:data.results
        }))
        .catch(err => console.log(err)) 
    }

    componentDidUpdate(){
    }

    buscar(id){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${id}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            albums: data.results
        }))
        .catch(err => console.log(err))
    }

    filtrarAlbumes(title){
        let arrayFiltrado = 
        this.state.backup.filter
        (album => album.title.toLowerCase().includes(title.toLowerCase()))
        this.setState({
            albums: arrayFiltrado
        })
    }

    render() {
        return (
            <>
            
            <nav>
            <ul className="main-nav">
                {this.props.opciones.map((opcion, idx) => <li key={opcion + idx}>{opcion}</li>)}
            </ul>
            <ul><Search filtrar={(nombre)=> this.filtrarAlbumes(nombre)} /></ul>
            <ul className="user">
            <li>{this.props.nombre}
                <img src= "./img/logo.png" alt="logo" />
            </li>
        </ul>
        
        </nav>
            </>
        )
      }
}


export default Navbar