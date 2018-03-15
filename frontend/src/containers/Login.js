import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import LoginForm from '../components/LoginForm/LoginForm'
import { login } from '../actions/auth'
import { authErrors, isAuthenticated } from '../reducers'
import Grid from 'material-ui/Grid';

const Login = (props) => {
    if (props.isAuthenticated) {
        return (
            <Redirect to='/' />
        )
    }
    return (
        <div className = "login-page" >
            <Grid container spacing={0}>
                <Grid item sm={3} md={4}></Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <LoginForm {...props} />
                </Grid>
                <Grid item sm={3} md={4}></Grid>
            </Grid>
        </div >
    )
}
const mapStateToProps = (state) => ({
    errors: authErrors(state),
    isAuthenticated: isAuthenticated(state)
})
const mapDispatchToProps = (dispatch) => ({
    onSubmit: (username, password) => {
        dispatch(login(username, password))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);