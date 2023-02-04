import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'

import Portfolio from './components/pages/Portfolio'
import Education from './components/pages/Education'

function Layout() {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <Navbar />
      <Parallax pages={3}>
        <ParallaxLayer speed={1.5}>
          <Intro />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2.5}>
          <Portfolio />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={2.5}>
          <Education />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Layout
