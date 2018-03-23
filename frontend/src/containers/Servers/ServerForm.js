import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import ServerFormComponent from '../../components/ServerForm/ServerForm';

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
})
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);
