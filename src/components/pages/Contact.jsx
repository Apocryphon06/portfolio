import React from 'react'

import arrow_60 from '../../assets/arrow_60.svg'

function Contact() {
  return (
    <div className=" flex flex-col text-start m-auto">
      <p className="uppercase text-xs text-[#656565]">
        Describe your <br />
        Project
      </p>
      <br />
      <p className="text-[#000] lg:text-6xl text-4xl font-serif hover:text-[green] cursor-pointer">
        Call <br />
        Hrithik
      </p>
      <br />
      <img width={50} src={arrow_60} alt={arrow_60} />
    </div>
  )
}

export default Contact
