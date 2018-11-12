import React, { Component } from 'react';
import './App.css';

import Menu from './components/menu';
import GetCategories from './containers/getCategories';

class App extends Component {
  render() {

    return (
      <div>
        <div>
          <Menu />
        </div>
        <div className="container">
          <GetCategories />
        </div>
      </div>
    );
  }
}

export default App;
