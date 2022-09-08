import React, {Component} from 'react'
import Podcast from '../Podcast/Podcast';


class Podcasts extends Component {

    constructor(props){
        super(props)
        this.state={
            podcasts: [],
            backup: []
        }
    }

    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/podcasts')
        .then(resp => resp.json())
        .then(data => this.setState({
            podcasts: data.data,
            backup:data.data
        }))
        .catch(err => console.log(err)) 
    }
    
    componentDidUpdate(){
    }


    render(){
    return (

        <>
        <h2>PODCASTS</h2>
            <h3> Ver todos los podcasts</h3> {/* esto desp va a ser un boton  */}
     <section className="card-container">
            {
                this.state.podcasts.length > 0 ?
                    this.state.podcasts.map((podcast, idx) => 
                    <Podcast
                    key={podcast + idx} 
                    info={podcast} 
                    />):
                <h1>Cargando..</h1>
            }
      </section> 


        </>
    )
    }
}

export default Podcasts