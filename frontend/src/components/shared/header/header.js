import React, { Component } from 'react'
import { Link } from "react-router-dom";

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';

class Header extends Component {
    state = {
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    signOut = () => {
        this.props.signOut();
        this.setState({ anchorEl: null });
    }

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit">
                        SBT Build Server
                    </Typography>
                    <div className="filler"></div>
                    <IconButton
                        aria-owns={open ? 'menu-appbar' : null}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={this.handleClose}>
                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                        <MenuItem onClick={this.signOut}>Sign out</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        )
    }
}
export default Header;