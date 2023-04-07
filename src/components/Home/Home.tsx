import React from 'react'
import Intro from './Intro'
import Description from './Description'
import Services from './Services'
import HomeFooter from './HomeFooter'
import Footer from '../Reuseable/Footer'

export default function Home() {
  return (
    <div className='dark'>
      <Intro/>
      <Description/>
      <Services/>
      <HomeFooter/>
      <Footer/>
    </div>
  )
}
