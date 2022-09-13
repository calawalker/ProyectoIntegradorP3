
import React, { Component } from 'react'
import Album from '../../components/Album/Album';



class Vertodoslosalbumes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            albumes: [],
            backup: []
        }
    }

    componentDidMount() {
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums')
            .then(resp => resp.json())
            .then(data => this.setState({
                albumes: data.data,
                backup: data.data
            }))
            .catch(err => console.log(err))
    }

    componentDidUpdate() {
    }


    render() {
        return (

            <>
                <h2>ALBUMES</h2>
                

                <section className="card-container">
                    {
                        this.state.albumes.length > 0 ?
                            this.state.albumes.map((album, idx) =>
                                <Album key={album + idx} info={album} />) :
                            <h1>Cargando..</h1>
                    }
                </section>




            </>
        )
    }
}

export default Vertodoslosalbumes

