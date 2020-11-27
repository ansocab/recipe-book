import React, { useEffect } from "react";
import { Container, Row, Col, Carousel, Table} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCircle as faCircleRegular, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faCircle as faCircleSolid, faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useParams, useLocation } from "react-router-dom";
import "./RecipeDetail.css";
import video from "./images/video.mp4";
import Spinner from "./Spinner"
import Comments from "./Comments"

function DifficultyVisualisation({difficulty}) {
    switch (difficulty) {
        case "Easy":
            return (
                <>
                    <FontAwesomeIcon icon={faCircleSolid}/>
                    <FontAwesomeIcon icon={faCircleRegular}/>
                    <FontAwesomeIcon icon={faCircleRegular}/>
                </>
            )
        case "Medium":
            return (
                <>
                    <FontAwesomeIcon icon={faCircleSolid}/>
                    <FontAwesomeIcon icon={faCircleSolid}/>
                    <FontAwesomeIcon icon={faCircleRegular}/>
                </>
            )
        case "Hard":
            return (
                <>
                    <FontAwesomeIcon icon={faCircleSolid}/>
                    <FontAwesomeIcon icon={faCircleSolid}/>
                    <FontAwesomeIcon icon={faCircleSolid}/>
                </>
            )
        default:
            return <></>
    }
}


export default function RecipeDetail({recipes}) {
    const { slug } = useParams();
    const currentRecipe = recipes.find(recipe => recipe.slug === slug)

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

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

    const splitIntoParagraphs = (text) => {
        const splitText = text.split("\\n")
        const paragraphs = splitText.filter((item) => item !== "")
        return paragraphs
    }
    const convertDate = (date) => {
        return date.slice(0, 10).split('-').reverse().join('/');
    };

    if (currentRecipe) {
        return (
            <div className="wrap-container">
            <Container>
                <Row className="pt-4 pb-3">
                    <h1>{currentRecipe.title}</h1>
                </Row>
                <Row className="justify-content-center pb-2">
                    <Col xs="auto" sm="auto">
                        <FontAwesomeIcon icon={faClock}/>
                        <span className="pl-1">{formatDuration(currentRecipe.duration)}</span>
                    </Col>
                    <Col xs="auto" sm="auto" className="difficultyIndication">
                        <DifficultyVisualisation difficulty={currentRecipe.difficulty}/>
                        <span className="pl-1">{currentRecipe.difficulty}</span>
                    </Col>
                    <Col xs="auto" sm="auto">
                        <FontAwesomeIcon icon={faCalendarAlt}/>
                        <span className="pl-2">{convertDate(currentRecipe.publishDate)}</span>
                    </Col>
                </Row>
                <Row className="pt-4 pb-4">
                    <Carousel interval={null} className="carousel-width"
                    nextIcon={<FontAwesomeIcon icon={faChevronCircleRight} aria-hidden="true" className="recipe-control-icon"/>} 
                    prevIcon={<FontAwesomeIcon icon={faChevronCircleLeft} aria-hidden="true" className="recipe-control-icon"/>}>
                        {currentRecipe.images.map((image) => {
                            return  <Carousel.Item className="carousel-image-height overflow-hidden">
                                        <img className="d-block w-100 h-100" src={`https://ourrecipebook.herokuapp.com/static/${image}`} alt={image}/>   
                                    </Carousel.Item>
                        })}
                    </Carousel>
                </Row>
                <Row>
                    <Col className="col-12 col-md-12 col-lg-7 pt-4 preparation-column">
                        <h2>Preparation</h2>
                        {splitIntoParagraphs(currentRecipe.body).map((paragraph, index) => {
                            return <Row>
                                <Col className="col-1 ml-3 p-0 d-flex justify-content-center">
                                    <div className="background-circle">
                                        <h2 className="text-center">{index+1}</h2>
                                    </div>
                                </Col>
                                <Col>{paragraph} <br /><br /> </Col>
                            </Row>
                        })
                        
                        }
                    </Col>
                    <Col className="col-10 col-sm-10 col-md-9 col-lg-5 mx-auto pt-4 pb-5 ingredients-column">
                        <h2>Ingredients</h2>
                        <Table striped borderless className="ingredientsTable">  
                            <tbody>
                                 {
                                 currentRecipe.ingredients.map ((ingredient) => {
                                     const ingredientArray = ingredient.split(":")
                                     const food = ingredientArray.slice(0, 1)
                                     const quantity = ingredientArray.slice(1)
                                     return <tr>
                                                <td>
                                                    <div className="mx-auto text-right">
                                                        <input type="checkbox" aria-label="Checkbox for following ingredient"/>
                                                    </div>
                                                </td>
                                                <td className="text-center">{quantity}</td>
                                                <td>{food}</td>
                                            </tr>
                                 })}        
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row className="justify-content-center pb-5">
                    <div className="video-container">
                        <video controls autostart autoPlay src={video} type="video/mp4" />
                    </div>
                </Row>
                {/*<Comments />*/}
            </Container>
            </div>
        )
    } else {
        return (
            <Spinner />
          );
    }
}
