import React from 'react'

import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'

import menu from '../assets/menu.svg'

function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center px-10 py-20">
      <img className='sm:hidden block lg:hidden md:hidden ' src={menu} alt={menu} />

      <div className="lg:grid md:grid hidden grid-flow-col grid-4 gap-10">
        <p className="cursor-pointer text-md hover:underline">HOME</p>
        <p className="cursor-pointer text-md hover:underline">PORTFOLIO</p>
        <p className="cursor-pointer text-md hover:underline">BLOG</p>
        <p className="cursor-pointer text-md hover:underline">PAGES</p>
      </div>

      <div className="lg:grid md:grid hidden grid-flow-col grid-4 gap-10">
        <img
          // width={50}
          className="cursor-pointer "
          src={twitter}
          alt={twitter}
        />
        <img
          // width={50}
          className="cursor-pointer "
          src={facebook}
          alt={facebook}
        />
        <img
          // width={50}
          className="cursor-pointer "
          src={instagram}
          alt={instagram}
        />
        <img
          // width={50}
          className="cursor-pointer "
          src={github}
          alt={github}
        />
        <img
          // width={50}
          className="cursor-pointer "
          src={linkedin}
          alt={linkedin}
        />
      </div>

    </div>
  )
}

export default Navbar
