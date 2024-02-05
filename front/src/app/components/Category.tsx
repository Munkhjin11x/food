import { Box, Typography } from '@mui/material'
import React from 'react'
import FoodCard from './FoodCard'

export default function Category({ food, isLoading }: any) {
  return (
    <Box>
      <Typography>{food.name}</Typography>
      <Box>
        {isLoading ? "loading" : food.foodId.map((e: any) => {
          return <FoodCard food={e} foodcate={food} />
        })}
      </Box>

    </Box>
  );
}