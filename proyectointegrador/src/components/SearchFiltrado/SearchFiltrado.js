import React, { Component } from 'react'

//hijo de ver todos...

class SearchFiltrado extends Component {
    constructor(props){  //creamos el contexto para el estado inicial y recibir las props
        super(props)
        this.state={
            valor: ''
        }
    }

//si no evito el refresh se me actualiza el sitio cada vez que ponemos submit y perdemos el estado 

    evitarRefresh(event){
        event.preventDefault()
    }

    guardarCambios(event){
        this.setState({
            valor: event.target.value //actualiza el estado 
        }, () => this.props.filtro(this.state.valor)) 
        //este es un setState extendido que significa que espera a que termine esa actualizacion para ejecutarse
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

// el evento onChange ejecuta la funcion guardarCambiosy asi obtiene la información igresada por el usuario 
// una vez que termina el value lo toma del estado

export default SearchFiltrado