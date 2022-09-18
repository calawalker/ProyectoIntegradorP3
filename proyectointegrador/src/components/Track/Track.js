import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../Track/style.css"

class Track extends Component {

  constructor(props) {
    super(props)
    this.state = {
      verMas: 'hide',
      favorito: false
    }
  }

  componentDidMount() {
    let storage = localStorage.getItem('favoritosTracks')
    let parsedStorage = JSON.parse(storage)
    if (parsedStorage !== null) {
      let isFavorite = parsedStorage.includes(this.props.info.id)
      if (isFavorite) {
        this.setState({
          favorito: true
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

  addFavorites(id) {
    let favStorage = localStorage.getItem('favoritosTracks')

    if (favStorage === null) {
      let favArr = [id]
      let arrToString = JSON.stringify(favArr)
      localStorage.setItem('favoritosTracks', arrToString)
    } else {

      let parsedArr = JSON.parse(favStorage)
      parsedArr.push(id)
      let arrToString = JSON.stringify(parsedArr)
      localStorage.setItem('favoritosTracks', arrToString)
    }

    this.setState({
      favorito: true
    })

  }

  removeFavorites(id) {

    let favStorage = localStorage.getItem('favoritosTracks')
    let parsedStorage = JSON.parse(favStorage)
    let filterStorage = parsedStorage.filter(elm => elm !== id)

    let storageToString = JSON.stringify(filterStorage)

    localStorage.setItem('favoritosTracks', storageToString)

    this.setState({
      favorito: false
    })
  }


  render() {
    return (
      <div className="album-card">

        <li><Link to={`/detalletracks/${this.props.info.id}`} >  <img src={this.props.info.album.cover} alt="" />
          <h4>{this.props.info.title}</h4>
          <p className={this.state.verMas}>{this.props.info.album.title}</p> </Link></li>

        {
          this.props.isInFavs ?
            <button onClick={() => this.props.borrar(this.props.info.id)} >Borrar</button>
            :
            this.state.favorito
              ?
              <button onClick={() => this.removeFavorites(this.props.info.id)}
              >Sacar de favoritos</button>
              :
              <button onClick={() => this.addFavorites(this.props.info.id)}>Añadir a favoritos</button>
        }
        <button onClick={() => this.verMas()}>Ver más</button>
      </div>

    )
  }
}

export default Track