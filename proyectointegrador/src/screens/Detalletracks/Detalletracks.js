import React, { Component } from 'react'
import './style.css'

class Detalletracks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            track: {},
            loading: true
            
        }
    }

    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.state.id}`)
            .then(resp => resp.json())
            .then(data => this.setState({
                track: data,
                loading: false
            }))
            .catch(err => console.log(err))
            
    }


    render() {
        return (
            <div>
                {
                    this.state.loading ?
                        <h1> Cargando... </h1> :
                        <>
                            <h2>Titulo del track: {this.state.track.title}</h2>
                            <img src={this.state.track.album.cover} alt="Portdada del Album de este track" />
                            <h3>Artista: {this.state.track.artist.name}</h3>
                            <h3>Album: {this.state.track.album.title}</h3>

                        </>

                }

            </div>
        )
    }
}

export default Detalletracks

