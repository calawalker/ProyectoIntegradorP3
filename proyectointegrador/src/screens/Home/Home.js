import React, { Component } from 'react';
import Albumes from '../../components/Albumes/Albumes'
import Podcasts from '../../components/Tracks/Tracks'
import SearchHome from '../../components/SearchHome/SearchHome';




class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultados: [],
            sinResultados: false
        }
    }

    buscador(searchWord) {
        if (searchWord !== '') {
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${searchWord}`)
                .then(resp => resp.json())
                .then(data => {
                    if (data.data.length > 0) {
                        this.setState({
                            resultados: data.data,
                            sinResultados: false
                            

                        })
                    }
                })
                .catch(err => {
                    this.setState({
                        sinResultados: true
                    })
                })

        } else {

            this.setState({
                resultados: []
            })
        }
    }

    

    render() {
        return (
            <main>
                <SearchHome buscador = {(searchWord) => this.buscador(searchWord)} />
                {
                    this.state.sinResultados ?
                        <h2>No se encontraron resultados</h2>
                        :
                        this.state.resultados.length > 0 ?
                            this.state.resultados.map((elm, idx) => <h2 key={elm.title + idx}> {elm.title}</h2>)
                            : ''
                            
                }
                <Albumes />
                <Podcasts />

                

            </main>
        );
    }
}


export default Home