import { Box } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function FoodCard({ food }: any) {
  console.log(food);

  if (!food || !food.foodId || !food.foodId[0]) {
    // Handle the case when 'food' or 'food.foodId[0]' is undefined
    return null;
  }

  const discountedPrice = food.foodId[0].price - (food.foodId[0].price * 20) / 100;

  return (
    <div className='flex justify-center gap-10'>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            sx={{ borderRadius: '20px', width: '350px', height: '200px' }}
            component="img"
            image={food.foodId[0].image}
            alt="food item"
          />
          <CardContent>
            <Typography fontSize={25}>{food.foodId[0].name}</Typography>
            <Box sx={{ display: 'flex', gap: '20px', color: '#18BA51' }}>
              <Typography gutterBottom variant="h5" component="div">
                {discountedPrice.toLocaleString()}₮
              </Typography>
              <Typography color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                {food.foodId[0].price.toLocaleString()}₮
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
