import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

export default function Header() {
    return (
        <footer>
            <Container>
                <Row className="justify-content-center text-center p-4">
                    <Col className="col-12 col-sm-4 pt-4">
                        <h5>Created by</h5>
                        <div>Lidia Chebotarova</div>
                        <span className="p-2"><a href="https://github.com/lidiyacheb" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a></span>
                        <span className="p-2"><a href="https://linkedin.com/in/ana-sofia-caballero" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn}/></a></span>
                        <div className="pt-3">Ana Sofia Caballero</div>
                        <span className="p-2"><a href="https://github.com/ansocab" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a></span>
                        <span className="p-2"><a href="https://linkedin.com/in/ana-sofia-caballero" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn}/></a></span>
                    </Col>
                    <Col className="col-12 col-sm-4 pt-4">
                        <h5>Powered by</h5>
                        <div>Contentful</div>
                        <div>React JS</div>
                        <div>HTML5</div>
                        <div>CSS3</div>
                        <div>Bootstrap</div>
                    </Col>
                    <Col className="col-xs-12 col-log-4 pt-4">
                        <h5>GitHub Repo</h5>
                        <a href="https://github.com/ansocab/recipe-book" target="_blank" rel="noreferrer">recipe-book</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}