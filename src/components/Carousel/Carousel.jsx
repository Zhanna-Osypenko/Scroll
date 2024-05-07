import React, {useEffect, useRef} from "react"
import Card from "../SuggestionsBanner/components/Card"

const Carousel = ({cards}) => {
  const slideRef = useRef(null)

  useEffect(() => {
    const originalSlide = slideRef.current
    const copySlide = originalSlide.cloneNode(true)
    originalSlide.parentNode.appendChild(copySlide)

    return () => {
      copySlide.remove() // Удаляем копию слайда при размонтировании компонента
    }
  }, []) // Создаем дубликат слайда только при монтировании компонента

  return (
    <div className="container">
      <div className="logos">
        <div className="logos-slide" ref={slideRef}>
          {cards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              backgroundImage={card.backgroundImage}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
