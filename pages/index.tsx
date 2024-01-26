/* eslint-disable react/jsx-key */
import Image from 'next/image'
import { BsTwitterX } from "react-icons/bs";
import { BiSolidHome } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { RiNotification4Line } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { RiFileList2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import Feedcard from '@/components/FeedCard';
import styles from './scrollHidden.module.css';
import React, { useCallback } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { CredentialResponse } from '@react-oauth/google';
import { link } from 'fs';



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
    text: 'Premium',
    icon: <BsTwitterX/>
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
  

  const handelLoginWithGoogle = useCallback((cred: CredentialResponse) => {

  },[])
  return (
    <div>
      <div className='grid grid-cols-12 h-screen w-screen px-56 overflow-hidden'>
        <div className='col-span-3 pt-1'>
          <div className='text-3xl h-fit w-fit hover:bg-gray-800 rounded-full  p-2 cursor-pointer transition-all duration-75 ease-linear mx-7 '>
            <BsTwitterX/>
          </div>
          <div className='mt-4 text-xl px-4 pr-4'>
            
            {sidebarMenuItem.map((item) => 
            <li className='flex justify-start items-center gap-4 hover:bg-gray-800 px-5 py-2 rounded-full w-fit cursor-pointer mt-2' key={item.text} >
                <span className='text-2xl'>{item.icon}</span>
                <span>{item.text}</span>
              </li>
            )}
            <div className='mt-5 pr-3'>
              <button className='bg-[#1d8bf0] text-xl  py-4 rounded-full w-full font-bold'>Tweet</button>
            </div>
            
          </div>
          
        </div>
        <div className='col-span-6 border-r-[0.5px] border-l-[0.5px] h-screen overflow-scroll overflow-x-hidden border-gray-600v' id="ScrollHider">
          
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />

        </div>
        <div className='col-span-3 p-5'>
          <div className='p-5 bg-slate-700 rounded-lg'>
            <h1 className='my-2 text-2xl'>New to Twitter</h1>
            <GoogleLogin onSuccess={cred => console.log(cred)} />
          </div>
        </div>
      </div>
    </div>
  )
}
