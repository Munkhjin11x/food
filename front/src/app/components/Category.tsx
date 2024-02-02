import { Box, Typography } from '@mui/material'
import React from 'react'
import FoodCard from './FoodCard'
export default function Category({food}:any) {
    console.log(food)
    // const filteredFood = food.filter((e: any) => {
    //     return e.name === 'salad';
    //   });
// console.log(filteredFood)
  return (
<Box>
    <Box>
            <Typography>{food.name}</Typography>
            {/* {food && food.map((e:any)=><FoodCard food={e} /> )} */}
        </Box>
</Box>
  )
}
