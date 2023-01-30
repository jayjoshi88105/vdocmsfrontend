import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

import Dashboard from './Dashboard';

const NavBar = () => {
    // render(){
        return(
            <Nav activeKey="/dashboard" onSelect={(selectedKey) => console.log(`${selectedKey}`)}>
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="profile">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="signin ">Sign In</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    //}
}

export default NavBar