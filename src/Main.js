import React, {useEffect, useState} from 'react';
import { Fragment } from 'react';
import Search from "./Search.js";
import './Main.css';
import Cards from './Cards';
import Spinner from "./Spinner";

export default function Main({recipes}) {
    const [searchResults, setSearchResults] = useState([]);

    const updateSearchResults = (results) => {
        setSearchResults(results);
    }
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("recipes has changed!")
        if (!recipes.length) {
            setLoading(true)
        }
        else {
            setLoading(false)}
      }, [recipes]); 
    
    return (
        <Fragment>
        <div class="carousel-inner" role="listbox">

        <div class="wrap container-fluid full">
            <Search callback={updateSearchResults}/>
            <div class="section-icon d-flex justify-content-center mb-3 mt-4">
                <img src="icon4.png" alt=""/>
            </div>
            <h2 class="main-title title-text text-center text-uppercase">
                Amazing Health Solution
            </h2>
            {loading ? <Spinner /> : <Cards searchResults={searchResults} recipes={recipes}/> }
            </div>
        </div>
        <div id ="home-newsletter" class="home-newsletter">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 newsletter-box">
                    <div class="section-icon d-flex justify-content-center mb-3">
                        <img src="s3_small.png" alt=""/>
                    </div>
                    <div class="single">
                        <h2>Never Miss a Recipe!</h2>
                        <p>Subscribe your e-mail address and get to know about fresh stuff!</p>
                        <div class="input-group">
                            <input type="email" class="form-control" placeholder="Enter your email"/>
                            <span class="input-group-btn">
                                <button class="btn btn-theme" type="submit">Subscribe</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
    )
}
