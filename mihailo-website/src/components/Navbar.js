import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../assets/img/logo.png';
import GamesTab from '../components/GamesTab.js';
import '../assets/css/styles.css';
import { Link } from 'react-router-dom';

function scroll(pixels){
    window.scrollTo({
        top: pixels,
        left: 100,
        behavior: 'smooth'
    });
}

function NavbarFunc() {
    const [showBar, setShowBar] = useState(false);
    return (
        <>
            <Navbar className="main-navbar" sticky="top" collapseOnSelect expand="lg" variant="dark">
                <Container className="color-dark">
                    <Link to={"/"} onClick={()=>{scroll(0)}}><Navbar.Brand href="#home"><img alt="" className="navbar-logo" src={logo} /></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Link onClick={()=>{setShowBar(!showBar)}} className=" link navbar-text">IGRE</Link> */}
                            <Link className="link navbar-text" onClick={()=>{setShowBar(!showBar)}}><Nav.Link>IGRE</Nav.Link></Link>
                            <Link className="link navbar-text" to={"/#aboutUs"} onClick={()=>{scroll(621)}}><Nav.Link href="#aboutUs">O NAMA</Nav.Link></Link>
                            <Link className="link navbar-text" to={"/#pricing"} onClick={()=>{scroll(790)}}><Nav.Link href="#pricing">CENOVNIK</Nav.Link></Link>
                            <Link className="link navbar-text" to={"/#contact"} onClick={()=>{scroll(1300)}}><Nav.Link href="#contact">KONTAKT</Nav.Link></Link>
                            <Link className="link navbar-text" to={"/#coaches"} onClick={()=>{scroll(2000)}}><Nav.Link href="#coaches">TRENERI</Nav.Link></Link>
                        </Nav>
                        {/* <Nav>
                            <Nav.Link>SRB</Nav.Link>
                            <Nav.Link>ENG</Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {showBar && 
                <GamesTab onMouseLeave={()=>{setShowBar(false)}} className="games-tab" style={showBar} />
            }
        </>
    );
}

export default NavbarFunc;
