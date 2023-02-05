import React from 'react'


import contact from '../../assets/contact.svg'
import arrow_60 from '../../assets/arrow_60.svg'

function Contact() {
  return (
    <div className='grid lg:grid-flow-col grid-flow-row justify-center'>

    
      <img width={700} src={contact} alt={contact}/>
      <div className=" flex flex-col text-start m-auto">
      <p className="uppercase text-xs text-[#656565]">
        Describe your <br />
        Project
      </p>
      <br />
      <p className="text-[#000] lg:text-6xl text-4xl font-serif hover:text-[orangeRed] transition-all cursor-pointer">
        Call <br />
        Hrithik
      </p>
      <br />
      <img width={50} src={arrow_60} alt={arrow_60} />
    </div>
    </div>
  )
}

export default Contact
