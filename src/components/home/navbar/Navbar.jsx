import React, { useState } from 'react';
import './navbar.css';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { RiAdminFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import logo from "../../../image/main-logo.png";
// import { BiLogOut } from "react-icons/bi";
const Header = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };
    const logOut = () =>{
        localStorage.clear();
    }

    return (
        <>
            <div className="position-relative">
                <Navbar expand="lg" expanded={expanded}  fixed="top" className="navbar-custom">
                    <Navbar.Brand href="#">
                        <img src={logo} alt="Logo" className="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle}>
                        <div className={`navbar-toggler-icon ${expanded ? 'open' : ''}`}></div>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav" className='responsive-navbar-nav'>
                        <Nav className="ms-auto gap-3 item">
                            <Nav.Link href="#" className='home'>HOME</Nav.Link>
                            <Nav.Link href="#">SERVICE</Nav.Link>
                            <Nav.Link href="#">PRODUCTS</Nav.Link>
                            <Nav.Link href="#">WATCHES</Nav.Link>
                            <Nav.Link href="#">SALE</Nav.Link>
                            <Nav.Link href="#">BLOG</Nav.Link>
                            <NavDropdown title="Pages" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                            </NavDropdown>
                        </Nav>
                        <Nav className='nav-icon gap-3'>
                            <CiSearch className='search'/>
                            <RiAdminFill className="admin" />
                            <FaShoppingCart className="shopping" />
                            {/* <BiLogOut className='admin' onClick={logOutItem} /> */}
                            <button onClick={logOut}>LogOut</button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
};

export default Header;
