import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom';

class Album extends Component {

  constructor(props) {
    super(props)
    this.state = {
      verMas: 'hide',
      favorito: false
    }
  }

  componentDidMount(){
    let storage = localStorage.getItem('favoritos')
    let parsedStorage = JSON.parse(storage)
    if(parsedStorage !== null){
      let isFavorite = parsedStorage.includes(this.props.info.id) 
      if(isFavorite) {
        this.setState({
          favorito:true
        })
      }
    }
  }

  verMas() {
    if (this.state.verMas === 'show') {
      this.setState({
        verMas: 'hide'
      })
    } else {
      this.setState({
        verMas: 'show'
      })
    }
  }

  addFavorites(id){
    let favStorage = localStorage.getItem('favoritos')

    if(favStorage === null){
      let favArr = [id]
      let arrToString = JSON.stringify(favArr)
      localStorage.setItem('favoritos', arrToString)
    } else {
      
      let parsedArr = JSON.parse(favStorage)
      parsedArr.push(id)
      let arrToString = JSON.stringify(parsedArr)
      localStorage.setItem('favoritos', arrToString)
    }

    this.setState({
      favorito:true
    })

  }

  removeFavorites(id){

    let favStorage = localStorage.getItem('favoritos')
    let parsedStorage = JSON.parse(favStorage) 
    let filterStorage = parsedStorage.filter(elm => elm !== id) 

    let storageToString = JSON.stringify(filterStorage)

    localStorage.setItem('favoritos', storageToString)

    this.setState({
      favorito: false
    })
  }

  render() {
    return (
      <div className="album-card">

        <li><Link to={`/detallealbum/${this.props.info.id}`} > <img src={this.props.info.cover} alt="" />
          <h4>{this.props.info.title}</h4>
          <p className={this.state.verMas}>{this.props.info.artist.name}</p></Link></li>
          {
              this.state.favorito
              ?
                <button onClick={()=> this.removeFavorites(this.props.info.id)  }
                >Sacar de favoritos</button>
              :
                <button onClick={()=> this.addFavorites(this.props.info.id) }>Añadir a favoritos</button>
            }

        <button onClick={() => this.verMas()}>Ver más</button>
      </div>

    )
  }
}

export default Album