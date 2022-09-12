import React, { Component } from 'react'

class Detallepodcast extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            podcast: {}
        }
    }

    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/podcast/${this.state.id}`)
            .then(resp => resp.json())
            .then(data => this.setState({
                podcast: data
            }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <p>
                    hola manola soy podcast
                </p>
                {/* img src={this.state.album.cover} /> */}
            </div>
        )
    }
}

export default Detallepodcast