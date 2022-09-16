import React, {Component} from 'react'

import Track from '../../components/Track/Track' 
import SearchFiltrado from '../../components/SearchFiltrado/SearchFiltrado';


class Vertodoslostracks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tracks: [],
            backup: [],
            limite: 15,
            index: 0, 
        }
    }



    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=${this.state.index}&limit=${this.state.limite}`)
            .then(resp => resp.json())
            .then(data => this.setState({
                tracks: data.data,
                backup: data.data
            }))
            .catch(err => console.log(err))
    }

    masTracks (){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=${this.state.index}&limit=${this.state.limite}`)
            .then(resp => resp.json())
            .then(data => this.setState({
                tracks: this.state.tracks.concat(data.data),
                backup: this.state.tracks.concat(data.data),
                index: this.state.index + this.state.limite 
            }))
            .catch(err => console.log(err))
    }

    buscarTracks(searchWord){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/tracks?q=${searchWord}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            tracks: data.data
        }))
        .catch(err => console.log(err))
    }

    filtrarTracks(searchWord){
        let arrayFiltrado = 
        this.state.backup.filter (track => track.title.toLowerCase().includes(searchWord.toLowerCase()))

        this.setState({
            tracks: arrayFiltrado
        })
    }

    componentDidUpdate() {
    }



    render() {
        return (

            <>
                <h2>TRACKS</h2>
                <SearchFiltrado filtro={(searchWord)=> this.filtrarTracks(searchWord)} />
                <section className="card-container">
                    {
                        this.state.tracks.length > 0 ?
                            this.state.tracks.map((track, idx) =>
                                <Track key={track + idx} info={track} />) :
                            <h1>Cargando..</h1>
                    }
                </section>

           
                <div>  
                    <button  onClick = {()=>this.masTracks()}>
                       Cargar más
                    </button>                    
                </div> 

                
                    
                
            </>
        )
    }
}
export default Vertodoslostracks