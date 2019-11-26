import React from 'react';
import './Square.css'

class Square extends React.Component {
    constructor(props) {
        super(props); 
        
        this.state = {
          backgroundColor: "pink", 
        };
    
        // Only changeColor needs to be bound (not randomColor), because that's what is used in the in render()
        this.changeColor = this.changeColor.bind(this);
      }
    
      randomColor() {
        return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
      }
    
      changeColor(event) {
        this.setState({backgroundColor: this.randomColor()});
      }       

      render() {
        return (
            <div
                className="Square"
                onMouseOver={this.changeColor}
                style={{backgroundColor: this.state.backgroundColor}}
            >
            </div>
        );
      }
}
export default Square;