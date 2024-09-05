import React from 'react'
import Navbar from '../app/Navbar/navbar'
import { Box } from '@mui/material'
import DataTable from '../app/component/table'

export default function dashboard() {
  return (
    <Box>
      <Navbar />
      <Box sx={{p: 2}}>
      <Box sx={{p: 3, backgroundColor: "#fff" , boxShadow: 3 }}>
      <DataTable />
      </Box>
      </Box>
    </Box>
  )
}
