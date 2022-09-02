import React, {Component} from 'react'


class Albumes extends Component {

    constructor(props){
        super(props)
        this.state={
            albumes: [],
            backup: []
        }
    }


    render(){
    return (

        <>
        <h2>Albumes más escuchados</h2>
        <h2>Artistas más populares</h2>
        </>
    )
    }
}

export default Albumes