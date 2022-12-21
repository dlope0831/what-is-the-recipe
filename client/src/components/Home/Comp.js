import React, { useEffect, useState } from "react"

import { Image, Grid } from "semantic-ui-react"

import asian from "../../assets/asian.jpg"
import caribbean from "../../assets/caribbean.jpg"
import indian from "../../assets/indian.jpg"
import italian from "../../assets/italian.jpg"
import spanish from "../../assets/spanish.jpg"

import { searchYoutubeShorts } from "../../utils/API"

function Computer() {
  const [query, setQuery] = useState(" ")


  useEffect(() => {
    fetch(`/api/shorts/${query}`)
      .then((resp) => {
        return resp.json()
      })
      .then((ytData) => {
        console.log(typeof ytData)
        console.log(ytData)
        // setRecipeData(ytData)
      })
  }, [query])


  const handleClick = async (event) => {
    event.preventDefault()
    // console.log(event.target.alt)

    setQuery(event.target.alt)

    const response = searchYoutubeShorts(query)

    console.log(response)

    // if (!imgType) {
    //   return false
    // }

    // try {
    //   const response = await searchYoutubeShorts(imgType)

    //   if (!response.ok) {
    //     throw new Error("something went wrong!")
    //   }

    //   const { items } = await response.json()

    //   // const recipeData = items.map((short) => ({
    //   //   title: short.snippet.title,
    //   //   description: short.snippet.description,
    //   // }))

    //   console.log(items)
    // } catch (err) {
    //   console.log(err)
    // }
  }

  return (
    <>
      <Grid text="true" style={{ padding: "55px" }} columns={5}>
        <Grid.Row only="computer">
          <Grid.Column>
            <Image
              label={{
                size: "medium",
                color: "blue",
                content: "Spanish",
                icon: "utensils",
                ribbon: true,
              }}
              alt="spanish"
              src={spanish}
              size="medium"
              rounded
              onClick={handleClick}
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              label={{
                size: "medium",
                color: "green",
                content: "Italian ",
                icon: "utensils",
                ribbon: true,
              }}
              alt="italian"
              src={italian}
              size="medium"
              rounded
              onClick={handleClick}
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              label={{
                size: "medium",
                color: "orange",
                content: "Indian",
                icon: "utensils",
                ribbon: true,
              }}
              alt="indian"
              src={indian}
              size="medium"
              rounded
              onClick={handleClick}
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              label={{
                size: "medium",
                color: "red",
                content: "East Asian",
                icon: "utensils",
                ribbon: true,
              }}
              alt="east asian"
              src={asian}
              size="medium"
              rounded
              onClick={handleClick}
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              label={{
                size: "medium",
                color: "yellow",
                content: "Caribbean",
                icon: "utensils",
                ribbon: true,
              }}
              alt="caribbean"
              src={caribbean}
              size="medium"
              rounded
              onClick={handleClick}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Computer
