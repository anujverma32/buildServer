import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import './LoginForm.css';

export default class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    }
    handleInputChange = (event) => {
        const target = event.target,
            value = target.type ===
                'checkbox' ? target.checked : target.value,
            name = target.name
        this.setState({
            [name]: value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.username, this.state.password)
    }
    render() {
        const errors = this.props.errors || {}
        return (
            <Paper className={"login-form"} elevation={4}>
                <form onSubmit={this.onSubmit}>
                    <Typography variant="title" align="center" gutterBottom>Login</Typography>
                    <Typography variant="subheading" align="center" gutterBottom color="textSecondary">
                        Please enter your username and password to login
                    </Typography>
                    {
                        errors.non_field_errors ?
                            <Typography variant="body2" paragraph align="center" color="error">
                                {errors.non_field_errors}
                            </Typography> : ""
                    }
                    <TextField autoFocus fullWidth name="username" label="Username" id="id-username-input" margin="normal"
                        error={errors.username ? true : false} type="text" helperText={errors.username} placeholder="Enter your username"
                        onChange={this.handleInputChange}/>

                    <TextField fullWidth name="password" label="Password" id="id-password-input" margin="normal"
                        error={errors.password ? true : false} type="password" helperText={errors.password} placeholder="Enter your password"
                        onChange={this.handleInputChange}/>
                    
                    <div className="action-wrapper">
                        <Button variant="raised" type="submit" color="primary">Log In</Button>
                    </div>
                </form>
            </Paper>
        )
    }
}
