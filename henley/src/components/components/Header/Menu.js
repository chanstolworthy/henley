import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {Link} from 'react-router-dom'
import {ABOUT, PORTFOLIO} from "../../../constants/routerPathConstants";
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import menu from '../../../assets/icons/menu.svg'

class Menu extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({
            open: true
        });
    };

    handleClose = () => {

        this.setState({open: false});
    };

    render() {

        const {open} = this.state;

        return (
            <div>
                <IconButton
                    classes={{root: 'global__button__mui--primary'}}
                    onClick={this.handleOpen}
                >
                    <img className='global__icon-default' src={menu} alt='menu'/>
                </IconButton>
                <Drawer onClose={this.handleClose} open={open} anchor='right'>
                    <MenuList>
                        <Link className='global__link' to={ABOUT}><MenuItem onClick={this.handleClose}><div>About</div></MenuItem></Link>
                        <Link className='global__link' to={PORTFOLIO}><MenuItem onClick={this.handleClose}><div>My Work</div></MenuItem></Link>
                    </MenuList>
                </Drawer>
            </div>
        );
    }
}

export default Menu;