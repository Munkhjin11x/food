import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

export default function CategoryMenu({food}:any) {
    if (food.name ==='Sales') {
            return null 
    }
    console.log(food.name)
  return (
  <Stack display={'flex'} flexDirection={'row'} >
    <Button>{food.name}</Button>
  </Stack>
  )
}
