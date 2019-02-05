import React, { Component } from 'react';
import Header from './components/components/Header/Header'
import './App.scss';
import AppRouter from './router/index'


class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
            <Header/>
        </header>
        <AppRouter/>
      </div>

    );
  }
}

export default App;
