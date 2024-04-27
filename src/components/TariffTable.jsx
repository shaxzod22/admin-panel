import React from 'react'
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const TariffTable = () => {
    const columnsTariff = [
        { field: 'id' ,renderCell:(cellValue)=>{
        return (
            <Link to={`/settings/tariff/${cellValue.value}`}>{cellValue.value}</Link>
            )
        } , headerName: 'Название', width: 532 },
        { field: 'Базовая_цена', headerName: 'Базовая цена', width:532 }
    ];
    
    const rowsTariff = [
        { id: `Venenatis Mollis`, Базовая_цена: '50 000 сум'},
        { id: `Parturient Lorem`, Базовая_цена: '50 000 сум'},
        { id: `Fringilla Fusce Elit`, Базовая_цена: '50 000 сум'},
        { id: `Fermentum Venenatis Tortor`, Базовая_цена: '50 000 сум'},
        { id: `Parturient Malesuada Sem`, Базовая_цена: '50 000 сум'},
        { id: `Tortor Nullam Fringilla`, Базовая_цена: '50 000 сум'},
        { id: `Ridiculus`, Базовая_цена: '50 000 сум'},
        { id: `Lorem Ornare`, Базовая_цена: '50 000 сум'},
        { id: `Vestibulum`, Базовая_цена: '50 000 сум'},
        { id: `Malesuada Fermentum Tortor`, Базовая_цена: '50 000 сум'},
        { id: `Ullamcorper`, Базовая_цена: '50 000 сум'},
      
        
    ];

  return (
    <Box> <DataGrid
      slotProps={{
        toolbar: {
          showQuickFilter: true,
        },
      }}
       slots={{
        toolbar: GridToolbar,
      }}
      rows={rowsTariff}
      columns={columnsTariff}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 7 },
        },
      }}
      rowSelection={false}
      
      /></Box>
  )
}

export default TariffTable
