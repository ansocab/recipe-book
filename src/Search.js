import React, {useState, useEffect} from "react";
import algoliasearch from 'algoliasearch/lite';

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
        <input type="text" onChange={handleChange} value={input}></input>
    )
}