import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import RecipeDetail from './RecipeDetail';
import {Switch, Route } from "react-router-dom";
var contentful = require('contentful');

function App() {

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
    <div className="App">
      <Header />
      <Switch>
          <Route exact path="/">
            <Main recipes={recipes}/>
          </Route>
          <Route path="/:slug">
            <RecipeDetail recipes={recipes}/>
          </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
