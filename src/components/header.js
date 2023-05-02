import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{ marginTop: 56 }}>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Navbar.Brand href="/home">BC in SG</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="text-white" href="/home">Home</Nav.Link>
                        <Nav.Link className="text-white" href="/transport_lost_details">Buy Electricity</Nav.Link>
                        <Nav.Link className="text-white" href="/transport_complaints">Transactions</Nav.Link>
                        <NavDropdown title="Moderator" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/add_moderator">Add Moderator</NavDropdown.Item>
                            <NavDropdown.Item href="/moderator_details">View Moderators</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Profile" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Places" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/electricity_places/allPlaces">All Places</NavDropdown.Item>
                            <NavDropdown.Item href="/electricity_places/addPlaces">Add places</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Price History" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/electricity_schedules/allSchedule">Daily</NavDropdown.Item>
                            <NavDropdown.Item href="/electricity_schedules/addSchedule">Monthly</NavDropdown.Item>
                        </NavDropdown>
                        {/* <NavDropdown title="Electricity Area" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/electricity/proviences">Proviences</NavDropdown.Item>
                            <NavDropdown.Item href="/electricity/areas">Areas</NavDropdown.Item>
                        </NavDropdown> */}
                        {/*<Nav.Link className="text-white" href="/electricity">Electricity</Nav.Link>*/}
                    </Nav>
                </Navbar.Collapse>
            </nav>
        </header>
    );
};

export default Header;