import React from 'react'
import {TbBrandCpp} from 'react-icons/tb'
import {FaJava} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {BiLogoMongodb} from 'react-icons/bi'
import {BsGit} from 'react-icons/bs'
import {BiLogoReact} from 'react-icons/bi'
import {BiLogoTailwindCss} from 'react-icons/bi'
import {TbBrandNextjs} from 'react-icons/tb';
import {SiMui} from 'react-icons/si'
import {SiRedux} from 'react-icons/si'
import {BiLogoNodejs} from 'react-icons/bi'
import {BiLogoFirebase} from 'react-icons/bi'
import {SiSanity} from 'react-icons/si'
import {SiAlchemy} from 'react-icons/si'
import {FaStripe} from 'react-icons/fa'
import {BiLogoVisualStudio} from 'react-icons/bi'
import {SiIntellijidea} from 'react-icons/si'
import {SiReplit} from 'react-icons/si'
import {SiSublimetext} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

const Skills = () => {
  return (
    <div className='mt-12'>
        {/* technical skills  */}
      <h1 className='font-display text-4xl mb-5 font-bold'>Technical Skills</h1>
        <div className='flex flex-col md:flex-row md:flex-wrap space-y-8 md:space-x-20 md:space-y-0 items-center md:items-start justify-center flex-wrap'>
            {/* languages */}
            <div className='flex flex-col items-center justify-center space-y-4  border border-black rounded py-3 px-3 mx-2 md:mx-0'>
                <h1 className='text-3xl text-sky-800'>
                    Languages
                </h1>
                <div className='flex flex-col items-center justify-center space-y-6'>

                <div className=' flex items-center justify-center space-x-12'>
                    <div className='cursor-pointer hover:text-sky-800 transition'>
                    <TbBrandCpp size={50}/>
                    <p className='font-bold'>9/10</p>
                    </div>
                    <div className='cursor-pointer hover:text-sky-800 transition'>
                    <FaJava size={50}/>
                    <p className='font-bold'>7/10</p>
                    </div>
                </div>
                <div className=' flex items-center justify-center space-x-12 '>
                <div className='cursor-pointer hover:text-sky-800 transition'>
                    <SiJavascript size={50}/>
                    <p className='font-bold'>8/10</p>
                    </div>
                    <div className='cursor-pointer hover:text-sky-800 transition'>
                    <SiTypescript size={50}/>
                    <p className='font-bold'>6/10</p>
                    </div>
                </div>
                </div>
            </div>
            {/* IDEs */}
            <div className='flex flex-col items-center justify-center space-y-4 border border-black rounded py-3 px-3 mx-2 md:mx-0'>
                <h1 className='text-3xl text-sky-800 '>
                    IDEs
                </h1>
                <div className='flex flex-col items-center justify-center space-y-6'>

                <div className=' flex items-center justify-center space-x-12'>
                    <div className='cursor-pointer hover:text-sky-800 transition'>
                    <BiLogoVisualStudio size={50}/>
                    <p className='font-bold'>9/10</p>
                    </div>
                    <div className='cursor-pointer hover:text-sky-800 transition'>
                    <SiIntellijidea size={50}/>
                    <p className='font-bold'>7/10</p>
                    </div>
                </div>
                <div className=' flex items-center justify-center space-x-12 '>
                <div className='cursor-pointer hover:text-sky-800 transition'>
                    <SiReplit size={50}/>
                    <p className='font-bold'>8/10</p>
                    </div>
                    <div className='cursor-pointer hover:text-sky-800 transition'>
                    <SiSublimetext size={50}/>
                    <p className='font-bold'>8/10</p>
                    </div>
                </div>
                </div>
            </div>
            {/* web dev */}
            <div className='flex flex-col items-center justify-center space-y-4 border border-black rounded py-3 px-3 mx-2 md:mx-0'>
                <h1 className='text-3xl text-sky-800'>
                    Web Development
                </h1>
                <div className='flex flex-col items-center justify-center space-y-6'>

                <div className=' flex items-center justify-center space-x-12'>
                    <div className='cursor-pointer hover:text-sky-800 transition'>
                    <BiLogoReact size={50}/>
                    <p className='font-bold'>9/10</p>
                    </div>
                    <div className='cursor-pointer hover:text-sky-800 transition'>
                    <TbBrandNextjs size={50}/>
                    <p className='font-bold'>9/10</p>
                    </div>
                    <div className='cursor-pointer hover:text-sky-800 transition'>
                    <BiLogoTailwindCss size={50}/>
                    <p className='font-bold'>9/10</p>
                    </div>
                </div>
                <div className=' flex items-center justify-center space-x-12 '>
                <div className='cursor-pointer hover:text-sky-800 transition'>
                    <BiLogoNodejs size={50}/>
                    <p className='font-bold'>8/10</p>
                    </div>
                    <div className='cursor-pointer hover:text-sky-800 transition'>
                    <SiMui size={50}/>
                    <p className='font-bold'>6/10</p>
                    </div>
                    <div className='cursor-pointer hover:text-sky-800 transition'>
                    <SiRedux size={50}/>
                    <p className='font-bold'>7/10</p>
                    </div>
                </div>
                </div>
            </div>
            {/* SDKs */}
            <div className='flex flex-col items-center justify-center space-y-4 border border-black rounded py-3 px-3 mx-2 md:mx-0'>
                <h1 className='text-3xl text-sky-800'>
                    SDKs
                </h1>
                <div className='flex flex-col items-center justify-center space-y-6'>

                <div className=' flex items-center justify-center space-x-12'>
                    <div className='cursor-pointer hover:text-sky-800 transition'>
                    <BiLogoFirebase size={50}/>
                    <p className='font-bold'>7/10</p>
                    </div>
                    <div className='cursor-pointer hover:text-sky-800 transition'>
                    <SiSanity size={50}/>
                    <p className='font-bold'>7/10</p>
                    </div>
                </div>
                <div className=' flex items-center justify-center space-x-12 '>
                <div className='cursor-pointer hover:text-sky-800 transition'>
                    <SiAlchemy size={50}/>
                    <p className='font-bold'>8/10</p>
                    </div>
                    <div className='cursor-pointer hover:text-sky-800 transition'>
                    <FaStripe size={50}/>
                    <p className='font-bold'>7/10</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row md:flex-wrap md: mt-8 space-y-8 md:space-x-20 md:space-y-0 items-center md:items-start justify-center flex-wrap'>
            {/* Databases */}
            <div className='flex flex-col items-center justify-center space-y-4 border border-black rounded py-3 px-3 mx-2 md:mx-0'>
                <h1 className='text-3xl text-sky-800'>
                    Databases
                </h1>
                <div className='flex flex-col items-center justify-center space-y-6'>

                <div className=' flex items-center justify-center space-x-12'>
                    <div className='cursor-pointer hover:text-sky-800 transition'>
                    <SiMysql size={50}/>
                    <p className='font-bold'>9/10</p>
                    </div>
                    <div className='cursor-pointer hover:text-sky-800 transition'>
                    <BiLogoMongodb size={50}/>
                    <p className='font-bold'>7/10</p>
                    </div>
                </div>
               
                </div>
            </div>
            
            {/* Source control */}
            <div className='flex flex-col items-center justify-center space-y-4 border border-black rounded py-3 px-3 mx-2 md:mx-0'>
                <h1 className='text-3xl text-sky-800'>
                    Source Control
                </h1>
                <div className='flex flex-col items-center justify-center space-y-6'>

                <div className=' flex items-center justify-center space-x-12'>
                    <div className='cursor-pointer hover:text-sky-800 transition'>
                    <BsGithub size={50}/>
                    <p className='font-bold'>7/10</p>
                    </div>
                    <div className='cursor-pointer hover:text-sky-800 transition'>
                    <BsGit size={50}/>
                    <p className='font-bold'>7/10</p>
                    </div>
                </div>
               
                </div>
            </div>
        </div>
        

        {/* general skills */}
        <div className='mt-12'>
            <h1 className='font-display text-4xl font-bold mb-5'>General Skills</h1>
            <div className='flex flex-col md:flex-row md:flex-wrap space-y-8 md:space-x-20 md:space-y-0 items-center md:items-start justify-center flex-wrap mt-3'>
                {/* leadership */}
                <div className='flex flex-col items-center justify-center md:w-1/4 border border-black rounded py-3 px-3 mx-2 md:mx-0'>
                    <h1 className='text-3xl text-sky-800'>Leadership</h1>
                    <p className='text-center p-2'>Took charge in organizing various webinars and hackathons in college as a part of College clubs and societies.</p>
                </div>
                {/* content writing */}
                <div className='flex flex-col items-center justify-center md:w-1/4 border border-black rounded py-3 px-3 mx-2 md:mx-0'>
                    <h1 className='text-3xl text-sky-800'>Content writing</h1>
                    <p className='text-center p-2'>Written promotional and advertising content for various events as a part of College clubs and societies.</p>
                </div>
                {/* public relations */}
                <div className='flex flex-col items-center justify-center md:w-1/4 border border-black rounded py-3 px-3 mx-2 md:mx-0'>
                    <h1 className='text-3xl text-sky-800'>Public Relations</h1>
                    <p className='text-center p-2'>Have conducted on-site promotions and contacted various sponsors for the events of college societies.</p>
                </div>
            </div>
        </div>

        {/* positions of responsability */}
        <div className='mt-12'>
            <h1 className='font-display text-4xl font-bold mb-5'>Positions of Responsibility</h1>
            <div className='flex flex-col md:flex-row md:flex-wrap space-y-8 md:space-x-20 md:space-y-0 items-center md:items-start justify-center flex-wrap mt-3'>
                {/* prheada csi mait */}
                <div className='flex flex-col items-center justify-center md:w-1/3 border border-black rounded py-3 px-3 mx-2 md:mx-0 '>
                    <h1 className='text-2xl text-sky-800 '>PR head @ CSI chapter MAIT</h1>
                    <p className='text-center p-2'>Organized orientation sessions, interactions sessions, webinars, meetups and much more at the Computer Society of India MAIT chapter.</p>
                </div>
                {/* founding member techXtract */}
                <div className='flex flex-col items-center justify-center md:w-1/3 border border-black rounded py-3 px-3 mx-2 md:mx-0'>
                    <h1 className='text-2xl text-sky-800'>Founding Member, TechXtract</h1>
                    <p className='text-center p-2'>Organized events, Hackathons and flagship events of the Institute with TechXtract MAIT, the official society of CST dept.</p>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Skills
