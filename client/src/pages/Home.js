import React from "react"
import Computer from "../components/Home/Comp"
import Tablet from "../components/Home/Tablet"
import Mobile from "../components/Home/Mobile"


function Home() {


  return (
    <>
    <h1 class="font-monospace text-center m-4 fs-1 fw-bold" > HomePage</h1>
      <Computer />

      <Mobile />
      <Tablet />
    </>
  )
}

export default Home