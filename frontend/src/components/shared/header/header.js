import React, { Component } from 'react'
import { Link } from "react-router-dom";

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu from 'material-ui/Menu';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ExitToApp from 'material-ui-icons/ExitToApp';

import './header.css';

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
    }

    toggleSidebar = () => {
        this.props.toggleSidebar(this.props.isSidebarOpen);
    }

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu" onClick={this.toggleSidebar}>
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
                        <ListItem button component={Link} to="/profile" onClick={this.handleClose}>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText inset primary="My account" />
                        </ListItem>
                        <ListItem button onClick={this.signOut}>
                            <ListItemIcon>
                                <ExitToApp />
                            </ListItemIcon>
                            <ListItemText inset primary="Sign out" />
                        </ListItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;
