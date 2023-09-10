'use client'
import React, { useState } from 'react'
import Header from '../components/Header'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Footer from '../components/Footer'

const page = () => {
  const [tab, setTab] = useState('education')
  const handleToggle1 = () =>{
    setTab('education')
  }
  const handleToggle2 = () =>{
    setTab('experience')
  }
  return (
    <div className='pb-6'>
      <Header/>
      <div className='flex items-center justify-center my-12'>
        <div onClick={handleToggle1} className={tab=='education'?'px-12 py-2 border border-black md:text-xl font-display cursor-pointer transition bg-black text-white' : 'px-12 py-2 border border-black md:text-xl font-display cursor-pointer hover:bg-gray-300 transition'}>
          Education
        </div>
        <div onClick={handleToggle2} className={tab=='experience'?'px-12 py-2 border border-black md:text-xl font-display cursor-pointer  transition bg-black text-white' : 'px-12 py-2 border border-black md:text-xl font-display cursor-pointer hover:bg-gray-300 transition'}>
          Experience
        </div>
      </div>
      <div className={tab=='education'?'block':'hidden'}>
      <Education/>
      </div>
      <div className={tab=='experience'?'block':'hidden'}>

      <Experience/>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default page
