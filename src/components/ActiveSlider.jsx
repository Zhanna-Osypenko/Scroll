import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/free-mode"

import {FreeMode, Pagination} from "swiper/modules"
import {ServiceData} from "../constants"

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen bg-gray-900">
      <h1 className="font-semibold text-yellow-500 text-3xl md:text-4xl lg:text-5xl ">
        Looking for something... specific?
      </h1>
      <p className="text-white text-xl pb-8 pt-4">Here is what we suggest</p>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] mx-auto overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: `url(${item.backgroundImage})`}}
              ></div>
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50"></div>
              <div className="relative flex flex-col items-center justify-center gap-16">
                <item.icon className="text-blue-100 group-hover:text-blue-400 w-[48px] h-[48px]" />
                <h1 className="text-xl lg:text-6xl">{item.title}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ActiveSlider
