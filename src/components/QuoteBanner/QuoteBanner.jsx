import React from "react"

const QuoteBanner = () => {
  return (
    <div>
      <div className="mx-auto max-w-[1133px] py-10 px-2 bg-gray-900">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:grid-rows-2 md:gap-8">
          <div className=" col-span-2 rounded-[16px] overflow-hidden">
            <img
              src="./image/QuotteBanner2.svg"
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-2 relative">
            <img
              src="./image/QuotteBanner1.svg"
              alt=""
              loading="lazy"
              className="w-full object-cover"
            />
            <p className="absolute bottom-0 left-0 right-0 p-6 text-black font-semibold text-sm leading-[24px] sm:text-2xl md:text-3xl md:leading-[41.98px]">
              Assembling Your Ideal Computer with Unmatched Quality!
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-white text-left text-sm sm:text-xl md:text-2xl md:leading-[41.98px]">
              At PC-EXPERT, we stay ahead with the latest products, closely
              tracking trends to ensure our collection meets your needs — from
              the newest innovations to timeless classics.
            </p>

            <p className="text-white text-right text-sm sm:text-2xl">
              — PC-EXPERT Team
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuoteBanner
