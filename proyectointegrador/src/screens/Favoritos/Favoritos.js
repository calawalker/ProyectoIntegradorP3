import React, { Component } from 'react'
import Album from '../../components/Album/Album'

class Favoritos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favoritos: []
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
        favoritos: data
      }))
        .catch(err => console.log(err))

    }
  }


  render() {
    return (
      <div>
      
        {
          this.state.favoritos.length > 0 ?
            this.state.favoritos.map((album, idx) => 
            <Album key={album + idx} info={album} />
            )
            : 'Cargando..'
        }
      </div>
    )
  }
}

export default Favoritos