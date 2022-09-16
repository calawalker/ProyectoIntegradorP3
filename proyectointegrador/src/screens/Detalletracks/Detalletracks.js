import React, { Component } from 'react'

class Detalletracks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            track: {}
            
        }
    }

    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.state.id}`)
            .then(resp => resp.json())
            .then(data => this.setState({
                track: data,
                
            
            }))
            .catch(err => console.log(err))
            
    }


    render() {
        console.log(this.state.track);

        return (
            <div>
               <h1>{this.state.track.title}</h1>
               {/* <img src={this.state.track.album.cover} alt="" /> */}
               <h3>Duration: {this.state.track.duration}</h3>
               {/* <h3>Artist: {this.state.track.artist.name}</h3> */} 
               {/* <h3>Album: {this.state.track.album.title}</h3> */}
               
             
            </div>
        )
    }
}

export default Detalletracks