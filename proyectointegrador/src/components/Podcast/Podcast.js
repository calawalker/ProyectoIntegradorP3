import React, {Component} from 'react'
import './style.css'

class Podcast extends Component{ 

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
                <img src={this.props.info.picture} alt="" />
                <h4>{this.props.info.title}</h4>
                
                
                <p className={this.state.verMas}>{this.props.info.description}</p> 
    
               <button onClick={()=>this.verMas()}>Ver más</button>  
          </div>
      
        )
      }
}

export default Podcast