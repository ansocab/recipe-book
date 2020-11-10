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
                <span className="fa fa-facebook" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></span>
                <span className="fa fa-pinterest" target="_blank"><FontAwesomeIcon icon={faPinterest} /></span>
                <span className="fa fa-instagram" target="_blank"><FontAwesomeIcon icon={faInstagram} /></span>
                <span className="fa fa-facebook-f" target="_blank"><FontAwesomeIcon icon={faTwitter} /></span>
                <span className="fa fa-envelope" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></span>
                <span className="fa fa-heart" target="_blank"><FontAwesomeIcon icon={faHeart} /></span>
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