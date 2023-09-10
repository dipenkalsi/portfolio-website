import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
const page = () => {
  return (
    <div className='pb-6'>
      <Header/>
      <div className='flex flex-col items-center justify-center mt-6'>
        <h1 className=' text-center text-4xl font-display font-bold'>Projects</h1>
        <div className='w-full'>
          <p className='mt-1 font-body font-thin text-center mx-2'>These are some of my best ones. You can check out all of them on my github.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 px-5'>
              <div className='flex items-center justify-center'>
              <ProjectCard/>
              </div>
              <div className='flex items-center justify-center'>
              <ProjectCard/>
              </div>
              <div className='flex items-center justify-center'>
              <ProjectCard/>
              </div>
              <div className='flex items-center justify-center'>
              <ProjectCard/>
              </div>
              <div className='flex items-center justify-center'>
              <ProjectCard/>
              </div>
              <div className='flex items-center justify-center'>
              <ProjectCard/>
              </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page
