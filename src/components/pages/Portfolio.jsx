import React from 'react'
import me from '../../assets/images/me.jpg'
import Intro from '../Intro'
import { motion } from 'framer-motion'

function Portfolio() {
  return (
    <div>
      <Intro />
      <div className="p-10 grid lg:grid-flow-col grid-flow-row gap-5 grid-3 items-center">
        <div className="flex flex-col">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#dadada] text-lg py-10">BIOGRAPHY</p>
            <p className="text-[#0b0b0b] font-serif text-xl">
              Work for money and <br /> design for love! I'm Hrithik,
              <br />
            </p>
            <p className="text-[#0b0b0b] font-serif text-xl">
              a Frontend Developer <br />
            </p>
            <p className="text-[#0b0b0b] font-serif text-xl">
              based in Bangalore
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-[#dadada] text-lg py-10">CONTACT</p>

            <p className="text-[#0b0b0b] font-serif text-xl">
              Bangalore, Karnataka
              <br />
            </p>
            <p className="text-[#0b0b0b] font-serif text-xl">
              hrithikchandrashekar@gmail.com <br />
            </p>
            <p className="text-[#0b0b0b] text-xl">+91 9731816547</p>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <p className="text-[#dadada] text-lg py-10">SERVICES</p>

            <p className="text-[#0b0b0b] font-serif text-xl">Website Design</p>
            <p className="text-[#0b0b0b] font-serif text-xl">
              Single Page Application
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: -100, opacity: 1 }}
          transition={{ stiffness: 10, duration: 2 }}
          id="portfolio"
        >
          <img
            className=" border p-5 rounded-[250px]"
            width={400}
            src={me}
            alt={me}
          />
        </motion.div>

        <div>
          <div className="flex flex-col">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className=" justify-end text-end"
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#dadada] text-lg">
                YEARS OF <br /> EXPERIENCE
              </p>
              <br />

              <p className="text-[#0b0b0b] text-[44px]">02</p>
            </motion.div>

            <br />

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className=" justify-end text-end"
            >
              <p className="text-[#dadada] text-lg">
                PROJECTS <br /> DONE
              </p>
              <br />

              <p className="text-[#0b0b0b] text-[44px]">10</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
