import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {
  state = {
    date: new Date(),
    clockRunning: false,
    buttonText: "Loading...",
    timeOfDayIcon: "sun"
  }
  componentDidMount = () => {
    this.startClock()
  }
  componentWillUnmount = () => {
    this.stopClock()
  }
  startClock = () => {
    this.timerID = setInterval(
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
  tick = () => {
    this.setState({
      date: new Date()
    })
    if (this.state.date.getHours() >= 8 && this.state.date.getHours() < 20) {
      this.setState({
        timeOfDayIcon: "sun"
      })
    } else {
      this.setState({
        timeOfDayIcon: "moon"
      })
    }
  }

  render() {
    return (
      <div className="masterContainer">
        <img src="./images/thymeLeft.png" className="twigs" alt="thyme twig" />
        <div className="clockContainer">
          <h1>THYME</h1>
          <h2>{this.state.date.toLocaleTimeString()}</h2>
          <i className={`fas fa-${this.state.timeOfDayIcon}`} />
          <button onClick={this.clickStartStop}>{this.state.buttonText}</button>
        </div>
        <img src="./images/thymeRight.png" className="twigs" alt="thyme twig" />
      </div>
    )
  }

}

ReactDOM.render(<Clock />, document.getElementById("root"))
