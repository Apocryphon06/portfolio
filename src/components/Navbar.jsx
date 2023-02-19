import React from 'react'

import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'

import menu from '../assets/menu.svg'

function Navbar() {
  const handleClickScroll = (section) => {
    const element = document.getElementById('portfolio');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-row justify-between items-center px-10 py-20">
      <img
        className="sm:hidden block lg:hidden md:hidden cursor-pointer "
        src={menu}
        alt={menu}
      />

      <div className="lg:grid md:grid hidden grid-flow-col grid-4 gap-10">
        <p className="cursor-pointer text-md hover:underline">HOME</p>
        <p onClick={handleClickScroll} className="cursor-pointer text-md hover:underline">PORTFOLIO</p>
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
        <a href="https://www.facebook.com/hrithik.ch">
          <img
            // width={50}
            className="cursor-pointer "
            src={facebook}
            alt={facebook}
          />
        </a>
        <img
          // width={50}
          className="cursor-pointer "
          src={instagram}
          alt={instagram}
        />
        
        <a href="https://github.com/Apocryphon06">
        <img
          // width={50}
          className="cursor-pointer "
          src={github}
          alt={github}
        />
        </a>

        <a href="https://www.linkedin.com/in/hrithik-chandrashekar-397b43177/">
          <img
            // width={50}
            className="cursor-pointer "
            src={linkedin}
            alt={linkedin}
          />
        </a>
      </div>
    </div>
  )
}

export default Navbar
