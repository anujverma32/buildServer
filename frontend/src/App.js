import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
class App extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log('Success!')
  }

  render() {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}
export default App
