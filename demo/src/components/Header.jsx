import React, { useEffect, useState } from 'react'
import Logo from '../assets/img/logo.png'
import { IoCloseOutline } from "react-icons/io5";
import { BsGrid3X3Gap } from "react-icons/bs";

const Header = () => {
  const [activeToggle, setActiveToggle] = useState(false);
  const [menuClasses, setMenuClasses] = useState('');

  useEffect(()=>{
    setMenuClasses(activeToggle? 'transition-opacity ease-in-out duration-300 transform translate-y-0 opacity-100': 'transition-opacity ease-in-out duration-300 transform -translate-y-full opacity-0');
  },[activeToggle])
  return (
  
        <div className='bg-black flex items-center justify-between text-ba-white p-5 fixed top-0 w-full'>
            <img src={Logo} width={80} alt="bilgeAdam Logo" />
            <ul className='gap-5 self-end hidden md:flex'>
                <li>
                    <a className='ba-nav-link' href="/">Eğitim Programları</a>
                </li>
                <li>
                    <a className='ba-nav-link'  href="/">Mezun Talebi</a>
                </li>
                <li>
                    <a className='ba-nav-link'  href="/">Blog</a>
                </li>
                <li>
                    <a className='ba-nav-link'  href="/">BilgeAdam Akademi</a>
                </li>
            </ul>
            <div onClick={()=>setActiveToggle(!activeToggle)} className='flex md:hidden flex-col cursor-pointer hover:text-ba-green'>
        {
          activeToggle?
          <IoCloseOutline className='text-white' size={30}/>:
          <BsGrid3X3Gap className='text-white' size={25}/>
        }
        {
          activeToggle&&
          <div className={`bg-ba-green/80 text-ba-white py-4 absolute top-20 right-0 w-full ${menuClasses}`}>
            <ul className='flex flex-col items-center gap-2'>
             <li className='text-center'>
              <a className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:text-red-300 active:text-red-500' href="/">
            Eğitim Programları
              </a>
             </li>
             <li className='text-center'>
              <a className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:text-red-300 active:text-red-500' href="/">
            Mezun Talebi
              </a>
             </li>
             <li className='text-center'>
              <a className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:text-red-300 active:text-red-500' href="/">
            Blog
              </a>
             </li>
             <li className='text-center'>
              <a className='text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:text-red-300 active:text-red-500' href="/">
            BilgeAdam Akademi
              </a>
             </li> 
            </ul>
          </div>
        }
            </div>
        </div>
        
    
    
    
  )
}

export default Header