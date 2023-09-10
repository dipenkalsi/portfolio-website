import React from 'react'
import Link from 'next/link'
import {BiLinkExternal} from 'react-icons/bi'
import Badge from './Badge'
import {BiLogoMongodb} from 'react-icons/bi'
import {BiLogoReact} from 'react-icons/bi'
import {BiLogoTailwindCss} from 'react-icons/bi'
import {AiFillHtml5} from 'react-icons/ai'
import {FaBootstrap} from 'react-icons/fa'
import {SiPhp} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiRedux} from 'react-icons/si'
import {BiLogoNodejs} from 'react-icons/bi'
const Education = () => {
  return (
    <div className='mt-8 flex flex-col items-center justify-center text-center'>
      
      <section className="">
	<div className="container max-w-5xl px-4 py-5 mx-auto font-body font-thin">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-black">
					<h3 className="text-4xl font-bold font-display">Experience</h3>
					<span className="text-sm font-bold tracki uppercase dark:text-gray-400"> SDE Internships</span>
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black">
						<h3 className="text-xl font-semibold tracki">SDE Intern</h3>
						<p className="text-xs  uppercase text-gray-600">Zostel</p>
						<p className="mt-3">22/07/2023 - 22/08/2023</p>
						
						<p className="mt-3 unerline  font-semibold">Skills Used</p>
						<div className='flex flex-row items-center justify-center space-x-5 my-3'>
							<BiLogoReact size={30}/>
							<BiLogoTailwindCss size={30}/>
							<SiRedux size={30}/>
							<BiLogoMongodb size={30}/>
							<BiLogoNodejs size={30}/>
						</div>
                        <Link className='text-sky-800 flex items-center justify-center space-x-2 hover:underline underline-offset-4' href='https://drive.google.com/file/d/1I5TD4EzQfqErADxWodRunRtUKY8B4wYh/view?usp=sharing' target='_blank'>
                            <p>Certificate</p>
                            <BiLinkExternal/>
                        </Link>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black">
						<h3 className="text-xl font-semibold tracki">Web Developer Intern</h3>
						<p className="text-xs  uppercase text-gray-600">Worinwell</p>
						<p className="mt-3">25/10/2023 - 25/10/2022</p>
						
						<p className="mt-3 unerline  font-semibold">Skills Used</p>
						<div className='flex flex-row items-center justify-center space-x-5 my-3'>
							<AiFillHtml5 size={30}/>
							<FaBootstrap size={30}/>
							<SiPhp size={30}/>
							<SiMysql size={30}/>
						</div>
                        <Link className='text-sky-800 flex items-center justify-center space-x-2 hover:underline underline-offset-4' href='https://drive.google.com/file/d/1WYWI7SbfgaPoZ1kgUSdd2XL_h6tRdXfL/view?usp=sharing' target='_blank'>
                            <p>Certificate</p>
                            <BiLinkExternal/>
                        </Link>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Education

