import React, {Component} from 'react';
import Card from './card/Card.js'

class App extends Component {
  state = {
    card : [
      {id:1, name: 'robot1', img: 'images/robot1.png'},
      {id:2, name: 'robot2', img: 'images/robot2.png'},
      {id:3, name: 'robot3', img: 'images/robot3.jpeg'},
    ]
  }
  render() {
  return (
    <div className="App">
      <h1>Memory Game</h1>

      <div className="gameboard">
        <Card cardtypes={this.state.card}></Card>
      </div>
    </div>
  );
}
}
export default App;
