import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Carousel, Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCircle as faCircleRegular } from "@fortawesome/free-regular-svg-icons";
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons';
import {useParams} from "react-router-dom";

var contentful = require('contentful');


function DifficultyVisualisation({difficulty}) {
    switch (difficulty) {
        case "Easy":
            return (
                <span>
                    <FontAwesomeIcon icon={faCircleSolid}/>
                    <FontAwesomeIcon icon={faCircleRegular}/>
                    <FontAwesomeIcon icon={faCircleRegular}/>
                </span>
            )
        case "Medium":
            return (
                <span>
                    <FontAwesomeIcon icon={faCircleSolid}/>
                    <FontAwesomeIcon icon={faCircleSolid}/>
                    <FontAwesomeIcon icon={faCircleRegular}/>
                </span>
            )
        case "Hard":
            return (
                <span>
                    <FontAwesomeIcon icon={faCircleSolid}/>
                    <FontAwesomeIcon icon={faCircleSolid}/>
                    <FontAwesomeIcon icon={faCircleSolid}/>
                </span>
            )
        default:
            return <span></span>
    }
}

/*
function CarouselImages({images}) {
    return (
        images.map((image) => (
        <Carousel.Item>
            <img className="d-block w-100 h-auto carousel-image" src={image.fields.file.url} alt={image.fields.title}/>   
        </Carousel.Item>
    ))
    )
}
*/

/*
function IngredientRows({ingredients}) {
    if (ingredients) {
        return (
            ingredients.map(([key, value]) => (
                <tr>
                    <td>{value}</td>
                    <td>{key}</td>
                </tr>
            ))
        )
    } else {
        return <></>
    }
}
*/


export default function RecipeDetail({recipes}) {
    const {slug} = useParams();
    console.log(slug)
    const currentRecipe = recipes.filter(recipe => recipe.fields.slug === slug)
    console.log(currentRecipe)
    
    /*
    const [currentRecipe, setCurrentRecipe] = useState([]);
    useEffect(() => {
        var client = contentful.createClient({
          space: process.env.REACT_APP_SPACE_ID,
          accessToken: process.env.REACT_APP_ACCESS_TOKEN
        });
        client.getEntries().then((entries) => {
            setCurrentRecipe(entries.items[2].fields);
            console.log(currentRecipe)
          });
        }, []);
*/

        

    const formatDuration = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60)
        let hourString;
        if (hours === 0) {
            hourString = ""
        } else if (hours === 1) {
            hourString = `${hours} hr`
        } else {
            hourString = `${hours} hrs`
        }

        const minutes = totalMinutes % 60
        let minuteString;
        if (minutes === 0) {
            minuteString = ""
        } else if (minutes === 1) {
            minuteString = `${minutes} min`
        } else {
            minuteString = `${minutes} mins`
        }

        return `${hourString} ${minuteString}`
    }

    if (currentRecipe) {
        return (
            
            <Container>
                <Row className="pt-4">
                    {console.log(`current title: ${currentRecipe.title}`)}
                    <h1 className="pt-4 mt-2">{recipes.filter(recipe => recipe.fields.slug === slug).title}</h1>
                </Row>
                <Row>
                    <Col md="auto">
                        <FontAwesomeIcon icon={faClock}/>
                        <span className="pl-1">{formatDuration(currentRecipe.duration)}</span>
                    </Col>
                    <Col md="auto">
                        <DifficultyVisualisation difficulty={currentRecipe.difficulty}/>
                        <span className="pl-1">{currentRecipe.difficulty}</span>
                    </Col>
                </Row>
                <Row className="pt-4 pb-4">
                    <Carousel interval={null}>
                        
                    </Carousel>
                </Row>
                <Row>
                    <Col className="col-12 col-sm-10 col-md-9 col-lg-5 pr-4">
                        <h2 className="mb-1">Ingredients</h2>
                        <Table striped bordered hover>  
                            <tbody>      {/* Ingredients -> "map" over the object and create a table row for each ingredient*/}
                                          
                            </tbody>
                        </Table>
                    </Col>
                    <Col className="col-12 col-md-12 col-lg-7">
                        <h2 className="pb-2">Preparation</h2>       {/* Preparation -> Create a row with number and text for eacht paragraph*/}
                        <p>{currentRecipe.body}</p>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        console.log("loading")
        return <h2>Loading</h2>
    }
}
