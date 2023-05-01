import '../../App.css'
import React from 'react'

import react from '../../assets/skills/react.svg'
import html from '../../assets/skills/html.svg'
import css from '../../assets/skills/css.svg'
import tailwind from '../../assets/skills/tailwind.svg'
import javascript from '../../assets/skills/javascript.svg'
import typescript from '../../assets/skills/typescript.svg'
import Heading from '../Heading'
import { motion } from 'framer-motion'

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
    <div id="skills">
      <Heading title="My Advantage" />

      <div className="grid grid-flow-col grid-6 gap-10 p-10 items-center overflow-x-scroll lg:h-[80vh] h-[50vh]">
        {skills.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: [1.1, 1.2, 1] }}
            transition={{ delay: index * 0.1 }}
            key={item}
            className="flex flex-col justify-center items-center border p-5 lg:h-[300px] lg:py-5 px-10 rounded-full bg-[#dfdfdf]"
          >
            <img className="" width={100} src={item.src} alt={item.name} />
            <br />
            <p className="text-[#0b0b0b] text-[32px]">{item.level}%</p>
            <p className="">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
