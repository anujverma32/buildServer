import React, { Component } from "react";
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class ServerList extends Component {
    componentDidMount() {
        this.props.getServerList();
    }
    editServer() {
        console.log("edit");
    }
    deleteServer() {
        console.log("delete");
    }
    render() {
        const { classes } = this.props;
        return(
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Server Name</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.serverList.map(
                            server => {
                                <TableRow key={server.id}>
                                    <TableCell>{server.server_name}</TableCell>
                                    <TableCell><button onClick={this.editServer}>Edit</button></TableCell>
                                    <TableCell><button onClick={this.deleteServer}>Delete</button></TableCell>
                                </TableRow>
                            })
                        }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}
export default withStyles(styles)(ServerList);