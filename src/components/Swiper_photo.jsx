import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'

import '../css/Swiper_photo.css'

import { Autoplay, EffectCards } from 'swiper/modules'

export default function Swiper_photo({ slides }) {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        modules={[Autoplay, EffectCards]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="card-content">
              <img
                src={slide.src}
                alt=""
                width={'90px'}
              />
              <h4>{slide.text}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
