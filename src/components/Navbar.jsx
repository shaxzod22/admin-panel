import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { HiChartBar } from "react-icons/hi";
import { BiTargetLock } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import AccountImg from './../assets/img/accountImg.png'

const Navbar = () => {
  const {pathname} = useLocation()
  const [navDirect,setNavDirect] = useState(pathname)
  return (
    <div className='w-[64px] flex flex-col px-3 pt-3 pb-4 border-[1px] border-[#DCE9F9] h-screen'>
      <div className="bg-[#147CED] flex mb-6 items-center justify-center font-bold text-white text-[20px] rounded-full w-10 h-10">D</div>
      <div className='bg-[#F0F3F8] rounded-[6px]'>
        <Link to={'/'} className={`flex items-center justify-center w-full  p-[10px] rounded-[6px] ${navDirect=='/'?'active__nav':''}`}><HiChartBar className={`rounded-sm ${navDirect=='/'?'text-white':''} text-[#4094F7] font-bold`} /></Link>
        
        <Link to={'/zakaz'} className={`flex items-center justify-center w-full  p-[10px] rounded-[6px] ${navDirect=='/zakaz'?'active__nav':''}`}><MdShoppingCart className={`rounded-sm ${navDirect=='/zakaz'?'text-white':''} text-[#4094F7] w-6 h-5 font-bold`} /></Link>
        <Link to={'/marketing'} className={`flex items-center justify-center w-full  p-[10px] rounded-[6px] ${navDirect=='/marketing'?'active__nav':''}`}><BiTargetLock className={`rounded-sm ${navDirect=='/marketing'?'text-white':''} text-[#4094F7] w-6 h-5 font-bold`} /></Link>
        
      </div>

      <div className="flex flex-col items-center mt-auto gap-2">
      <div className='bg-[#F0F3F8] rounded-[6px]'>
        <Link to={'/settings'} className={`flex items-center justify-center w-full  p-[10px] rounded-[6px] ${navDirect=='/settings'?'active__nav':''}`}><IoSettingsSharp className={`rounded-sm ${navDirect=='/settings'?'text-white':''} text-[#4094F7] font-bold`} /></Link>
        
        
      </div>
      <img src={AccountImg} alt="account" className='w-10 h-10 rounded-full' />
      </div>
    </div>
  )
}

export default Navbar
