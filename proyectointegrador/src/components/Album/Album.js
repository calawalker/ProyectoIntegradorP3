import React, {Component} from 'react'
import './style.css'

class Album extends Component{ 
    render(){
        return (
          <div className="album-card">
                <img src={this.props.info.cover} alt="" />
                <h4>{this.props.info.title}</h4>
                <h5>{this.props.info.artist.name}</h5>
                
                  {/* <p className={this.state.verMas}>{this.props.info.tracklist}</p> */}
    
               {/*  <button onClick={()=>this.verMas()}>Ver más</button> */}
                <button onClick={()=> this.props.borrar(this.props.info.name)}>Borrar</button>
          </div>
      
        )
      }
}

export default Album