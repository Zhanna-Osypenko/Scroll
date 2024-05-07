import React, {useState} from "react"

const Card = ({icon: Icon, title, backgroundImage}) => {
  const [showOverlay, setShowOverlay] = useState(false)

  return (
    <div
      className="group relative overflow-hidden mx-auto flex h-250 min-w-200 cursor-pointer flex-col gap-6  rounded-xl px-6 py-8 text-white shadow-lg lg:h-400 lg:w-350"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      {showOverlay && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center"
          style={{opacity: 1}}
        >
          <div className="pointer-events-none absolute h-full w-full bg-black opacity-50"></div>
        </div>
      )}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{backgroundImage: `url(${backgroundImage})`}}
      ></div>

      <div className="relative flex flex-col items-center justify-center gap-16">
        <Icon className="h-24 w-24 text-blue-100 group-hover:text-blue-400" />
        <h1 className="text-xl lg:text-6xl">{title}</h1>
      </div>
    </div>
  )
}

export default Card
