import React from 'react'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
const page = () => {
  return (
    <div>
      <Header className='glass'/>
      <div className='flex flex-col items-center justify-center text-center px-2 py-5 font-body font-thin'>
        <h1 className='font-display text-4xl font-bold'>
          Summary
        </h1>
        <p className='mt-3 text-lg'>
          My name is <span className='text-xl italic font-display font-semibold'>Dipen Kalsi. </span>
        </p>
        <p className='text-lg'>
          I am a 3rd year B-Tech student in Computer Science and Technology at Maharaja Agrasen Institute of Technology, Delhi.
        </p>
        <p className='text-lg'>
          I am a passionate programmer, Software developer and problem solver. I love to keep myself engaged with new stuff.
        </p>
        <p className='text-lg'>
          I have about 3 years of experience in programming with C++, JS and many other tools and languages.
        </p>
        <p className='text-lg'>
          I like to believe there is nothing I cannnot achieve if I put my body and mind into it.
        </p>
        <p className='text-lg'>
          I am also into competitive programming as a sport.
        </p>
        <p className='text-lg'>
          In my spare time I like to play chess and listen to music.
        </p>
        <p className='text-lg'>
          2 years from now, I see myself working at a FAANG level product based company at an SDE/SWE role.
        </p>
        <Skills/>
        <Footer/>
      </div>
    </div>
  )
}

export default page
