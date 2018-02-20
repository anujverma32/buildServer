import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Navbar } from 'reactstrap';

const Header = (props) => (
    <header>
        <Navbar color="faded" light expand="md" fixed="true">
            <NavbarBrand href="/" >BuildServer</NavbarBrand>
        </Navbar>
    </header>
)