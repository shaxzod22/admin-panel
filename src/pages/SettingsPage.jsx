import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CompanyTable from '../components/CompanyTable';
import TariffTable from '../components/TariffTable';

const SettingsPage = () => {
  const [deleverSettings,setDeleverSettings] = useState('tariff')
  
  
  return (
    <div className='flex overflow-x-hidden'>
    <Navbar/>
    <div className="px-4 min-w-[216px] border-[1px] border-[#DCE9F9]">
    <h2 className='text-[#0c76ea] font-bold text-[20px] py-5'>Delever</h2>
    <ul className='flex flex-col gap-2 w-full'>
    <li onClick={()=>setDeleverSettings('tariff')} className={`w-full py-2 pl-4 text-[14px] ${deleverSettings=='tariff'?'bg-[#4094F7] text-white':'bg-white text-[#252C32]'} leading-6 font-medium cursor-pointer  rounded-[6px]`}>Тарифы</li>
    <li onClick={()=>setDeleverSettings('company')} className={`w-full py-2 pl-4 text-[14px] ${deleverSettings=='company'?'bg-[#4094F7] text-white':'bg-white text-[#252C32]'} leading-6 font-medium cursor-pointer rounded-[6px]`}>Компания</li>
  
    
    </ul>
    </div>
    <div className="flex flex-col">
    <h1 className='border-b-[1px] w-screen text-[24px] leading-8 font-semibold py-[11.5px] pl-[32px] border-[#DCE9F9]'>{deleverSettings=='company'?'Список компаний':deleverSettings=='tariff'?'Тарифы':''}</h1>
    <div className="bg-[#DCE9F9] ">
    <div className="bg-[#DCE9F9] h-[645px] px-5 py-5 ">
    <div className='px-5 w-[1200px] pt-5 bg-white h-[580px] rounded-[6px] '>
    { 
      deleverSettings=='company'?<CompanyTable/>: deleverSettings=='tariff'? <TariffTable/>:''
    }
    
    </div>
    </div>
    </div>
    </div>
    </div>
    )
  }
  
  export default SettingsPage
  