import { Box, Typography } from '@mui/material'
import React from 'react'
import FoodCard from './FoodCard'
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Category({ food, isLoading }: any) {
  return (
    <Box key={food._id} sx={{paddingX:"240px",marginY:"120px"}}>
      <Box sx={{display:'flex',justifyContent:"space-between"}}>  
         <Box sx={{display:"flex" ,alignItems:'center',gap:'20px'}}>
      <WorkspacesIcon sx={{color:"#18BA51"}}/>
      <Typography sx={{fontSize:'22px',fontWeight:"700"}}>{food.name}</Typography>
      </Box>
      <Typography sx={{fontSize:'14px',fontWeight:"400",color:"#18BA51",cursor:'pointer'}}>Бүгдийг харах <span><ArrowForwardIosIcon/></span></Typography>
      </Box>
      <Box key={food._id} sx={{display:'flex',gap:'24px',marginTop:'20px',justifyContent:'center'}}>
        {isLoading ? "loading" : food.foodId.map((e: any) => {
          return <FoodCard food={e} foodcate={food} />
        })}
      </Box>

    </Box>
  );
}