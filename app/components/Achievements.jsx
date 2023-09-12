import React from 'react'
import Link from 'next/link'
import { BiLinkExternal } from 'react-icons/bi'
import { FaJava } from 'react-icons/fa'
import { SiHibernate } from 'react-icons/si'
import { SiSpring } from 'react-icons/si'
import { FaAngular } from 'react-icons/fa'
import { SiMui } from 'react-icons/si'
import { FaCss3 } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import Badge from './Badge'
const Achievements = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-12 text-center '>
      <section className="">
	<div className="container max-w-5xl px-4 py-5 mx-auto font-body font-thin">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-black">
					<h3 className="text-4xl font-bold font-display">Achievements and Certificates</h3>
					<span className="text-sm font-bold tracki uppercase dark:text-gray-400">Mostly Technical</span>
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                    
				<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black">
                <h3 className="text-xl font-semibold tracki">Goldman Sachs Software Engg. vitual program</h3>
						<p className="text-xs  uppercase text-gray-600">Forage</p>
						<p className="mt-3">June 20, 2023</p>
						
						<p className="mt-3 unerline  font-semibold">Skills Used</p>
						<div className='flex flex-row items-center justify-center space-x-5 my-3'>
							<Badge label={'Cyber Security'}/>
							<Badge label={'Hashcat'}/>
							<Badge label={'Password Decryption'}/>
						</div>
                        <Link className='text-sky-800 flex items-center justify-center space-x-2 hover:underline underline-offset-4' href='https://drive.google.com/file/d/1hz75eFg94_igUzWjo9-FXwvAeUUqNlY6/view?usp=sharing' target='_blank'>
                            <p>Certificate</p>
                            <BiLinkExternal/>
                        </Link>
					</div>
					

					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black">
                <h3 className="text-xl font-semibold tracki">Wells Fargo Software Engg. vitual program</h3>
						<p className="text-xs  uppercase text-gray-600">Forage</p>
						<p className="mt-3">June 26, 2023</p>
						
						<p className="mt-3 unerline  font-semibold">Skills Used</p>
						<div className='flex flex-row items-center justify-center space-x-5 my-3'>
							<FaJava size={30} />
							<SiHibernate size={30} />
							<SiSpring size={30} />
						</div>
                        <Link className='text-sky-800 flex items-center justify-center space-x-2 hover:underline underline-offset-4' href='https://drive.google.com/file/d/1gvs2yMEVCVbWKPYc02pIwa94FlVVOzJS/view?usp=sharing' target='_blank'>
                            <p>Certificate</p>
                            <BiLinkExternal/>
                        </Link>
					</div>
					

                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black">
                <h3 className="text-xl font-semibold tracki">IBM AngularJS Training program</h3>
						<p className="text-xs  uppercase text-gray-600">Forage</p>
						<p className="mt-3">September 20, 2022</p>
						
						<p className="mt-3 unerline  font-semibold">Skills Used</p>
						<div className='flex flex-row items-center justify-center space-x-5 my-3'>
							<FaAngular size={30} />
							<SiMui size={30} />
							<FaCss3 size={30} />
							<SiTypescript size={30} />
						</div>
                        <Link className='text-sky-800 flex items-center justify-center space-x-2 hover:underline underline-offset-4' href='https://drive.google.com/file/d/1KzyOAr91_XniniefxhcGeWjd0eZUJB9s/view?usp=sharing' target='_blank'>
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

export default Achievements
