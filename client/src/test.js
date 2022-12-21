import React, { useState, useEffect } from 'react';
import {  Embed } from "semantic-ui-react";


const SearchRecipes = () => {
    const [ recipeData, setRecipeData] = useState([])
    const [inputVal, setInputVal] = useState("");
    const [ query, setQuery ] = useState("ramen");

    const handleUpdate = (e) => {
        setInputVal(e.target.value);
    }

    const handleSearch = () => {
        console.log(inputVal);
        setQuery(inputVal);
    }

    useEffect(() => {
        fetch(`/api/shorts/${query}`)
        .then((resp) => {
            return resp.json()
        })
        .then((ytData) => {
            console.log(typeof ytData)
            console.log(ytData)
            setRecipeData(ytData)
        })

      }, [query]);

    return (
        <div>
            <p>{inputVal} </p>
            <input type="text" value={inputVal} onChange={handleUpdate} />
            <button onClick={handleSearch}>Search</button>
        {recipeData.map((short,i)=> {
            return (
                <div key={i}>
                Title: {short.snippet.title}
                Description: {short.snippet.description}
                Video ID {short.snippet.videoId}
                <Embed
            id={short.snippet.videoId}
            source="youtube"
            iframe={{
              allowFullScreen: true,
            }}
            aspectRatio='4:3'
          />
                </div>
            )
        })}
        </div>
    )
}