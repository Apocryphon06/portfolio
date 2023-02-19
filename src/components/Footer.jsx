import React from 'react'

import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import Separator from './Separator'

function Footer() {
  return (
    <>
      <Separator />
      <div className="p-10 font-sans grid lg:grid-flow-col grid-3 gap-5 justify-between items-center">
        <div> &#169; 2023 Apocryphon06. All Rights Reserved</div>

        <a
          href="mailto:hrithikchandrashkear@gmail.com"
          className="hover:underline"
        >
          hrithikchandrashekar@gmail.com
        </a>

        <div className="grid grid-flow-col grid-4 lg:gap-10 gap-5">
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
    </>
  )
}

export default Footer
