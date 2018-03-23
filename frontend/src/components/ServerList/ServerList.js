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
                        {typeof (this.props.serverList.length) == "object" ? this.props.serverList.map(
                            server => {
                                <TableRow key={server.id}>
                                    <TableCell>{server.server_name}</TableCell>
                                    <TableCell>{this.editServer(server.id)}</TableCell>
                                    <TableCell>{this.deleteServer(server.id)}</TableCell>
                                </TableRow>
                            }) :
                            <TableRow key={0}>
                                <TableCell>{"anuj"}</TableCell>
                                <TableCell>{"anuj2"}</TableCell>
                                <TableCell>{"anuj3"}</TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}
export default withStyles(styles)(ServerList);