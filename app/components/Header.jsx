'use client'
import React, { useState } from 'react'
import {AiFillHome} from 'react-icons/ai';
import {SiAboutdotme} from 'react-icons/si';
import {MdWork} from 'react-icons/md';
import {BsCode} from 'react-icons/bs';
import Link from 'next/link';
import {BiSolidMessageDetail} from 'react-icons/bi';
import {PiCertificateFill} from 'react-icons/pi';
import { usePathname } from 'next/navigation'
const Header = () => {
    const pathName = usePathname();
    // const [currentRoute, setCurrentRoute] = useState();
    const items = [
        {
            label: "Home",
            icon: AiFillHome,
            href:'/'
        },
        {
            label: "About",
            icon: SiAboutdotme,
            href:'/about'
        },
        {
            label:'Ed N Ex',
            icon: MdWork,
            href: '/education-and-experience'
        },
        {
            label:'Projects',
            icon: BsCode,
            href: '/projects'
        },
        {
            label:'Achievements',
            icon: PiCertificateFill,
            href: '/achievements-and-certifications'
        },
        {
            label:'Contact Me',
            icon: BiSolidMessageDetail,
            href: '/contact'
        },

    ]
  return (
    <div className='w-full font-semibold text-lg space-x-8 flex items-center justify-center p-3'>
      {items.map((item)=>(
        <div key={item.href}>
        <div className={item.href===pathName?` text-red-600 underline hidden md:block transition cursor-pointer underline-offset-4`:`hidden md:block hover:underline transition cursor-pointer underline-offset-4`}>
            <Link href={item.href}>
            <p>{item.label}</p>
            </Link>
        </div>
        <div className='md:hidden'>
            <Link href={item.href}>
            <item.icon size={24} className={pathName===item.href?`text-sky-500`:`text-black`}/>
            </Link>
        </div>
        </div>
      ))}
    </div>
  )
}

export default Header
