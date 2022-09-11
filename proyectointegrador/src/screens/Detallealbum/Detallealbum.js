import React, { Component } from 'react'

class Detallealbum extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            album: {}
        }
    }

    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.state.id}`)
            .then(resp => resp.json())
            .then(data => this.setState({
                album: data
            }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <p>
                    hola manola
                </p>
                {/* img src={this.state.album.cover} /> */}
            </div>
        )
    }
}

export default Detallealbum
