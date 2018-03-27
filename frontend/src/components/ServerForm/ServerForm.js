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
        console.log("yo");
        const target = event.target,
            value = target.type ===
                'checkbox' ? target.checked : target.value,
            name = target.name
        let settings = JSON.parse(JSON.stringify(this.state.serverSettings));
        settings[name] = value;
        this.setState({
            "serverSettings": settings
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
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
                                <TextField fullWidth required name="serverName" label="Server Name" id="id-serverName-input" margin="normal"
                                    error={errors.serverName ? true : false} type="text" helperText={errors.serverName ? errors.serverName : "This should be unique. It will serve as a unique name for your app"} placeholder="Enter your Server Name"
                                    onChange={this.handleInputChange} value={this.state.serverSettings.server_name} />        
                            </div>

                            <div className="form-group">
                                <TextField fullWidth required name="sshUsername" label="SSH Username" id="id-sshUsername-input" margin="normal"
                                    error={errors.sshUsername ? true : false} type="text" helperText={errors.sshUsername} placeholder="Enter your SSH Username"
                                    onChange={this.handleInputChange} value={this.state.serverSettings.ssh_username} />
                            </div>
                                
                            <div className="form-group">
                                <TextField fullWidth required name="sshIP" label="SSH IP" id="id-sshIP-input" margin="normal"
                                    error={errors.sshIP ? true : false} type="text" helperText={errors.sshIP} placeholder="Enter your SSH IP"
                                    onChange={this.handleInputChange} value={this.state.serverSettings.ssh_ip} />
                            </div>

                            <div className="form-group">
                                <TextField fullWidth required name="sshPort" label="SSH Port" id="id-sshPort-input" margin="normal" value="22"
                                    error={errors.sshPort ? true : false} type="number" helperText={errors.sshPort} placeholder="Enter your SSH Port"
                                    onChange={this.handleInputChange} value={this.state.serverSettings.ssh_port} />
                            </div>

                            <div className="form-group">
                                <TextField fullWidth required name="sshPassword" label="SSH Password" id="id-sshPassword-input" margin="normal"
                                    error={errors.sshPassword ? true : false} type="text" helperText={errors.sshPassword} placeholder="Enter your SSH Password"
                                    onChange={this.handleInputChange} value={this.state.serverSettings.ssh_password} />
                            </div>

                            <div className="form-group">
                                <TextField fullWidth required name="sbtAppDir" label="SBT App Directory" id="id-sbtAppDir-input" margin="normal"
                                    error={errors.sbtAppDir ? true : false} type="text" helperText={errors.sbtAppDir ? errors.sbtAppDir : "Absolute path of you app directory"} placeholder="Enter your SBT App Directory"
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
