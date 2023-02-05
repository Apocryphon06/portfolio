import React, { useState } from 'react'
import Slider from '../Slider'

function Projects() {
  const [my_swiper, set_my_swiper] = useState({})
  const handleSwiper = (ev) => {
    set_my_swiper(ev)
  }

  const projects = [
    {
      name: 'To do',
      url: '',
      img: '',
    },
    {
      name: '',
      url: '',
      img: '',
    },
    {
      name: '',
      url: '',
      img: '',
    },
    {
      name: '',
      url: '',
      img: '',
    },
    {
      name: '',
      url: '',
      img: '',
    },
    {
      name: '',
      url: '',
      img: '',
    },
  ]
  return (
    <div>
      <Slider
        my_swiper={my_swiper}
        handleSwiper={handleSwiper}
        content={projects}
      />
    </div>
  )
}

export default Projects
