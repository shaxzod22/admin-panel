import React, { useState } from 'react'
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar'


const ZakazPage = () => {
    const [deleverZakaz,setDelever] = useState('aksiya')
    
    const rowFunctionCall = (aksiya,otziv)=>{
        return deleverZakaz=='aksiya'?aksiya:otziv 
    }
    
    const tableFunctionCall = (aksiya,banner,otziv)=>{
        return deleverZakaz=='aksiya'?aksiya:deleverZakaz=='banner'?banner:otziv
    }
    const setWidth = (aksiya,banner,otziv)=>{
        return deleverZakaz=='aksiya'?aksiya:deleverZakaz=='banner'?banner:deleverZakaz=='otziv'?otziv:''
    }
    const columns = [
        { field: 'id' , headerName: '№', width: 48 },
        { field: 'Клиент',
        renderCell:(cellValues)=>{
        return(
            <div className="flex flex-col gap-2">
                <span>{cellValues.value}</span> 
                <span className='text-[#4094F7]'>+998 (90) 123-45-67</span>
            </div>
            )
        }
        , headerName: 'Клиент', width:224 },
        { field: 'Ид_заказа', headerName: 'Ид.заказа', width:104,headerAlign: 'center' },
        {field: 'Таймер', renderCell:(cellValue)=>{
        return (
           <div className="h-full flex items-center justify-center"> <div className="py-1  px-[13px] bg-[#38d9b933] rounded-[6px] text-[#1AC19D] flex items-center justify-center">{cellValue.value}</div></div>
            )
        },headerName: 'Таймер',width: 120,align:'center'},
        {field: 'Курьер',headerName: 'Курьер',width: 88,},
        {field: 'Филиал',headerName: 'Филиал',width: 224, renderCell:(cellValues)=>{
            return(
                <div className="flex flex-col gap-2">
                    <span>{cellValues.value}</span> 
                    <span className='text-[#4094F7]'>+998 (90) 123-45-67</span>
                </div>
                )
            }},
    {field: 'Тип_доставки',renderCell:(cellValue)=>{
        return (
            <div className="h-full flex items-center justify-center"><div className="py-1  px-[13px] bg-[#f8dd4e4d] rounded-[6px] text-[#D29404] flex items-center justify-center">{cellValue.value}</div></div>
            )
        },headerName: 'Тип_доставки',width: 136,},
    {field: 'Цена_заказа',headerName: 'Цена_заказа',width: 128,},
    {field: 'Адресс',headerName: 'Адресс',width: 150,},
    ];
    
    const rows = [
        { id: 1, Ид_заказа: '5262261', Клиент:'Арсений Морозов', Таймер:'02:33:48',Курьер:'__',  Филиал:'Марк Васильев', Филиал:'Марк Васильев', Тип_доставки:'Доставка', Тип_доставки:'Доставка', Цена_заказа:'$ 888', Цена_заказа:'$ 888', Адресс:'ул. Байкальская‚ д. 52, кв. 22', Адресс:'ул. Байкальская‚ д. 52, кв. 22' },
        { id: 2, Ид_заказа: '5637657', Клиент: 'Дамир Баранов', Таймер: '02:33:48', Курьер:'__',  Филиал:'Марк Васильев', Тип_доставки:'Доставка', Цена_заказа:'$ 888', Адресс:'ул. Байкальская‚ д. 52, кв. 22' },
        { id: 3,Ид_заказа: '5262264', Клиент: 'Вероника Новикова', Таймер: '02:33:48', Курьер:'__',  Филиал:'Марк Васильев', Тип_доставки:'Доставка', Цена_заказа:'$ 888', Адресс:'ул. Байкальская‚ д. 52, кв. 22' },
        { id:4, Ид_заказа: '5262267', Клиент: 'Денис Андреев', Таймер: '02:33:48', Курьер:'__',  Филиал:'Марк Васильев', Тип_доставки:'Доставка', Цена_заказа:'$ 888', Адресс:'ул. Байкальская‚ д. 52, кв. 22' },
        { id:5, Ид_заказа: '5262213', Клиент: 'Дмитрий Лебедев', Таймер: '02:33:48', Курьер:'__',  Филиал:'Марк Васильев', Тип_доставки:'Доставка', Цена_заказа:'$ 888', Адресс:'ул. Байкальская‚ д. 52, кв. 22' },
        { id: 6, Ид_заказа: '5262282', Клиент: 'Дмитрий Лебедев', Таймер: '02:33:48', Курьер:'__',  Филиал:'Марк Васильев', Тип_доставки:'Доставка', Цена_заказа:'$ 888', Адресс:'ул. Байкальская‚ д. 52, кв. 22' },
        { id: 7, Ид_заказа: '5262261', Клиент: 'Денис Андреев', Таймер: '02:33:48', Курьер:'__',  Филиал:'Марк Васильев', Тип_доставки:'Доставка', Цена_заказа:'$ 888', Адресс:'ул. Байкальская‚ д. 52, кв. 22' },
        { id: 8, Ид_заказа: '5263560', Клиент: 'Дмитрий Лебедев', Таймер: '02:33:48', Курьер:'__',  Филиал:'Марк Васильев', Тип_доставки:'Доставка', Цена_заказа:'$ 888', Адресс:'ул. Байкальская‚ д. 52, кв. 22' },
        { id: 9, Ид_заказа: '5262261', Клиент: 'Денис Андреев', Таймер: '02:33:48', Курьер:'__',  Филиал:'Марк Васильев', Тип_доставки:'Доставка', Цена_заказа:'$ 888', Адресс:'ул. Байкальская‚ д. 52, кв. 22' },
    ];
    
    
    return (
        <div className='flex overflow-x-hidden'>
        <Navbar/>
        <div className="flex flex-col">
        <h1 className=' border-b-[1px] w-screen text-[24px] leading-8 font-semibold py-[11.5px] pl-[32px] border-[#DCE9F9]'>Заказы</h1>
        <div className="bg-[#DCE9F9] ">
        <div className="bg-[#DCE9F9]  px-5 py-5 h-full">
        <div className='px-5 w-[1400px] pt-5 bg-white h-[550px] rounded-[6px] '>
        { <Box> <DataGrid
        getRowHeight={() => 'auto'}
       
            slots={{
                toolbar: GridToolbar,
            }}
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 6 },
                },
            }}
            checkboxSelection
            disableRowSelectionOnClick
            /></Box>}
            
            </div>
            </div>
            
            
            </div>
            </div>
            </div>
            )
        }
        
        export default ZakazPage
        