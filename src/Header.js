import React from 'react';
import { Fragment } from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function Header() {
    function handleClick() {
        window.open('mailto:recipe-book@example.com')
    }

    return (
    <Fragment>
    <div className="search col d-flex align-items-center justify-content-center">
        <div className="search-logo">
            <img className="text-center" src="logo-def.png" alt="" />
        </div>
    </div>
    
    <Navbar className="navbar-top navbar-expand-lg navbar-light justify-content-center">
        
        <Nav className="m-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Recipes" id="basic-nav-dropdown">
                <NavDropdown.Item as={HashLink} to="/#breakfast">Breakfast</NavDropdown.Item>
                <NavDropdown.Item as={HashLink} to="/#lunch">Lunch</NavDropdown.Item>
                <NavDropdown.Item as={HashLink} to="/#dinner">Dinner</NavDropdown.Item>
                <NavDropdown.Item as={HashLink} to="/#dessert">Dessert</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={HashLink} to="/#home-newsletter">Subscription</Nav.Link>
        </Nav>

        <div className="container sidebar d-none d-lg-block">
            <div className="row sidebarSocial justify-content-end align-items-center">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faPinterest} /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                <button onClick={handleClick}><FontAwesomeIcon icon={faEnvelope} /></button>
                <button disabled><FontAwesomeIcon icon={faHeart} /></button>
                </div>
            </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    </Navbar>
    </Fragment>
    )
    
}