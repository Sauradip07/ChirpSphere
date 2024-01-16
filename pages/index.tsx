/* eslint-disable react/jsx-key */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { BsTwitterX } from "react-icons/bs";
import { BiSolidHome } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { RiNotification4Line } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { RiFileList2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";


import React from 'react';
import { link } from 'fs';

const inter = Inter({ subsets: ['latin'] })

interface TwitterSidebarButton {
  text: string
  icon: React.ReactNode;
}

const sidebarMenuItem : TwitterSidebarButton [] = [
  {
    text: 'Home',
    icon: <BiSolidHome />
  },
  {
    text: 'Explore',
    icon: <IoSearch/>
  },
  {
    text: 'Notifications',
    icon: <RiNotification4Line/>
  },
  {
    text: 'Messages',
    icon: <FaRegEnvelope/>
  },
  {
    text: 'Bookmarks',
    icon: <FaRegBookmark />
  },
  {
    text: 'Lists',
    icon: <RiFileList2Line/>
  },
  {
    text: 'Profile',
    icon: <FaRegUser/>
  },
  {
    text: 'More',
    icon: <CgMoreO/>
  }
]
export default function Home() {
  return (
    <div className={inter.className}>
      <div className='grid grid-cols-12 h-screen w-screen px-56 '>
        <div className='col-span-3 pt-8'>
          <div className='text-3xl h-fit w-fit hover:bg-gray-800 rounded-full  p-2 cursor-pointer transition-all duration-75 ease-linear mx-6 '>
            <BsTwitterX/>
          </div>
          <div className='mt-4 text-2xl px-4 pr-4'>
            
            {sidebarMenuItem.map((item) => 
            <li className='flex justify-start items-center gap-4 hover:bg-gray-800 px-5 py-2 rounded-full w-fit cursor-pointer mt-2' key={item.text} >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </li>
            )}
            <div className='mt-5 pl-3 pr-3'>
              <button className='bg-[#1d8bf0] text-xl  p-4 rounded-full w-full font-bold'>Tweet</button>
            </div>
            
          </div>
          
        </div>
        <div className='col-span-6 border-r-[1px] border-l-[1px] border-gray-600'></div>
        <div className='col-span-3'></div>
      </div>
    </div>
  )
}
