// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.speed}`)
      return {speed: prevState.speed + 10}
    })
  }

  onApplyBrake = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.speed}`)
      return {speed: prevState.speed - 10}
    })
  }
  render() {
    const {speed} = this.state;
    <div className='container'>
      <h1 className="heading">SPEEDOMETER</h1>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
      />
      <h1 className="speed">
        Speed is <span className="speedNum">{speed}</span>mph
      </h1>
      <p className="description">Min speed is 0mph, Max speed is 200mph</p>
      <div className="btnContainer">
        <button className="button_1" onClick={this.onAccelerate}>
          Accelerate
        </button>
        <button className="button_2" onClick={this.onApplyBrake}>
          Apply Brake
        </button>
      </div>
    </div>
  }

export default Speedometer
