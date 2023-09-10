import React from 'react'
import Link from 'next/link'
import {BiLinkExternal} from 'react-icons/bi'
const Education = () => {
  return (
    <div className='mt-8 flex flex-col items-center justify-center text-center'>
      


      <section className="">
	<div className="container max-w-5xl px-4 py-5 mx-auto font-body font-thin">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-black">
					<h3 className="text-4xl font-bold font-display">Education</h3>
					<span className="text-sm font-bold tracki uppercase dark:text-gray-400">College and High School</span>
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black">
						<h3 className="text-xl font-semibold tracki">CBSE Class X</h3>
						<p className="text-xs tracki uppercase text-gray-600">Gitarattan Jindal Public School</p>
						<p className="mt-3">Completed: March, 2019</p>
						<p className="">Percentage: 96.2%</p>
                        <Link className='text-sky-800 flex items-center justify-center space-x-2 hover:underline underline-offset-4' href='https://drive.google.com/file/d/1OV7lnhjWbSPPBaH4b7HU9wC68RHDFy6R/view?usp=sharing' target='_blank'>
                            <p>Marksheet</p>
                            <BiLinkExternal/>
                        </Link>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black">
						<h3 className="text-xl font-semibold tracki">CBSE Class XII</h3>
						<p className="text-xs tracki uppercase text-gray-600">Gitarattan Jindal Public School</p>
						<p className="mt-3">Completed: March, 2021</p>
						<p className="">Stream: Non-medical Science</p>
						<p className="">Percentage: 97.4%</p>
                        <Link className='text-sky-800 flex items-center justify-center space-x-2 hover:underline underline-offset-4' href='https://drive.google.com/file/d/1DRu_P2shLWjQSkxmye_CAy-FKSSBPmZT/view?usp=sharing' target='_blank'>
                            <p>Marksheet</p>
                            <BiLinkExternal/>
                        </Link>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black">
						<h3 className="text-xl font-semibold tracki">B-Tech in Computer Science and Technology</h3>
						<p className="text-xs tracki uppercase text-gray-600">Maharaja Agrasen Institute of Technology</p>
						<p className="mt-3">Currently pursuing</p>
						<p className="">Expected grad. date: September 2025</p>
						<p className="">GPA: 9.3</p>
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
