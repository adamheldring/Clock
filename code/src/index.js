import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {
  state = {
    date: new Date(),
    clockRunning: false,
    buttonText: "Loading..."
  }

  componentDidMount = () => {
    this.startClock()
  }
  componentWillUnmount = () => {
    this.stopClock()
  }
  tick = () => {
    this.setState({
      date: new Date()
    })
  }
  startClock = () => {
    this.timerID = setInterval (
      () => this.tick(),
      1000
    )
    this.setState({
      clockRunning: true,
      buttonText: "STOP"
    })
  }
  stopClock = () => {
    clearInterval(this.timerID)
    this.setState({
      clockRunning: false,
      buttonText: "START"
    })
  }
  clickStartStop = () => {
    if (this.state.clockRunning) {
      this.stopClock()
    } else {
      this.startClock()
    }
  }

  render() {
    return (
      <div className="masterContainer">
        <img src="./images/thymeLeft.png"></img>
        <div className="clockContainer">
          <h1>THYME</h1>
          <h2>{this.state.date.toLocaleTimeString()}</h2>
          <button onClick={this.clickStartStop}>{this.state.buttonText}</button>
        </div>
        <img src="./images/thymeRight.png"></img>
      </div>
    )
  }

}

ReactDOM.render(<Clock />,
document.getElementById("root"))
