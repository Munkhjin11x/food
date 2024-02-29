import { Stack, Typography } from '@mui/material'
import React from 'react'

function AdminNav() {
  return (
    <Stack sx={{display:'flex',flexDirection:'row' , gap:'40px'}} border={'solid'} border={1} width={'1000px'}>
        <Typography width={'200px'} px={'12px'} py={"24px"}>
        Order name 
        </Typography>
        <Typography width={'140px'} px={'12px'} py={"24px"}>
        Buyer info
        </Typography>
        <Typography width={'230px'} px={'12px'} py={"24px"}> 
        Payment
        </Typography>
        <Typography width={'230px'}  px={'12px'} py={"24px"}>
        Address
        </Typography>
        <Typography width={'170px'} px={'12px'} py={"24px"} >
        Delivery state
        </Typography>
        <Typography width={'68px'} px={'12px'} py={"24px"} >

        </Typography>
    </Stack>
  )
}

export default AdminNav