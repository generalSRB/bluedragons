import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Brand from '../Brand/Brand'
import './MenuItems.css';


const MenuItems = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Navbar.Brand href="#home"><Brand /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="navLinkColor">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#">News</Nav.Link>
                        <Nav.Link href="#">Video</Nav.Link>
                        <Nav.Link href="#">Photos</Nav.Link>
                        <Nav.Link href="#">Team</Nav.Link>
                        <Nav.Link href="#">Standings</Nav.Link>
                        <Nav.Link href="#">Matches</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MenuItems;