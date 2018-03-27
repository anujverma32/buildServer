import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import ServerFormComponent from '../../components/ServerForm/ServerForm';

import { getServer, createServer, updateServer } from "../../actions/server";
import { serverSettings } from "../../reducers";

class ServerForm extends Component {

    render = () => {
        return (
            <div className="settings-container" >
                <ServerFormComponent {...this.props}/>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    serverSettings: serverSettings(state)
})
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ getServer: getServer, createServer: createServer, updateServer: updateServer }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);
