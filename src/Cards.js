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
        slidesToScroll: 1
      };
     
    const [settings, setSettings] = useState(config);

    return (
        <div className="cards">

      <Slider {...settings}>
        {recipes.filter(recipe => recipe.fields.meals === "Breakfast")
        .map((recipe) => {
          return <div key={recipe.fields.slug} className="img-card">
            <img className="img" src={recipe.fields.images[0].fields.file.url}/>
            <div class="card-body">
              <div className="card-title">{recipe.fields.slug}</div>
              <div className="card-text">{recipe.fields.description}</div>
            </div>
             <Link to={recipe.fields.slug}><a class="btn btn-primary card-button d-block m-auto">Read more</a></Link>
          </div>
        })}
      </Slider>
      </div>
    );

}