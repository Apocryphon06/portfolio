import React from 'react'

import matrix from '../assets/images/matrix.jpg'

import '../App.css'

function Card({ name, type, url, description }) {
  return (
    <div className="cardImg flex flex-col text-[#dfdfdf] hover:text-[#000] transition-all ease-in-out delay-150 p-1 w-full">
      <a href={url}>
        <img src={`https://picsum.photos/id/212/400`} alt={matrix} />
      </a>
      <br />
      <span>
      <p className="uppercase lg:text-sm text-md">{type}</p>
      <p className="lg:text-xl md:text-md text-md font-sans capitalize">{name}</p>
      </span>
    </div>
  )
}

export default Card
