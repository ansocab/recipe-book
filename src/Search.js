import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import algoliasearch from 'algoliasearch/lite';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import algoliaImage from "./images/search-by-algolia-light-background.png"
import "./Search.css";

export default function Search({callback}) {
    const [input, setInput] = useState('');
    const [firstRun, setFirstRun] = useState(true);
    const [index, setIndex] = useState(null);

    useEffect(()=>{
        if (firstRun) {
            setFirstRun(false);
            const searchClient = algoliasearch('WD743MPV8P', '57c93452b38e95ff4a03a2aab12eb473');
            setIndex(searchClient.initIndex('recipebook'));
        } else {
            if (input.length) {
                index.search(input).then(({ hits }) => {
                    callback(hits.map(recipe => recipe.sys.id))
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
            <img src={algoliaImage} alt="algolia search logo" />
        </Container>
    )
}