import React, { useState } from 'react'
import Slider from '../Slider'

import todo from '../../assets/todo.svg'
import eden from '../../assets/eden.svg'
import whatsapp from '../../assets/images/whatsapp.png'
import starbucks from '../../assets/images/starbucks.png'

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
      img: todo,
    },

    {
      name: 'Starbucks Landing Page',
      type: 'Website Design',
      url: 'https://apocryphon06.github.io/totalitycorp-frontend-challenge/',
      img:
        'https://apocryphon06.github.io/totalitycorp-frontend-challenge/static/media/latte.2664ea9c171db10378b5.jpg',
    },
    {
      name: 'Eden',
      type: 'Website Design',
      url: 'https://apocryphon06.github.io/ui-flow/',
      img: eden,
    },
    {
      name: 'Whatsapp Clone',
      type: 'Website Design',
      url: 'https://apocryphon06-whatsapp-clone.netlify.app',
      img:
        'https://images.unsplash.com/photo-1642724978334-218b27d2c472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdoYXRzYXBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
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
