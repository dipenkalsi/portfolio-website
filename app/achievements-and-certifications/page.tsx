import React from 'react'
import Header from '../components/Header'
import Achievements from '../components/Achievements'
import Footer from '../components/Footer'
const page = () => {
  return (
    <div className='pb-6'>
      <Header/>
      <Achievements/>
      <Footer/>
    </div>
  )
}

export default page
