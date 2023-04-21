import React from 'react'
import Heading from '../Heading'

const Projects = ({projects}) => {
  return (
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
  )
}

export default Projects