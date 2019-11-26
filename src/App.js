import React from 'react';
import Square from './Square'
import './App.css';

class App extends React.Component {
  render() {     
    return (
        <div className="Container">
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
    );
  }
}

export default App;
