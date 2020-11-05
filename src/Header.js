import React from 'react';
import { Fragment } from 'react';
import './Header.css';
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
    
    <nav className="navbar navbar-top navbar-expand-lg navbar-light justify-content-center">
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
        <a className="navbar-brand"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
                <li className="nav-item active pr-5">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item pr-5">
                    <a className="nav-link nav-color" href="#">Recipes</a>
                </li>
                <li className="nav-item  pr-5">
                    <a className="nav-link nav-color" href="#">Favorite</a>
                </li>
                <li className="nav-item pr-5">
                    <a className="nav-link nav-color" href="#">Contact</a>
                </li>
            </ul>
            </div>
    </nav>
    </Fragment>
    )
    
}