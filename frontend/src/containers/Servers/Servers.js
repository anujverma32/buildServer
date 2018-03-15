import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router';
import ServerForm from '../../components/ServerForm/ServerForm';
import ServersList from "../../components/ServersList/ServersList";

const Servers = (props) => {
    return (
        <div className="settings-container" >
            <Switch>
                <Route exact path="/servers" component={ServersList} />
                <Route exact path="/servers/addnew" component={ServerForm} />
            </Switch>
        </div >
    )
}
const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(Servers);
