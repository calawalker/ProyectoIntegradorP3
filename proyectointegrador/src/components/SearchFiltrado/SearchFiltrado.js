import React, { Component } from 'react'

class SearchFiltrado extends Component {
    constructor(props){  
        super(props)
        this.state={
            valor: ''
        }
    }

    evitarRefresh(event){
        event.preventDefault()
    }

    guardarCambios(event){
        this.setState({
            valor: event.target.value 
        }, () => this.props.filtro(this.state.valor)) 

    }

  render() {
    return (
      <form onSubmit={(e) => this.evitarRefresh(e)}>
          <label>Search</label>
        <input type={'text'} onChange={(e)=> this.guardarCambios(e)} value={this.state.valor} /> 
      </form>
    )
  }
}

export default SearchFiltrado