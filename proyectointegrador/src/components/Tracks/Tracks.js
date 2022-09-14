import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Track from '../Track/Track';


class Tracks extends Component {

    constructor(props){
        super(props)
        this.state={
            tracks: [],
            backup: []
        }
    }

    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=0&limit=6')
        .then(resp => resp.json())
        .then(data => this.setState({
            tracks: data.data,
            backup:data.data
        }))
        .catch(err => console.log(err)) 
    }
    
    componentDidUpdate(){
    }


    render(){
    return (

        <>
        <h2>TRACKS</h2>
        <h3><Link to="/todoslostracks">Todos los tracks</Link></h3>
     <section className="card-container">
            {
                this.state.tracks.length > 0 ?
                    this.state.tracks.map((track, idx) => 
                    <Track
                    key={track + idx} 
                    info={track} 
                    />):
                <h1>Cargando..</h1>
            }
      </section> 


        </>
    )
    }
}

export default Tracks