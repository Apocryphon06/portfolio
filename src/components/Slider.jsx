import React, { useEffect, useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import arrow from '../assets/icons/arrow.svg'

import './slider.css'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper'
import Card from './Card'

export default function Slider({ content, my_swiper, handleSwiper }) {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    // dynamicHeight: window.innerHeight
  })
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      //   dynamicHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension)

    return () => {
      window.removeEventListener('resize', setDimension)
    }
  }, [screenSize])

  return (
    <div className=" lg:h-[100vh] flex justify-center items-center p-5 gap-5">
      <img
        onClick={() => {
          my_swiper.slidePrev()
        }}
        src={arrow}
        // className='sm:flex lg:hidden md:hidden m-auto cursor-pointer'
        className=" m-auto cursor-pointer"
        alt=""
      />
      <Swiper
        onInit={handleSwiper}
        // initialSlide={0}
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={screenSize.dynamicWidth < 768 ? true : false}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[ Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}

        
        breakpoints={{
          640: {
            width: 768,
            slidesPerView: 1.5,
          },
          768: {
            width: 1024,
            slidesPerView: 3,
          },
          936: {
            width: 1024,
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        {content.map((item, index) => {
          return (
            <SwiperSlide key={'slider' + index}>
              <Card
                name={item.name}
                url={item.url}
                description={item.description}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>

      <img
        onClick={() => {
          my_swiper.slideNext()
        }}
        src={arrow}
        // className='sm:flex lg:hidden md:hidden m-auto cursor-pointer rotate-180'
        className=" m-auto cursor-pointer rotate-180"
        alt=""
      />
    </div>
  )
}
