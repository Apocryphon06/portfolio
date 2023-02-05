import React, { useState } from 'react'
import Slider from '../Slider'

function Projects() {
  const [my_swiper, set_my_swiper] = useState({})
  const handleSwiper = (ev) => {
    set_my_swiper(ev)
  }

  const projects = [
    {
      name: '',
      url: '',
      link:'',
      img: '',
    },
    {
      name: '',
      url: '',
      link:'',
      img: '',
    },
    {
      name: '',
      url: '',
      link:'',
      img: '',
    },
    {
      name: '',
      url: '',
      link:'',
      img: '',
    },
    {
      name: '',
      url: '',
      link:'',
      img: '',
    },
    {
      name: '',
      url: '',
      link:'',
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
