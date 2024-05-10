import React from "react"
import "./style/App.css"
import {ServiceData} from "./constants"
import ActiveSlider from "./components/ActiveSlider"
import Carousel from "./components/Carousel/Carousel"
import QuoteBanner from "./components/QuoteBanner/QuoteBanner"
// import SuggestionsBanner from "./components/SuggestionsBanner/SuggestionsBanner"

const App = () => {
  return (
    <>
      <ActiveSlider />
      <Carousel cards={ServiceData} />
      <QuoteBanner />
    </>
  )
}

export default App
