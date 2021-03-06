import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from './styles/theme'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </MuiThemeProvider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
