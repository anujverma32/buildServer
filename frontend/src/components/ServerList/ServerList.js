import React, { Component } from "react";
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    topBar: {
        display: 'flex',
        padding: '0 15px',
        margin: '10px 0'
    }
});

class ServerList extends Component {
    componentWillMount() {
        this.props.getServerList();
    }
    deleteServer() {
        console.log("delete");
    }
    render() {
        const { classes } = this.props;
        return(
            <Paper className={classes.root}>
                <div className={classes.topBar}>
                    <div className="filler"></div>
                    <Button variant="raised" color="primary" component={Link} to="/servers/new">Add New</Button>
                </div>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Server Name</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.currServerList.map(
                            (server) => 
                                <TableRow key={server.id}>
                                    <TableCell><Typography variant="subheading">{server.server_name}</Typography></TableCell>
                                    <TableCell><Button component={Link} to={"/servers/"+server.id} color="primary">Edit</Button></TableCell>
                                    <TableCell><Button onClick={() => this.deleteServer(server.id)} color="secondary">Delete</Button></TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}
export default withStyles(styles)(ServerList);