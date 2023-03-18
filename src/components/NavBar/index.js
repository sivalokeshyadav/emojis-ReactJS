// Write your code here.
import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  renderScores = () => {
    const {currentScore, topScore, isGameEnd} = this.props
    if (isGameEnd) {
      return null
    }
    return (
      <div className="score-count-container">
        <p className="score">Score: {currentScore}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="nav-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji"
          />
          <h1 className="heading">Emoji Game</h1>
        </div>
        {this.renderScores()}
      </div>
    )
  }
}

export default NavBar
