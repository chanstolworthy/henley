import React, { Component } from 'react';
import Header from './components/components/Header/Header'
import './App.scss';
import './styles/styles.scss'
import AppRouter from './router/index'

class App extends Component {
  render(props) {
      console.log(props)
    return (

      <div className="App global__font__family">
        <header {...props} className="App-header">
            <Header/>
        </header>
        <AppRouter/>
      </div>

    );
  }
}

export default App;
