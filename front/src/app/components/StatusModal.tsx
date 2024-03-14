'use client'
import { Box, MenuItem, Select, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

function StatusModal({selectedId}:any) {
    const  [selected, setSelected]=  useState('')
    const handle = async ()=>{
        try {

            const res = await axios.put(`http://localhost:8000/order/${selectedId}`,{
                status:selected
            })
        } catch (error) {
            console.log(error)
        }
    }
    const progress = [
    'inprogress',
    'delivered',
    'waiting'
    ]

  return (
  <Box>
    <Select value={selected} onChange={ (e)=> setSelected(e.target.value)}>
        {progress.map((e)=>(
            <MenuItem value={e} key={e} onClick={handle}> 
            {e}
            </MenuItem>
        ))}
    </Select>
  </Box>
  )
}

export default StatusModal