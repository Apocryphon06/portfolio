import '../../App.css'
import React from 'react'

import react from '../../assets/skills/react.svg'
import html from '../../assets/skills/html.svg'
import css from '../../assets/skills/css.svg'
import tailwind from '../../assets/skills/tailwind.svg'
import javascript from '../../assets/skills/javascript.svg'
import typescript from '../../assets/skills/typescript.svg'
import Heading from '../Heading'

function Skills() {
  const skills = [
    {
      name: 'React',
      src: react,
      level: 95,
    },
    {
      name: 'HTML',
      src: html,
      level: 90,
    },
    {
      name: 'CSS',
      src: css,
      level: 89,
    },
    {
      name: 'Javascript',
      src: javascript,
      level: 92,
    },
    {
      name: 'Typescript',
      src: typescript,
      level: 78,
    },
    {
      name: 'Tailwind',
      src: tailwind,
      level: 82,
    },
  ]

  return (
    <div>
      <Heading title="My Advantage" />

      <div className="grid grid-flow-col grid-6 gap-10 p-10 items-center overflow-x-scroll lg:h-[80vh] h-[50vh]">
        {skills.map((item) => (
          <div
            key={item}
            className="flex flex-col justify-center items-center border p-5 lg:h-[300px] lg:py-5 px-10 rounded-full bg-[#dfdfdf]"
          >
            <img
              className="toggleBg"
              width={100}
              src={item.src}
              alt={item.name}
            />
            <br />
            <p className="text-[#0b0b0b] text-[32px]">{item.level}%</p>
            <p className="">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
