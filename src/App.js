import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props); 
    
    this.state = {
      backgroundColor: 0xFFC0CB, 
    };

    // Only changeColor needs to be bound (not randomColor), because that's what is used in the in render()
    this.changeColor = this.changeColor.bind(this);
  }


  randomColor() {
    return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  }

  changeColor(event) {
    // this.setState({backgroundColor: this.randomColor()});
    event.target.style.backgroundColor = this.randomColor();
  }

  render() {     


    return (
        <div className="Container">
          {/* <div className="Square" onMouseEnter={this.changeColor} style={{backgroundColor: this.state.backgroundColor}}></div> */}
          <div className="Square" onMouseOver={this.changeColor}></div>
          <div className="Square" onMouseOver={this.changeColor}></div>
          <div className="Square" onMouseOver={this.changeColor}></div>
          <div className="Square" onMouseOver={this.changeColor}></div>
          <div className="Square" onMouseOver={this.changeColor}></div>
          <div className="Square" onMouseOver={this.changeColor}></div>
          <div className="Square" onMouseOver={this.changeColor}></div>
          <div className="Square" onMouseOver={this.changeColor}></div>
          <div className="Square" onMouseOver={this.changeColor}></div>
        </div>
    );
  }
}



export default App;
