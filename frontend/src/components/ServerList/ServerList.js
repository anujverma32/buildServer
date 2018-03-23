import React, { Component } from "react";

class ServerList extends Component {
    componentDidMount() {
        this.props.getServerList();
    }
    render() {
        return(
            <div>This is listing</div>
        )
    }
}
export default ServerList;