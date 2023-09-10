import React from 'react'
import Image from 'next/image'
import {BiLogoMongodb} from 'react-icons/bi'
import {BsGit} from 'react-icons/bs'
import {BiLogoReact} from 'react-icons/bi'
import {BiLogoTailwindCss} from 'react-icons/bi'
import {BsGithub} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'
import Link from 'next/link'
const ProjectCard = ({title, image, deployed, github, description, techStack}) => {
  return (
    <div className='flex flex-col items-center justify-center border border-black px-3 py-3 bg-black text-gray-200 rounded'>
        <div className='flex items-center justify-between w-full'>
            <h1 className='text-xl mb-3'>NFT Marketplace dApp</h1>
            <div className='flex items-center justify-center space-x-3 mb-1.5'>
                <Link href={'/'} className='hover:text-sky-500 transition'><BsGithub size={20 }/></Link>
                <Link href={'/'} className='hover:text-sky-500 transition'><BiLinkExternal size={20}/></Link> 
            </div>
        </div>
      <Image src="/cool-kids-dao.png" width={400} height={300} className='rounded'/>
      <p className='text-center text-xs font-body mt-3 font-light'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda perspiciatis porro id magnam reprehenderit quasi veniam eligendi soluta consequuntur, obcaecati ad voluptas qui cumque culpa sunt aliquam eius quas nulla?
      </p>
      <h1 className='text-center mt-3 mb-2 font-body '>Tech Stack</h1>
      <div className='flex items-center justify-center space-x-3'>
        <BiLogoMongodb size={30}/>
        <BsGit size={30}/>
        <BiLogoReact size={30}/>
        <BiLogoTailwindCss size={30}/>
      </div>
    </div>
  )
}

export default ProjectCard
