import React from "react"
import {useEffect, useState} from "react"
import "./style/App.css"
import Header from "./components/Header"
import axios from "axios"
// import ScrollComponent from "./components/Scroll"

const App = () => {
  const [photos, setPhotos] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    if (fetching) {
      console.log("fetching")
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`
        )
        .then((response) => {
          setPhotos([...photos, ...response.data])
          setCurrentPage((prevState) => prevState + 1)
          setTotalCount(response.headers["x-total-count"])
        })
        .finally(() => setFetching(false))
    }
  }, [fetching, currentPage, photos])

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)
    return function () {
      document.removeEventListener("scroll", scrollHandler)
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        200 &&
      photos.length < totalCount
    ) {
      setFetching(true)
    }
  }

  return (
    <>
      <Header />
      <div className="photo-box">
        {photos.map((photo, index) => (
          <div className="photo" key={index}>
            <div className="title">
              {photo.id}. {photo.title}
            </div>
            <div className="img-box">
              <img src={photo.thumbnailUrl} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
