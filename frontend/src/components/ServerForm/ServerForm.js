import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import './ServerForm.css';

export default class ServerForm extends Component {

    state = {
        new: false,
        serverSettings : {
            server_name: '',
            ssh_username: '',
            ssh_ip: '',
            ssh_port: 22,
            ssh_password: '',
            sbt_app_dir: '',
        }
    }

    componentWillMount() {
        if (this.props.data ? this.props.data.new : false) {
            this.setState({new: true});
        } else {
            this.props.getServer(this.props.match.params.id);
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({ serverSettings: nextProps.serverSettings})
    }

    handleInputChange = (event) => {
        const target = event.target,
            value = target.type ===
                'checkbox' ? target.checked : target.value,
            name = target.name;
        this.setState({
            serverSettings : {
                ...this.state.serverSettings,
                [name]: value
            }
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.new) {
            this.props.createServer(this.state.serverSettings);
        } else {
            this.props.updateServer(this.state.serverSettings);
        }
    }
    render() {
        const errors = this.props.errors || {};
        return (
            <div className="settings-form">
                <Grid container spacing={0}>
                    <Grid item sm={1} md={2}></Grid>
                    <Grid item xs={12} sm={10} md={8}>
                        <form onSubmit={this.onSubmit}>
                            <Typography variant="headline" align="center" gutterBottom>Settings For a Server</Typography>
                            {
                                errors.non_field_errors ?
                                    <Typography variant="body2" paragraph align="center" color="error">
                                        {errors.non_field_errors}
                                    </Typography> : ""
                            }
                            <div className="form-group">
                                <TextField fullWidth required name="server_name" label="Server Name" id="id-server_name-input" margin="normal"
                                    error={errors.server_name ? true : false} type="text" helperText={errors.server_name ? errors.server_name : "This should be unique. It will serve as a unique name for your app"} placeholder="Enter your Server Name"
                                    onChange={this.handleInputChange} value={this.state.serverSettings.server_name} />        
                            </div>

                            <div className="form-group">
                                <TextField fullWidth required name="ssh_username" label="SSH Username" id="id-ssh_username-input" margin="normal"
                                    error={errors.ssh_username ? true : false} type="text" helperText={errors.ssh_username} placeholder="Enter your SSH Username"
                                    onChange={this.handleInputChange} value={this.state.serverSettings.ssh_username} />
                            </div>
                                
                            <div className="form-group">
                                <TextField fullWidth required name="ssh_ip" label="SSH IP" id="id-ssh_ip-input" margin="normal"
                                    error={errors.ssh_ip ? true : false} type="text" helperText={errors.ssh_ip} placeholder="Enter your SSH IP"
                                    onChange={this.handleInputChange} value={this.state.serverSettings.ssh_ip} />
                            </div>

                            <div className="form-group">
                                <TextField fullWidth required name="ssh_port" label="SSH Port" id="id-ssh_port-input" margin="normal" value="22"
                                    error={errors.ssh_port ? true : false} type="number" helperText={errors.ssh_port} placeholder="Enter your SSH Port"
                                    onChange={this.handleInputChange} value={this.state.serverSettings.ssh_port} />
                            </div>

                            <div className="form-group">
                                <TextField fullWidth required name="ssh_password" label="SSH Password" id="id-ssh_password-input" margin="normal"
                                    error={errors.ssh_password ? true : false} type="text" helperText={errors.ssh_password} placeholder="Enter your SSH Password"
                                    onChange={this.handleInputChange} value={this.state.serverSettings.ssh_password} />
                            </div>

                            <div className="form-group">
                                <TextField fullWidth required name="sbt_app_dir" label="SBT App Directory" id="id-sbt_app_dir-input" margin="normal"
                                    error={errors.sbt_app_dir ? true : false} type="text" helperText={errors.sbt_app_dir ? errors.sbt_app_dir : "Absolute path of you app directory"} placeholder="Enter your SBT App Directory"
                                    onChange={this.handleInputChange} value={this.state.serverSettings.sbt_app_dir} />
                            </div>

                            <Typography variant="body2" paragraph align="center" color="error">
                                Note : Name and Version of your app should be mentioned in 'build.sbt' in your app.
                            </Typography>

                            <div className="action-wrapper">
                                <Button variant="raised" type="submit" color="primary">Test & Save Settings</Button>
                            </div>
                        </form>
                    </Grid>
                    <Grid item sm={1} md={2}></Grid>
                </Grid>
            </div>
        )
    }
}
