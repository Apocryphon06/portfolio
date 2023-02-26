import React from 'react'
import me from '../../assets/images/me.jpg'
import Intro from '../Intro'

function Portfolio() {
  return (
    <div >
      <Intro />
      <div className="p-10 grid lg:grid-flow-col grid-flow-row gap-5 grid-3 items-center">
        <div className="flex flex-col">
          <div>
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
          </div>

          <div>
            <p className="text-[#dadada] text-lg py-10">CONTACT</p>

            <p className="text-[#0b0b0b] font-serif text-xl">
              Bangalore, Karnataka
              <br />
            </p>
            <p className="text-[#0b0b0b] font-serif text-xl">
              hrithikchandrashekar@gmail.com <br />
            </p>
            <p className="text-[#0b0b0b] text-xl">+91 9731816547</p>
          </div>

          <div>
            <p className="text-[#dadada] text-lg py-10">SERVICES</p>

            <p className="text-[#0b0b0b] font-serif text-xl">Website Design</p>
            <p className="text-[#0b0b0b] font-serif text-xl">
              Single Page Application
            </p>
          </div>
        </div>

          
        <div id="portfolio" >
          <img
            className=" border p-5 rounded-[250px]"
            width={400}
            src={me}
            alt={me}
          />
        </div>

        <div>
          <div className="flex flex-col">
            <div className=" justify-end text-end">
              <p className="text-[#dadada] text-lg">
                YEARS OF <br /> EXPERIENCE
              </p>
              <br />

              <p className="text-[#0b0b0b] text-[44px]">02</p>
            </div>

            <br />

            <div className=" justify-end text-end">
              <p className="text-[#dadada] text-lg">
                PROJECTS <br /> DONE
              </p>
              <br />

              <p className="text-[#0b0b0b] text-[44px]">06</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
