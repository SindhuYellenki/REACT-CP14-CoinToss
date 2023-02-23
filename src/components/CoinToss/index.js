import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {result: 'heads', count: 0, Heads: 0, Tails: 0}

  tossTheCoin = () => {
    const {result, count, Heads, Tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState({result: 'heads'})
      this.setState(p => ({count: p.count + 1, Heads: p.Heads + 1}))
    } else {
      this.setState({result: 'tails'})
      this.setState(p => ({count: p.count + 1, Tails: p.Tails + 1}))
    }
  }

  getImage = () => {
    const {result} = this.state
    console.log(result)
    if (result === 'heads') {
      return 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    }
    return 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
  }

  render() {
    const {count, Heads, Tails} = this.state
    const ImageUrl = this.getImage()
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={ImageUrl} alt="toss result" className="image" />
          <button className="button" onClick={this.tossTheCoin} type="button">
            Toss Coin
          </button>
          <ul className="countContainer">
            <li className="list">Total: {count}</li>
            <li className="list">Heads: {Heads}</li>
            <li className="list">Tails: {Tails}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CoinToss
