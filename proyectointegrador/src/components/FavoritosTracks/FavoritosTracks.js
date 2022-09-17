import React, { Component } from 'react'
import Track from '../../components/Track/Track'


class FavoritosTracks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tracksFavoritos: [],
      loading: true
    }
  }

  componentDidMount() {
    let storage = localStorage.getItem('favoritosTracks')

    if (storage !== null) {
      let parsedStorage = JSON.parse(storage)

      Promise.all(
        parsedStorage.map(id => {
          return (
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${id}`)
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

borrar(id) {
    let favStorage = localStorage.getItem('favoritosTracks')
    let parsedStorage = JSON.parse(favStorage) 
    let filterStorage = parsedStorage.filter(elm => elm !== id) 

    let storageToString = JSON.stringify(filterStorage)

    localStorage.setItem('favoritosTracks', storageToString)

    this.setState({
      favorito: false})
    
  let tracksBorrados = this.state.tracksFavoritos.filter(track => track.id !== id);
    this.setState({
      tracksFavoritos: tracksBorrados,
    })
  }


  render() {
    return (
      <>
      <section>
        {
          this.state.tracksFavoritos.length > 0 ?
            this.state.tracksFavoritos.map((track, idx) =>
              <Track key={track + idx} info={track} isInFavs = {true} borrar={(id) => this.borrar(id)} />
            )
            : 'No hay favoritos'

        }
        </section>

        
      </>
    )
  }
}

export default FavoritosTracks
