import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import ServerListComponent from "../../components/ServerList/ServerList";
import { serverList } from "../../reducers/index";
import { getServerList } from "../../actions/server";

class ServerList extends Component {
    render = () => {
        return (
            <div className="settings-container" >
                <ServerListComponent {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    serverList: serverList(state)
})
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ getServerList: getServerList }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ServerList);
