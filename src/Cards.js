import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Cards.css';
import {Link} from "react-router-dom";

export default function Cards({searchResults, recipes}) {
    const config = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    const getRecipe = (elem) => {
      if (elem === "Search") {
        return (<div className="cards">
       <Slider {...settings}>
        {recipes.filter(recipe => searchResults.includes(recipe.sys.id))
        .map((recipe) => {
          return <div key={recipe.fields.slug} className="img-card">
            <img className="img" src={recipe.fields.images[0].fields.file.url}/>
            <div class="card-body">
              <div className="card-title">{recipe.fields.slug}</div>
              <div className="card-text">{recipe.fields.description}</div>
            </div>
             <Link to={recipe.fields.slug}><a class="btn btn-primary card-button d-block align-self-end">Read more</a></Link>
          </div>
        })}
      </Slider>
      </div> ) 
      } else {
        return (<div className="cards">
       <Slider {...settings}>
        {recipes.filter(recipe => recipe.fields.meals === elem)
        .map((recipe) => {
          return <div key={recipe.fields.slug} className="img-card">
              <div className="content">
             <div className="content-overlay"></div> 
            <img className="img" src={recipe.fields.images[0].fields.file.url}/>
            <div class="content-details fadeIn-left">
            <h4 className="content-title">{recipe.fields.duration} minutes</h4>
            <p>{recipe.fields.difficulty}</p>
            </div>
            </div>
            <div class="card-body">
              <div className="card-title">{recipe.fields.slug}</div>
              <div className="card-text">{recipe.fields.description}</div>
            </div>
             <Link to={recipe.fields.slug}><a class="btn btn-primary card-button d-block align-self-end">Read more</a></Link>
          </div>
        })}
      </Slider>
      </div> ) 
      }
    }

     
    const [settings, setSettings] = useState(config);


    return (
        <>
    <h1 id="breakfast">Search results</h1>
    {getRecipe("Search")}
    <h1 id="breakfast">Breakfast</h1>
    <hr className="br-line"></hr>
    {getRecipe("Breakfast")}
      <h1 id="lunch">Lunch</h1>
      <hr className="br-line"></hr>
      {getRecipe("Lunch")}
      <h1 id="dinner">Dinner</h1>
      <hr className="br-line"></hr>
      {getRecipe("Dinner")}
      <h1 id="dessert">Dessert</h1>
      <hr className="br-line"></hr>
      {getRecipe("Dessert")}
        </>
    );

}