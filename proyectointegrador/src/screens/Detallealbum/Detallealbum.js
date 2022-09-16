import React, { Component } from 'react'


class Detallealbum extends Component {

    constructor(props) {
        super(props)
        this.state = {
            album: {},
            id: props.match.params.id
        }
    }

    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.state.id}`)
            .then(res => res.json())
            .then(data =>
                this.setState(
                    { album: data }
                ))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>{this.state.album.title}</h1>
                <img src={this.state.album.cover} alt="" />
                <h3>Duration: {this.state.album.duration}</h3>
                <h3>Fans: {this.state.album.fans}</h3>
                <h3>Release date: {this.state.album.release_date}</h3>
                

            </div>
        )
    }
}

export default Detallealbum
