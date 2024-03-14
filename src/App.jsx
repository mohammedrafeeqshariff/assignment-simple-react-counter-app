import React, {Component} from 'react'
import './App.css'

class App extends Component{
  state = {
    count : 0,
  }

  Icrement = () => {
    this.setState({count : this.state.count+1})
  }

  Decrement = () => {
    if(this.state.count > 0){
      this.setState({count: this.state.count-1})
    }
  }

  Reset = () => {
    this.setState({count : 0})
  }

 render(){
  return(
  
    <>
      <h1>Counter App</h1>
      <h2>count : {this.state.count}</h2>
      <button className='button' onClick={this.Icrement}>+</button>
      <button className='button' onClick={this.Decrement}>-</button>
      <button className='button' onClick={this.Reset}>Reset</button>
    </>
  )
 } 

}

export default App
