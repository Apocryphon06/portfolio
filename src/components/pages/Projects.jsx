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
      type: 'Tasks',
      url: 'https://apocryphon06-todo.netlify.app',
      img: '',
    },
    {
      name: 'Eden',
      type: 'Website Design',
      url: 'https://apocryphon06.github.io/ui-flow/',
      img: '',
    },
    {
      name: 'Landing Page',
      type: 'Website Design',
      url: 'https://apocryphon06.github.io/totalitycorp-frontend-challenge/',
      img: '',
    },
    {
      name: 'Whatsapp Clone',
      type: 'Website Design',
      url: 'https://apocryphon06-whatsapp-clone.netlify.app',
      img: '',
    },
    // {
    //   name: 'Splitwise Clone',
    //   type: 'Website Design',
    //   url: 'https://apocryphon06-splitwise-clone.netlify.app/',
    //   img: '',
    // },
    
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
