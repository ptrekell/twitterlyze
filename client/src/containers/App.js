import React, { Component } from 'react';
import Layout from './Layout/Layout';

class App extends Component {
  state = {
    response: ''
  };

 
  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
}

export default App;
