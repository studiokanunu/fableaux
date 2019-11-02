// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import { Route, Switch} from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { LinkContainer } from "react-router-bootstrap";
import image from '../../svg/NavIcon.svg';
// eslint-disable-next-line no-unused-vars
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import { history } from '../../_helpers';
import { authenticationService } from '../../_services';
// eslint-disable-next-line no-unused-vars
import { PrivateRoute } from '../../_components';

import Home from "../Home";
import { Login } from "../Login";
import AddRemove from "../DGrid";
import { StaticGrid } from "../UnitTests";

class App extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            currentUser: null,
        };
    }

    componentDidMount() {
        // subscribe to authentication service
        authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
        // set config into local storage  
        localStorage.setItem('config', JSON.stringify(this.props._config));
    }

    logout() {
        authenticationService.logout();
        history.push('/');
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { currentUser } = this.state;
        return (
            <div className="appcontainer">
                <div>
                    <Navbar expand="md">
                        <NavbarBrand href={`${process.env.PUBLIC_URL}/`} >
                            <img src={ image } id="logo" alt="GigaCloud"/></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            { !currentUser &&  
                                <Nav className="ml-auto" navbar>
                                    <LinkContainer to={`${process.env.PUBLIC_URL}/`}>
                                        <NavItem>
                                            <NavLink href={`${process.env.PUBLIC_URL}/`}>Find Out More</NavLink>
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={`${process.env.PUBLIC_URL}/login`} >
                                        <NavItem>
                                            <NavLink href={`${process.env.PUBLIC_URL}/login`}>Sign In</NavLink>
                                        </NavItem>
                                    </LinkContainer>
                                </Nav>
                            }
                            {currentUser && 
                                <Nav className="ml-auto" navbar>
                                    <LinkContainer to={`${process.env.PUBLIC_URL}/unittests`}>
                                        <NavItem>
                                            <NavLink href={`${process.env.PUBLIC_URL}/unittests`}>Unit Tests</NavLink>
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={`${process.env.PUBLIC_URL}/dgrid`}>
                                        <NavItem>
                                            <NavLink href={`${process.env.PUBLIC_URL}/dgrid`}>{currentUser.username}</NavLink>
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={`${process.env.PUBLIC_URL}/`} >
                                        <NavItem>
                                            <a href={`${process.env.PUBLIC_URL}/`} onClick={this.logout} className="nav-link">Sign Out</a>
                                        </NavItem>
                                    </LinkContainer>
                                </Nav>
                            }
                        </Collapse>
                     </Navbar>
                </div>
                <Switch>
                    { /* Set up the routes.  Use private route for any route that we must be logged in to use */ }
                    <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
                    <Route path={`${process.env.PUBLIC_URL}/login`} exact component={Login} />
                    <PrivateRoute path={`${process.env.PUBLIC_URL}/dgrid`} exact component={AddRemove} /> 
                    <PrivateRoute path={`${process.env.PUBLIC_URL}/unittests`} exact component={StaticGrid} />         
                </Switch>   
            </div>       
        );
    }
}
export { App }; 