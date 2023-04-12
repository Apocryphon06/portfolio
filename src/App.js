import './App.css'
import React, { Fragment } from 'react'
import Skills from './components/pages/Skills'
import Navbar from './components/Navbar'
import Portfolio from './components/pages/Portfolio'
import Separator from './components/Separator'
import Education from './components/pages/Education'
import Footer from './components/Footer'
import Heading from './components/Heading'

// import todo from './assets/images/todo.png'
import hexa from './assets/images/hexa.png'
import linkedin from './assets/images/linkedin.png'
import zaincare from './assets/images/zaincare.png'

import amazon from './assets/images/amazon.png'
// import netflix from './assets/images/netflix.png'
import whatsapp from './assets/images/whatsapp.png'
// import checkout from './assets/images/checkout.png'
import starbucks from './assets/images/starbucks.png'

const projects = [
  {
    id: 1,
    title: 'hexa',
    description: 'landing page',
    link: 'https://apocryphon06-ai-landing-page.netlify.app',
    img: hexa,
  },
  {
    id: 2,
    title: 'linkedin clone',
    description: 'website redesign',
    link: 'https://endearing-parfait-31c67f.netlify.app',
    img: linkedin,
  },
  {
    id: 3,
    title: 'starbucks',
    description: 'website design',
    link: 'https://apocryphon06.github.io/totalitycorp-frontend-challenge/',
    img: starbucks,
  },
  // {
  //   id: 4,
  //   title: 'simple order checkout',
  //   description: 'order checkout',
  //   link: 'https://apocryphon06-order-checkout.netlify.app',
  //   img: checkout,
  // },
  {
    id: 5,
    title: 'zaincare',
    description: 'web application',
    link: 'https://zaincare.scube.me',
    img: zaincare,
  },
  // {
  //   id: 6,
  //   title: 'whatsapp clone',
  //   description: 'website design',
  //   link: 'https://apocryphon06-whatsapp-clone.netlify.app',
  //   img: whatsapp,
  // },
  // {
  //   id: 7,
  //   title: 'to do',
  //   description: 'website design',
  //   link: 'https://apocryphon06-todo.netlify.app',
  //   img: todo
  // },
  {
    id: 8,
    title: 'whatsapp clone',
    description: 'website design',
    link: 'https://apocryphon06-whatsapp-clone.netlify.app',
    img: whatsapp,
  },
  {
    id: 9,
    title: 'amazon clone',
    description: 'website design',
    link: 'https://apocryphon06-amazon-clone.netlify.app',
    img: amazon,
  },
]

function App() {
  return (
    <Fragment>
      <div className="flex flex-col">
        <Navbar />
        <Portfolio />
        <Separator />
        <br />
        <Skills />
        <Separator />
        <Education />
        <Separator />

        <div className="px-10">
          <Heading title="Projects" />

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 items-center mt-[100px]">
            {projects.map((item) => (
              <div className="flex flex-col border p-5 rounded-sm hover:scale-[0.9] cursor-pointer transition-all">
                <a href={item.link} target="__blank">
                  <img
                    src={item.img}
                    alt={item.img}
                    className="object-fit bg-[#dfdfdf] shadow-md rounded-sm"
                  />
                </a>
                  <p className="uppercase tracking-widest font-sans lg:text-xl text-lg py-2 font-semibold">
                    {item.title}
                  </p>
                  
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </Fragment>
  )
}

export default App
