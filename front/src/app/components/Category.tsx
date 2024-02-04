import { Box, Typography } from '@mui/material'
import React from 'react'
import FoodCard from './FoodCard'

export default function Category({ food }: any) {
  console.log(food.foodId[0]);
  return (
    <Box>
      <Typography>{food.name}</Typography>
      <Box>
        {/* {food.foodId[0].map((item: any) => (
          <FoodCard key={item.id} food={item} />
        ))} */}
      </Box>
    </Box>
  );
}

   // console.log(food)
    // const filteredFood = food.filter((e: any) => {
    //     return e.name === 'salad';
    //   });
// console.log(filteredFood)