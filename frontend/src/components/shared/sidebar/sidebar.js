import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Navbar } from 'reactstrap';

const Sidebar = (props) => (
    <div>
        <Nav vertical>
            <NavItem>
                <NavLink href="#">Link</NavLink>
            </NavItem>
        </Nav>
    </div>
)