import React, {useEffect, useState} from 'react';
import { Fragment } from 'react';
import './Main.css';
var contentful = require('contentful');
export default function Main() {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        var client = contentful.createClient({
          space: process.env.REACT_APP_SPACE_ID,
          accessToken: process.env.REACT_APP_ACCESS_TOKEN
        });
        client.getEntries().then((entries) => {
            setRecipes(entries.items);
            console.log(entries);
          });
        }, []);
    return (
        <Fragment>
        <div class="carousel-inner" role="listbox">

        <div class="wrap container-fluid full">
            <div class="section-icon d-flex justify-content-center mb-3">
                <img src="icon4.png" alt=""/>
            </div>
            <h2 class="main-title title-text text-center text-uppercase">
                Amazing Health Solution
            </h2>
            <h2 class="main-title title-text text-center text-uppercase mb-5">
                Whatever you need
            </h2>
            </div>
        </div>
        <div className="cards">
        </div>
        <div class="home-newsletter">
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
