import React, { Component } from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Dashboard from 'material-ui-icons/Dashboard';
import Settings from 'material-ui-icons/Settings';

const drawerWidth = 240;

const styles = theme => ({
    drawerPaper : {
        position : "relative",
        width: drawerWidth,
        height: "calc( 100vh - 64px )",
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 9,
    }
})

class Sidebar extends Component{
    render() {
        const { classes } = this.props;
        return(
            <Drawer variant="permanent" open={this.props.isSidebarOpen} classes={{
                paper: classNames(classes.drawerPaper, !this.props.isSidebarOpen && classes.drawerPaperClose),
            }}>
                <List component="nav">
                    <ListItem button component={Link} to="/dashboard">
                        <ListItemIcon>
                            <Dashboard />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button component={Link} to="/servers">
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Connected Servers" />
                    </ListItem>
                </List>
            </Drawer>
        )
    }
}

export default withStyles(styles)(Sidebar);