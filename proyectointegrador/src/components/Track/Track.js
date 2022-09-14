import React, {Component} from 'react'

import { Link } from 'react-router-dom';

class Track extends Component{ 

  constructor(props){
    super(props)
    this.state ={
      verMas: 'hide'
    }
  }

  verMas(){
    if(this.state.verMas === 'show'){
      this.setState({
        verMas:'hide'
      })
    } else {
      this.setState({
        verMas:'show'
      })
    }
  }



    render(){
        return (
          <div className="album-card">
               
                <li><Link to={`/detalletracks/${this.props.info.id}`} >  <img src={this.props.info.album.cover} alt="" />
                <h4>{this.props.info.title}</h4>
                <p className={this.state.verMas}>{this.props.info.album.title}</p> </Link></li>
    
               <button onClick={()=>this.verMas()}>Ver más</button>  
          </div>
      
        )
      }
}

export default Track