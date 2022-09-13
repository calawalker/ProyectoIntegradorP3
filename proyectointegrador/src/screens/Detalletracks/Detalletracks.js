import React, { Component } from 'react'

class Detalletracks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            podcast: {}
        }
    }

    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.state.id}`)
            .then(resp => resp.json())
            .then(data => this.setState({
                podcast: data
            }))
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

export default Detalletracks