
import React from 'react'
import { Box, Stack, Typography, Item, Grid } from '@mui/material';
import logo from '../assets/images/logo.png'

const Footer = () => {
  return (
  <>
   <Box mt="80px" bgcolor="#3A1212">
    <Stack gap="20px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={logo} alt="logo" style={{ width: '200px', height: '181px' }} />
    </Stack>
    
    
    <Typography variant="h6" sx={{ fontSize: { lg: '12px', xs: '10px' } }} 
    mt="1px" textAlign="center" pb="10px" color="#fff">All copy rights reserved 2022</Typography>
  </Box>
  
  </>
  )
}

export default Footer