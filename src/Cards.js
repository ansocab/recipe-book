import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Cards.css';
import {Link} from "react-router-dom";

export default function Cards({searchResults, recipes}) {
  console.log(recipes)
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


    const [showResults, setShowResults] = useState(false);
    const [recipeConfig, setRecipeConfig] = useState({});

  
    useEffect(() => {
      if (searchResults.length) {
        setShowResults(true)
        if (searchResults.length < 3) {
          setRecipeConfig({...config,
            slidesToShow: searchResults.length,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  variableWidth: true,
                  slidesToShow: searchResults.length,
                  slidesToScroll: searchResults.length
                }
              },
              {
                breakpoint: 768,
                settings: {
                  variableWidth: true,
                  slidesToShow: searchResults.length,
                  slidesToScroll: searchResults.length,
                  initialSlide: searchResults.length
                }
              },
            {
              breakpoint: 600,
              settings: {
                variableWidth: true,
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
          })
        } else {
          setRecipeConfig(config)
        }
      } else {
        setShowResults(false)
      }
    }, [searchResults])
    

    const getSearchRecipes = () => {
      if (searchResults[0] === "noResults") {
        return (
            <h1 id="search" className="pb-5">No search results</h1>
        )
      } else {
      return (
        <>
          <h1 id="search">Search results</h1>
          <div className="cards-search">
            <Slider {...recipeConfig}>
              {recipes.filter(recipe => searchResults.includes(recipe.slug))
              .map((recipe) => {
                return <div key={recipe.slug} className="img-card bg">
                  <img className="img" src={`https://ourrecipebook.herokuapp.com/static/${recipe.images[0]}` }/>
                  <div class="card-body">
                    <div className="card-title">{recipe.title}</div>
                    <div className="card-text">{recipe.description}</div>
                  </div>
                  <Link to={recipe.slug}><a class="btn btn-primary card-button d-block align-self-end">Read more</a></Link>
                </div>
              })}
            </Slider>
          </div> 
        </>) 
      }
    }

    const getRecipe = (elem) => {
        return (<div className="cards">
       <Slider {...settings}>
        {recipes.filter(recipe => recipe.meals === elem)
        .map((recipe) => {
          return <div key={recipe.slug} className="img-card">
              <div className="content">
             <div className="content-overlay"></div> 
            <img className="img" src={`https://ourrecipebook.herokuapp.com/static/${recipe.images[0]}`}/>
            <div class="content-details fadeIn-left">
            <h4 className="content-title">{recipe.duration} minutes</h4>
            <p>{recipe.difficulty}</p>
            </div>
            </div>
            <div class="card-body">
              <div className="card-title">{recipe.title}</div>
              <div className="card-text">{recipe.description}</div>
            </div>
             <Link to={recipe.slug}><a class="btn btn-primary card-button d-block align-self-end">Read more</a></Link>
          </div>
        })}
      </Slider>
      </div> ) 
    }

     
    const [settings, setSettings] = useState(config);


    return (
        <>

        {showResults ? getSearchRecipes() : null}

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