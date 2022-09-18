
import React, { Component } from 'react'
import Album from '../../components/Album/Album';
import SearchFiltrado from '../../components/SearchFiltrado/SearchFiltrado';



class Vertodoslosalbumes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            albumes: [],
            backup: [],
            limite: 15,
            index: 0, 
        }
    }



    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=${this.state.index}&limit=${this.state.limite}`)
            .then(resp => resp.json())
            .then(data => this.setState({
                albumes: data.data,
                backup: data.data
            }))
            .catch(err => console.log(err))
    }

    masAlbumes (){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=${this.state.index}&limit=${this.state.limite}`)
            .then(resp => resp.json())
            .then(data => this.setState({
                albumes: this.state.albumes.concat(data.data),
                backup: this.state.albumes.concat(data.data),
                index: this.state.index + this.state.limite 
            }))
            .catch(err => console.log(err))
    }


    buscarAlbumes(searchWord){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/albums?q=${searchWord}`)
        .then(resp => resp.json()) //paso la información a JSON 
        .then(data => this.setState({ //actualizo el estado con el array que tiene todos los objetos literales
            albumes: data.data
        }))
        .catch(err => console.log(err))
    }

    filtrarAlbumes(searchWord){
        let arrayFiltrado = 
        this.state.backup.filter (album => album.title.toLowerCase().includes(searchWord.toLowerCase()))

        this.setState({
            albumes: arrayFiltrado
        })
    }

    componentDidUpdate() {
    }



    render() {
        return (

            <>
                <h2>ALBUMES</h2>
                <SearchFiltrado filtro={(searchWord)=> this.filtrarAlbumes(searchWord)} /> 
                <section className="card-container">
                    {
                        this.state.albumes.length > 0 ?
                            this.state.albumes.map((album, idx) =>
                                <Album key={album + idx} info={album} />) :
                            <h1>Cargando..</h1>
                    }
                </section>

           
                <div>  
                    <button  onClick = {()=>this.masAlbumes()}>
                       Cargar más
                    </button>                    
                </div> 

                
                    
                
            </>
        )
    }
}

export default Vertodoslosalbumes

