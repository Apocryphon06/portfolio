import React from 'react'

import matrix from '../assets/images/matrix.jpg'

import '../App.css'

function Card({ name, url, description }) {
  return (
    <div className="cardImg flex flex-col text-[#dfdfdf] hover:text-[#000] transition-all ease-in-out delay-150">
      <img src={`https://picsum.photos/id/212/400`} alt={matrix} />
      <br/>
      <p className='uppercase lg:text-lg text-md'>Website</p>
      <p className='lg:text-2xl text-lg'>Whatsapp clone</p>
    </div>
  )
}

export default Card
