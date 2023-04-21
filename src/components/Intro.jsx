import React from 'react'
import { motion } from 'framer-motion'

import Typewriter from 'typewriter-effect'

function Intro() {
  return (
    <motion.div className="py-20 text-[#0b0b0b] lg:h-screen">
      {/* <p className="lg:text-[55px] text-[32px] font-serif text-center tracking-wide">
        Hrithik Chandrashekar
      </p>
      <p className="lg:text-[55px] text-[32px] font-serif text-center">
        Frontend Developer
      </p>
      <p className="lg:text-[55px] text-[32px] font-serif text-center">
        Based in Bangalore
      </p> */}

      <div className="text-[#0b0b0b] text-center lg:text-[55px] font-serif tracking-wide w-[600px] m-auto">
        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                'Hrithik Chandrashekar Frontend Developer Based in Bangalore',
              )
              .pauseFor(1000)
              // .deleteAll()
              .start()
          }}
        />
      </div>
    </motion.div>
  )
}

export default Intro
