import React, { Component } from 'react'
import Album from '../Album/Album'
import "../FavoritosAlbumes/style.css"


class FavoritosAlbumes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      albumesFavoritos: [],
      
    }
  }

  componentDidMount() {
    let storage = localStorage.getItem('favoritosAlbumes')

    if (storage !== null) {
      let parsedStorage = JSON.parse(storage)

      Promise.all(
        parsedStorage.map(id => {
          return (
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${id}`)
              .then(resp => resp.json())
              .then(data => data)
          )
        })
      ).then(data => this.setState({
        albumesFavoritos: data,
        
      }))
        .catch(err => console.log(err))

    }
  }

borrar(id) {
    let favStorage = localStorage.getItem('favoritosAlbumes')
    let parsedStorage = JSON.parse(favStorage) 
    let filterStorage = parsedStorage.filter(elm => elm !== id) 

    let storageToString = JSON.stringify(filterStorage)

    localStorage.setItem('favoritosAlbumes', storageToString)

  let albumesBorrados = this.state.albumesFavoritos.filter(album => album.id !== id);
    this.setState({
      albumesFavoritos: albumesBorrados,
    })
  }


  render() {
    return (
      <>
      <section className="card-container">
        {
          this.state.albumesFavoritos.length > 0 ?
            this.state.albumesFavoritos.map((album, idx) =>
              <Album key={album + idx} info={album} isInFavs = {true} eliminar={(id) => this.borrar(id)} />
            )
            : 'No hay favoritos'

        }
        </section>

        
      </>
    )
  }
}

export default FavoritosAlbumes
