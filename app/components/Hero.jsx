'use client'
import React from 'react'
import { saveAs } from 'file-saver'
import {BiLinkExternal} from 'react-icons/bi'
const Hero = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1hx5Lg2n-HgUw6TQnkvOQQ1ceEbh8QuH9/view?usp=sharing",
      "example.pdf"
    );
  };
  return (
    <div className='w-full py-10 flex flex-col items-center justify-center'>
      <p className='font-display text-6xl'>Dipen Kalsi</p>
      <p className='mt-4 text-xl font-body font-light text-center px-2'> Student, Software Developer and much more...</p>
      <div className='flex items-center justify-around mt-6'>
        <button onClick={saveFile} className=' text-white bg-black flex items-center justify-center space-x-2 px-3 py-2 rounded hover:bg-sky-800 transition'>
          <p>Resume</p>
          <BiLinkExternal/>
        </button>
      </div>
      <p className='mt-5 font-display text-lg text-center px-2 italic'>Just a guy with a passion for problem solving.</p>
      <p className='font-display text-lg text-center px-2 italic'>And the potential to reach the skies.</p>
      <p className='font-display text-lg text-center px-2 italic'>Minimalistic in nature but not when it comes to dreaming.</p>
      <p className='font-display text-lg text-center px-2 italic'>Based in <span className='text-red-700 font-semibold'>New Delhi, India.</span> </p>
    </div>
  )
}

export default Hero
