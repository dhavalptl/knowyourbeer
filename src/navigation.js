import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
class Navigation extends Component {
    onLogout = () => {
        this.props.logout();
    }
    render() {
        return (
            <Navbar collapseOnSelect fixedTop>
                <Navbar.Header>
                <Navbar.Brand>
                    <LinkContainer to="/"><a href="/">KnowYourBeer</a></LinkContainer>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        { !this.props.user && <LinkContainer to="/login"><NavItem>Sign In</NavItem></LinkContainer>}
                        { !this.props.user && <LinkContainer to="/register"><NavItem>Register</NavItem></LinkContainer>}
                        { this.props.user && <NavItem onClick={this.onLogout}>Logout</NavItem>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;