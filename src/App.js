import React from "react"
import "./style/App.css"
import ActiveSlider from "./components/ActiveSlider"
import Carousel from "./components/Carousel/Carousel"
import {ServiceData} from "./constants"
// import SuggestionsBanner from "./components/SuggestionsBanner/SuggestionsBanner"

const App = () => {
  return (
    <>
      <ActiveSlider />
      <Carousel cards={ServiceData} />
      {/* <SuggestionsBanner /> */}
    </>
  )
}

export default App
