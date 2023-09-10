import Link from 'next/link'
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {SiCodeforces} from 'react-icons/si'

const Socials = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <p className='text-3xl'>Check out my work on</p>
      <div className='flex items-center justify-evenly mt-7 space-x-8 flex-wrap'>
        <div className='flex flex-col items-center justify-center'>
            <Link href={'https://github.com/dipenkalsi'} target='_blank' className='flex flex-col items-center justify-center hover:text-sky-800'>
            <BsGithub size={30}/>
            {/* <p className='text-xl'>Github</p> */}
            </Link>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <Link href={'https://twitter.com/DipenKalsi'} target='_blank' className='flex flex-col items-center justify-center hover:text-sky-800'>
            <BsTwitter size={30}/>
            {/* <p className='text-xl'>Twitter</p> */}
            </Link>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <Link href={'https://www.linkedin.com/in/dipen-kalsi-4448b5205/'} target='_blank' className='flex flex-col items-center justify-center hover:text-sky-800'>
            <BsLinkedin size={30}/>
            {/* <p className='text-xl'>LinkedIn</p> */}
            </Link>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <Link href={'https://codeforces.com/profile/kalsidipen'} target='_blank' className='flex flex-col items-center justify-center hover:text-sky-800'>
            <SiCodeforces size={30}/>
            {/* <p className='text-xl'>Codeforces</p> */}
            </Link>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <Link href={'https://leetcode.com/kalsidipen/'} target='_blank' className='flex flex-col items-center justify-center hover:text-sky-800'>
            <SiLeetcode size={30}/>
            {/* <p className='text-xl'>Leetcode</p> */}
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Socials
