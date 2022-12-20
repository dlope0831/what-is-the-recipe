import React from "react"
import Computer from "../components/Home/Comp"
import Tablet from "../components/Home/Tablet"
import Mobile from "../components/Home/Mobile"
import TopVids from "../pages/topVideos"
import Search from "../components/Search"

function Home() {
  return (
    <>
      <Computer />
      <Search />
      <Mobile />
      <Tablet />
      <TopVids />
    </>
  )
}

export default Home
