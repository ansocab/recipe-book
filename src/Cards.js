import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Cards.css';
import {Link} from "react-router-dom";

export default function Cards({recipes}) {
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
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
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
        
        {console.log('test')}
        return (<div className="cards">
       <Slider {...settings}>
        {recipes.filter(recipe => recipe.fields.meals === elem)
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
    
    }

     
    const [settings, setSettings] = useState(config);


    return (
        <>
    <h1 id="breakfast">Breakfast</h1>
    {getRecipe("Breakfast")}
      <h1 id="lunch">Lunch</h1>
      {getRecipe("Lunch")}
      <h1 id="dinner">Dinner</h1>
      {getRecipe("Dinner")}
      <h1 id="dessert">Dessert</h1>
      {getRecipe("Dessert")}
        </>
    );

}