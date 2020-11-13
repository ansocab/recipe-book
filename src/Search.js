import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import algoliasearch from 'algoliasearch/lite';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import algoliaImage from "./images/logo-algolia-blue-35c461b6.svg"
import "./Search.css";

export default function Search({callback}) {
    const [input, setInput] = useState('');
    const [firstRun, setFirstRun] = useState(true);
    const [index, setIndex] = useState(null);
    //const [searchStatus, setSearchStatus] = useState("noSearch");

    useEffect(()=>{
        if (firstRun) {
            setFirstRun(false);
            const searchClient = algoliasearch(process.env.REACT_APP_APPLICATION_ID, process.env.REACT_APP_SEARCH_API_KEY);
            setIndex(searchClient.initIndex('recipebook'));
        } else {
            if (input.length) {
                index.search(input).then(({ hits }) => {
                    hits.length ? callback(hits.map(recipe => recipe.sys.id)) : callback(["noResults"])
                });
            } else {
                callback([]);
            }
        }
    },[input])

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <Container className="search-container">
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text" onChange={handleChange} value={input}></input>
            <span className="span-search">Search by</span>
            <img className="algolia-logo" src={algoliaImage} alt="algolia search logo" />
        </Container>
    )
}