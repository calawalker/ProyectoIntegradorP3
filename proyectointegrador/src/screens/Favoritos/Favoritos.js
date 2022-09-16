import React, { Component } from 'react'
import Album from '../../components/Album/Album'
import Track from '../../components/Track/Track'

class Favoritos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      albumesFavoritos: [],
      tracksFavoritos: [], 
      isFav: true,
      loading: true
    }
  }

  componentDidMount() {
    let storage = localStorage.getItem('favoritos')

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
        loading: false
      }))
        .catch(err => console.log(err))

    }

    if(storage !== null){
      let parsedStorage = JSON.parse(storage)
      Promise.all(
        parsedStorage.map(id => {
          return (
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/tracks/${id}`)
              .then(resp => resp.json())
              .then(data => data)
          )
        })
      ).then(data => this.setState({
        tracksFavoritos: data,
        loading: false
      }))
        .catch(err => console.log(err))
    }

    
  }

/*   borrar(id) {
    let albumesBorrados = this.state.albumesFavoritos.filter(album => album.id !== id);
    this.setState({
      albumesFavoritos: albumesBorrados,
    })
  } */


  render() {
    return (
      <>
      <section>

        {
          this.state.albumesFavoritos.length > 0 ?
            this.state.albumesFavoritos.map((album, idx) =>
              <Album key={album + idx} info={album} />
            )
            : 'Cargando..'

        }
        </section>

        <section> 
        {
          this.state.tracksFavoritos.length > 0 ?
            this.state.tracksFavoritos.map((track, idx) =>
              <Track key={track + idx} info={track} />
            )
            : 'Cargando..'

        }
        </section>
      </>
    )
  }
}

export default Favoritos
