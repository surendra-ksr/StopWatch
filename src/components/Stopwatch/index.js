// Write your code here
import {Component} from 'react'
import './index.css'

const initialState = {
  elapsedTimeInMinutes: 0,
  elapsedTimeInSeconds: 0,
  isStarted: false,
}

class Stopwatch extends Component {
  state = initialState

  clearTimerInterval = () => clearInterval(this.intervalId)

  countTime = () => {
    this.setState(prevState => ({
      elapsedTimeInSeconds: prevState.elapsedTimeInSeconds + 1,
    }))
  }

  onStart = () => {
    const {isStarted} = this.state
    if (!isStarted) {
      this.intervalId = setInterval(this.countTime, 1000)
      this.setState({isStarted: true})
    }
  }

  onStop = () => {
    this.clearTimerInterval()
    this.setState({isStarted: false})
  }

  onReset = () => {
    this.clearTimerInterval()
    this.setState(initialState)
  }

  getTimeElapsed = () => {
    const {elapsedTimeInSeconds} = this.state
    const seconds = elapsedTimeInSeconds % 60
    const minutes = Math.floor(elapsedTimeInSeconds / 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    return (
      <div className="mainDiv">
        <h1 className="mainH1">Stopwatch</h1>
        <div className="innerDiv">
          <div className="timerHeadDiv">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timerHead">Timer</p>
          </div>
          <h1>{this.getTimeElapsed()}</h1>
          <div className="buttonsDiv">
            <button
              className="buttons btn1"
              onClick={this.onStart}
              type="button"
            >
              Start
            </button>
            <button
              className="buttons btn2"
              onClick={this.onStop}
              type="button"
            >
              Stop
            </button>
            <button
              className="buttons btn3"
              onClick={this.onReset}
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
