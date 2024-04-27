import React from 'react'
import { useParams } from 'react-router-dom'
import { IoArrowBackSharp } from "react-icons/io5";
import Navbar from '../components/Navbar'

const DinamicTariff = () => {
    const {name} = useParams()
    return (
        <div  className='flex overflow-x-hidden'>
        <Navbar/>
        
        
        <div className="flex flex-col w-full">
        
        <div className="flex border-b-[1px] border-[#DCE9F9] relative items-center  pl-2 bg-[#ffffff] py-1 h-[56px] w-full">
        <IoArrowBackSharp onClick={()=>history.back()} className='w-[25px] cursor-pointer h-[25px]'  />
        </div>
        
        <div className="bg-[#DCE9F9]  px-5 py-5 h-full">
        <div className=' w-[658px]  bg-white  rounded-[6px] '>
        <h3 className='py-2 px-4 text-[14px] leading-6 font-semibold text-[#1A2024]'>Общие сведение</h3>
        
        <ul className='p-5 w-[648px] flex flex-col gap-4'>
        <li className='flex items-center w-full justify-between'>
        <h4 className='text-[14px] leading-6 font-semibold text-[#48535B]'>Название</h4>
        <input className='w-[426px] border-[1px] border-[#E5E9EB] py-2 pl-3 rounded-[6px]' type="text" value={name}/>
        </li>
        <li className='flex items-center w-full justify-between'>
        <h4 className='text-[14px] leading-6 font-semibold text-[#48535B]'>Тип</h4>
        <select className='w-[426px] border-[1px] border-[#E5E9EB] py-2 pl-3 rounded-[6px]' defaultValue={'fix'} >
        <option  value="fix">Фиксированная</option>
        </select>
        </li>
        <li className='flex items-center w-full justify-between'>
        <h4 className='text-[14px] leading-6 font-semibold text-[#48535B]'>Базовая цена</h4>
        <input className='w-[426px] border-[1px] border-[#E5E9EB] py-2 pl-3 rounded-[6px]' type="text" value={'50 000 сум'}/>
        </li>
        <li className='flex items-center w-full justify-between'>
        <h4 className='text-[14px] leading-6 font-semibold text-[#84919A]'>Включенные километры</h4>
        <input disabled className='w-[426px] text-[#84919A] border-[1px] border-[#E5E9EB] py-2 pl-3 rounded-[6px]' type="text" value={'5 км'}/>
        </li>
        <li className='flex items-center w-full justify-between'>
        <h4 className='text-[14px] leading-6 font-semibold text-[#84919A]'>Далее сумма за км</h4>
        <input disabled className='w-[426px] text-[#84919A] border-[1px] border-[#E5E9EB] py-2 pl-3 rounded-[6px]' type="text" value={'10 000 сум'}/>
        </li>
        </ul>
        
        </div>
        </div>
        </div>
        </div>
        )
    }
    
    export default DinamicTariff
    