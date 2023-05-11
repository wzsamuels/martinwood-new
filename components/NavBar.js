'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

/** Image Imports */
import fbLogoImg from '@/public/images/logos/facebook.svg';
import instaLogoImg from '@/public/images/logos/instagram.png';
import logoImage from '@/public/images/logos/martin.png';
import Drawer from "./Drawer/Drawer";
import {BiMenu} from "react-icons/bi";

export default function NavBar({ links, position }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname()

  return (
    <>
      <nav
        className={`w-full  px-4 flex items-center justify-between absolute top-0 bg-black text-white shadow-md transition-all duration-500`}
      >
        <div className="flex items-center ">
          <button
            aria-label="Open Menu"
            onClick={() => setIsDrawerOpen(true)}
            className="p-3 focus:outline-none inline-block lg:hidden text-white"
          >
            <BiMenu className='text-2xl text-white'/>
          </button>
          <Link href="/" passHref className="h-24">
            <Image className='w-full h-full aspect-auto' src={logoImage} alt="Martin Woodworks Logo"/>
          </Link>
        </div>
        <div className='hidden lg:block absolute h-24 left-0 w-full'>
          <div className='flex justify-center items-center h-24'>
          {links.map((link, i) => (
            <Link key={i} href={link.url}
                  className={`py-4 px-3 text-2xl ${pathname === link.url ? 'text-red' : ''}`}>
                {link.text}
            </Link>
          ))}
          </div>
        </div>
        <div className="flex items-center">
          <a href="https://www.facebook.com/MartinWoodworksNC/">
            <Image height={30} width={30} src={fbLogoImg} alt="Facebook logo"/>
          </a>
          <a href="https://www.instagram.com/martin_woodworksnc/" className="ml-4">
            <Image height={30} width={30} src={instaLogoImg} alt="Instagramlogo"/>
          </a>
        </div>
      </nav>

      <Drawer
        isOpen={isDrawerOpen}
        setIsOpen={setIsDrawerOpen}
        title="Menu"
        description="Try something new!"
      >
        <div className='flex w-full px-4 h-24 '>
          <button className="p-3 focus:outline-none" aria-label="Close Menu" onClick={() => setIsDrawerOpen(false)}>
            <BiMenu className='text-2xl text-white'/>
          </button>
          <Link href="/" passHref className="h-24">
            <Image className='w-full h-full aspect-auto' src={logoImage} alt="Twin Silver Logo"/>
          </Link>
        </div>
        {links.map((link) => (
          <Link
            href={link.url}
            key={link.text}
            className={`block w-full text-white py-4 px-4 hover:bg-red`}>
            {link.text}
          </Link>
        ))}
        <div className="flex w-full justify-center">
          <div className="mt-8 flex justify-center items-center space-x-8">
            <a href="https://www.facebook.com/MartinWoodworksNC/">
              <Image height={25} width={25} src={fbLogoImg} alt="Facebook logo"/>
            </a>
            <a href="https://www.instagram.com/martin_woodworksnc/">
              <Image height={25} width={25} src={instaLogoImg} alt="Instagram logo"/>
            </a>
          </div>
        </div>
        <div className="absolute w-full bottom-5 p-4 text-sm">
          <p className="text-center">&copy;{new Date().getFullYear()} Martin Woodworks</p>
          <p className="text-center">
            Website by <a className='underline' href="https://twinsilverdesign.com">Twin Silver Web Design</a>
          </p>
        </div>
      </Drawer>
    </>
  )
}