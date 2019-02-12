import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from "./Menu";
import './Header.scss'

const Header = () => (
    <AppBar classes={{root: 'Header'}} position="static">
        <Toolbar>
            <div className='global__row__flex__spaceBetween'>
                <div className='Header__title'>Henley</div>
                <Menu/>
            </div>
        </Toolbar>
    </AppBar>
)

export default Header