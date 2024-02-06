import { Box } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
interface FoodCardProps {
  food: {
    name: string;
    price: number;
    image: string;
  discount:number
  };
  foodcate: {
    name: string;
  };
}
export default function FoodCard({ food, foodcate }: FoodCardProps) {
  const categoryName = foodcate?.name || '';
  const isSalesCategory = categoryName === 'Sales';
  const discountedPrice = isSalesCategory
    ? food.price - (food.price * food.discount) / 100
    : food.price;
  return (
    <div className='flex justify-center gap-10 '>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            sx={{ borderRadius: '20px', width: '350px', height: '200px' }}
            component="img"
            image={food.image}
            alt="food item"
          />
          <CardContent>
            <Typography fontSize={25}>{food.name}</Typography>
            <Box sx={{ display: 'flex', gap: '20px', color: '#18BA51',fontWeight:'600' }}>
              <Typography gutterBottom variant="h5" component="div">
                {discountedPrice.toLocaleString() }₮
              </Typography>
              <Typography color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                { foodcate.name== 'Sales' && `${food.price.toLocaleString()}${'₮'}`}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
