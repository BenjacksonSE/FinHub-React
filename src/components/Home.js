import React, { useState, useEffect } from "react";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Row, Col, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import StockList from './Stocks/Stocklist';
import News from './News/News';
import Issues from './Issues/Issues';

const Navgbar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="">HOMER</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/news" >News</Nav.Link>
                    <Nav.Link as={Link} to="/issues" >Issues</Nav.Link>
                    <Nav.Link as={Link} to="/bonds" >Bonds</Nav.Link>
                    <Nav.Link as={Link} to='/commodities'>Commodities</Nav.Link>
                    <NavDropdown title="Equities" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/stocks" >Stocks</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/NSEBrief">Markets Today </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/FII_DII">FII DII Historical </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
    )
}
export default Navgbar