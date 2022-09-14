import React, {Component} from 'react'

import Track from '../../components/Track/Track' 


class Vertodoslostracks extends Component {

    constructor(props){
        super(props)
        this.state={
            tracks: [],
            backup: []
        }
    }

    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=0&limit=5')
        .then(resp => resp.json())
        .then(data => this.setState({
            tracks: data.data,
            backup:data.data
        }))
        .catch(err => console.log(err)) 
    }

    masTracks (){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks')
            .then(resp => resp.json())
            .then(data => this.setState({
                tracks: data.data,
                backup: data.data
            }))
            .catch(err => console.log(err))
    }
    
    componentDidUpdate(){
    }


    render(){
    return (

        <>
        <h2>TRACKS</h2>
                        
      
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

            <div>  
                    {this.state.tracks.length <= 5 ? 
                    <button  onClick = {()=>this.masTracks()}>
                       Cargar más
                    </button> 
                    : <h2> No hay mas tracks</h2>
                    
                    }
                </div> 


        </>
    )
    }
}
export default Vertodoslostracks