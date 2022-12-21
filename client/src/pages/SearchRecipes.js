import React, { useState, useEffect } from 'react';
import {  Embed } from "semantic-ui-react";

import {
  Jumbotron,
  Container,
  Col,
  Form,
//   Button,
//   Card,
//   CardColumns,
} from 'react-bootstrap';

// import Auth from '../utils/auth';
import { searchYoutubeShorts } from '../utils/API';
// import { saveRecipeIds, getSavedRecipeIds } from '../utils/localStorage';
// import { useMutation } from '@apollo/client';
// import { SAVE_RECIPE } from '../utils/mutations';

const SearchRecipes = () => {
 
const [ recipeData, setRecipeData] = useState([])

const [inputVal, setInputVal] = useState("");

const [ query, setQuery ] = useState("ramen");

//   const [savedRecipeIds, setSavedRecipeIds] = useState(getSavedRecipeIds());

//   const [saveRecipe, { error }] = useMutation(SAVE_RECIPE);

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



  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!inputVal) {
      return false;
    }

    try {
      const response = await searchYoutubeShorts(inputVal);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const recipeData = items.map((short) => ({
    
        title: short.snippet.title,
        description: short.snippet.description,

      }));

      setQuery(recipeData);
      setInputVal('');
    } catch (err) {
      console.error(err);
    }
  };


//   const handleSaveRecipe = async (recipeId) => {

//     const recipeToSave = searchedRecipes.find((recipe) => recipe.recipeId === recipeId);

//     // get token
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }

//     try {

//       await saveRecipe({
//         variables: { recipe: { ...recipeToSave } },
//       });


//       setSavedRecipeIds([...savedRecipeIds, recipeToSave.recipeId]);
//     } catch (err) {
//       console.error(err);
//     }
//   };

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Search for Recipes!</h1>
          <Form onSubmit={handleFormSubmit}>
              <Col xs={12} md={8}>
                <Form.Control
                  name="inputVal"
                  value={inputVal}
                  onChange={handleUpdate}
                  type="text"
                  size="lg"
                  placeholder="Search for a recipe"
                />
              </Col>
              <Col xs={12} md={4}>
              
        <div>
            {/* <p>{inputVal} </p>
            <input type="text" value={inputVal} onChange={handleUpdate} /> */}
            <button onClick={handleSearch}>Search</button>
        {recipeData.map((short,i)=> {
            return (
                <div key={i}>
                Title: 
                <br></br>
                {short.snippet.title}
                <br>
                </br>
                Description: 
                <br>
                </br>{short.snippet.description}
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
              </Col>
           
          </Form>
        </Container>
      </Jumbotron>

      {/* <Container>
        <h2>
          {recipeData.length
            ? `Viewing ${recipeData.length} results:`
            : 'Search for a recipe to begin'}
        </h2>
        <CardColumns>
          {recipeData.map((short, i) => {
            return (
              <Card key={recipe.recipeId} border="dark">
                {recipe.image ? (
                  <Card.Img
                    src={recipe.image}
                    alt={`The cover for ${recipe.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <p className="small">Authors: {recipe.authors}</p>
                  <Card.Text>{recipe.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedRecipeIds?.some(
                        (savedRecipeId) => savedRecipeId === recipe.recipeId
                      )}
                      className="btn-block btn-info"
                      onClick={() => handleSaveRecipe(recipe.recipeId)}
                    >
                      {savedRecipeIds?.some(
                        (savedRecipeId) => savedRecipeId === recipe.recipeId
                      )
                        ? 'This recipe has already been saved!'
                        : 'Save this Recipe!'}
                    </Button>
                  )}
                  {error && <div>Something went wrong!</div>}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container> */}
    </>
  );
};




export default SearchRecipes;