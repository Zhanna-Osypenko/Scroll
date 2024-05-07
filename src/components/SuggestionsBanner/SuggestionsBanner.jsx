import React, {useEffect, useState} from "react"
import Card from "./components/Card"
import {ServiceData} from "../../constants/index"
import {useMeasure} from "react-use"
import {motion, useAnimation} from "framer-motion"

const SuggestionsBanner = () => {
  const FAST_DURATION = 25
  const SLOW_DURATION = 75

  const [duration, setDuration] = useState(FAST_DURATION)
  // const [mustFinish, setMustFinish] = useState(false)
  // const [rerender, setRerender] = useState(false)
  let [ref, {width}] = useMeasure()
  const controls = useAnimation()

  useEffect(() => {
    const finalPosition = -width / 2 - 5

    controls.start({
      x: [0, finalPosition],
      transition: {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      },
    })

    return () => controls?.stop()
  }, [controls, width, duration])

  return (
    <div className="py-8">
      <h1 className="py-10">SuggestionsBanner12</h1>
      <motion.div
        className="absolute left-0 flex gap-4"
        ref={ref}
        animate={controls}
        onMouseEnter={() => {
          setDuration(SLOW_DURATION)
        }}
        onMouseLeave={() => {
          setDuration(FAST_DURATION)
        }}
      >
        {[...ServiceData, ...ServiceData].map((item, index) => (
          <Card
            icon={item.icon}
            title={item.title}
            backgroundImage={item.backgroundImage}
            key={index}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default SuggestionsBanner
