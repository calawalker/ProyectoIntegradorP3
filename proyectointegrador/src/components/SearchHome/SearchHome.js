import React, { Component } from 'react'
import "../SearchHome/style.css"

class SearchHome extends Component {
    constructor(props){
        super(props)
        this.state ={
            valorInput:''
        }
    }

    prevenirRefresh(event){
        event.preventDefault()
    }

    actualizarEstadoInput(event){
        this.setState({
            valorInput: event.target.value
        }, () => this.props.buscador(this.state.valorInput))
    }


  render() {
    return (
      <form onSubmit={(event)=> this.prevenirRefresh(event)}>
        <label>Search</label>
        <input type='text' onChange={(event)=> this.actualizarEstadoInput(event)} value={this.state.valorInput}/>
      </form>
    )
  }
}
export default SearchHome