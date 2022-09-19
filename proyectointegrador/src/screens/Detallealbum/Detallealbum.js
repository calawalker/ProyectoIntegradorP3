import React, { Component } from 'react'
import './style.css'


class Detallealbum extends Component {

    constructor(props) {
        super(props)
        this.state = {
            album: [],
            id: props.match.params.id,
            loading: true
        }
    }

    componentDidMount() {

        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.state.id}`)
            .then(res => res.json())
            .then(data =>
                this.setState({
                    album: data,
                    loading: false
                }))

            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.album);
        return (
            <div>
                {
                    this.state.loading ?
                        <h1> Cargando... </h1> :
                        <>
                            <img src={this.state.album.cover} alt="Portada del album" />
                            <h1>Album: {this.state.album.title}</h1>
                            <h3>Artista: {this.state.album.artist.name}</h3>
                            <h3>Genero: {this.state.album.genres.data[0].name}</h3>
                            <h3>Fecha de publicación: {this.state.album.release_date}</h3>
                            <h3>Cantidad de tracks: {this.state.album.tracks.data.length}</h3>
                            
                        </>

                }

            </div>
        )
    }
}

export default Detallealbum



