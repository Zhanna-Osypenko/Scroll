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
    <div className="mx-auto max-w-[1133px] py-10 bg-gray-900">
      <div className="flex items-center justify-center flex-col bg-gray-900">
        <h1 className="font-semibold text-yellow-500 text-2xl md:text-4xl lg:text-5xl p-2">
          Looking for something... specific?
        </h1>
        <p className="text-white text-xl md:text-2xl pb-8 pt-4">
          Here is what we suggest
        </p>
      </div>
      <div className="logos bg-gray-900 overflow-hidden whitespace-nowrap relative">
        <div className="logos-slide" ref={slideRef}>
          {cards.map((card, index) => (
            <div className="w-40 h-44 md:w-64 md:h-72" key={index}>
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                backgroundImage={card.backgroundImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
