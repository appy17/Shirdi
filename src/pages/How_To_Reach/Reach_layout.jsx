import React from 'react'
import HowToreach from './how_To_reach'
import Navbar from '../../components/Navbar'
import Social from '../../components/social-icon/Social'
import Footer from '../../components/Footer'
function Reach_layout({children}) {
  return (
    <div >
         <Navbar/>
         <Social/>
         <HowToreach/>
         {children}
         <Footer/>
    </div>
  )
}

export default Reach_layout