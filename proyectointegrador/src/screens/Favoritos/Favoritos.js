import React, { Component } from 'react'
import FavoritosAlbumes from '../../components/FavoritosAlbumes/FavoritosAlbumes'
import FavoritosTracks from '../../components/FavoritosTracks/FavoritosTracks'
import "../Favoritos/style.css"



class Favoritos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  render() {
    return (
      <>
        <section >
          <h2>ALBUMES FAVORITOS</h2>
          <FavoritosAlbumes  />
          <h2>TRACKS FAVORITOS</h2>
          <FavoritosTracks className="card-container" />
        </section>


      </>
    )
  }
}

export default Favoritos
