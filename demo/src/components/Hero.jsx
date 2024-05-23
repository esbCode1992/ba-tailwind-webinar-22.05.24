import React from 'react'
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { HiOutlineClock } from "react-icons/hi";
import { PiGraduationCapLight } from "react-icons/pi";

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row bg-ba-black text-ba-white h-full'>
      <div className='w-full h-1/2 lg:w-1/2 lg:h-full flex flex-col justify-center items-center p-5 mt-20 lg:mt-0'>
        <h3 className='self-start'>EN İYİ MESLEK EN İYİ YATIRIM</h3>
        <p className='text-5xl'>
        BilgeAdam Boost Plus ile <span className='text-ba-green'>600 saatlik kapsamlı</span> eğitim ve proje deneyimiyle yazılım kariyerinize başlayın
        </p>
        <button className=' animate-pulse bg-ba-green py-4 px-8 rounded-full hover:bg-green-700 transition duration-500 self-center lg:self-start mt-10'>Kariyerini Başlat</button>
      </div>
      <div  className='bg-ba-hero bg-cover h-1/2 lg:h-full w-full  lg:w-1/2 flex items-end'>
          <div className='flex justify-evenly w-full text-lg text-ba-green px-3 py-10 bg-ba-black/70'>
            <div className='ba-flex'>
              <HiOutlineCodeBracket  size={30}/>
              <span className='text-ba-white'>İşin garanti</span>
            </div>
            <div className='ba-flex'>
              <HiOutlineClock  size={30}/>
              <span className='text-ba-white'>2 ay saha deneyimi</span>
            </div>
            <div className='ba-flex'>
              <PiGraduationCapLight  size={30}/>
              <span className='text-ba-white'>İşe girince öde</span>
            </div>
          </div>
      </div>

    </div>
  )
}

export default Hero