import React from 'react'
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const CompanyTable = () => {
    const columns = [
        { field: 'id' , headerName: 'Название', width: 320 },
        { field: 'Описание', headerName: 'Описание', width:480 },
        { field: 'Год_основания', headerName: 'Год основания', width:240 }
    ];
    
    const rows = [
        { id: `L'Oréal`, Описание: 'In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in...', Год_основания:'2008' },
        { id: `The Walt Disney Company`, Описание: 'The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub...', Год_основания:'2003' },
        { id: `Mitsubishi`, Описание: 'Physical space is often conceived in three linear dimensions, although modern physicists usually...', Год_основания:'2016' },
        { id: `IBM`, Описание: 'Physical space is often conceived in three linear dimensions, although modern physicists usually...', Год_основания:'2003' },
        { id: `Gillette`, Описание: `Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that...`, Год_основания:'2019' },
        { id: `Sony`, Описание: 'Physical space is often conceived in three linear dimensions, although modern physicists usually...', Год_основания:'2020' },
        { id: `Starbucks`, Описание: 'Physical space is often conceived in three linear dimensions, although modern physicists usually...', Год_основания:'2020' },
        { id: `Nintendo`, Описание: 'The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub...', Год_основания:'2008' },
        { id: `Sony`, Описание: 'Physical space is often conceived in three linear dimensions, although modern physicists usually...', Год_основания:'2020' },
        { id: `Starbucks`, Описание: 'Physical space is often conceived in three linear dimensions, although modern physicists usually...', Год_основания:'2020' },
        { id: `MasterCard`, Описание: 'Physiological respiration involves the mechanisms that ensure that the composition of the functional...', Год_основания:'2008' },
        { id: `Louis Vuitton`, Описание: 'For athletes, high altitude produces two contradictory effects on performance. For explosive events...', Год_основания:'2016' },
        { id: `Mitsubishi`, Описание: 'Physical space is often conceived in three linear dimensions, although modern physicists usually...', Год_основания:'2016' },
        
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
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 7 },
        },
      }}
      rowSelection={false}
      
      /></Box>
  )
}

export default CompanyTable
