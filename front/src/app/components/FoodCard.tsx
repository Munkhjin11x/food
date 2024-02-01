import { Box, Stack } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function FoodCard({ food }: any) {
  return (
    <div className='flex flex-wrap  justify-center gap-10'>
      {food &&
        food.map((e: any, index: any) => {
          const discountedPrice = e.price - (e.price * 30) / 100;
          return (
            <Card key={index} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                sx={{borderRadius:'20px',width:'350px',height:'200px'}}
                  component="img"
               
                  image={e.image}
                  alt="food item"
                />
                <CardContent>
                <Typography fontSize={25}>
                    {e.name}
                  </Typography>
                    <Box sx={{display:"flex",gap:'20px', color:'#18BA51'}}>
                  <Typography gutterBottom variant="h5" component="div">
                      {discountedPrice.toLocaleString()}₮
                  </Typography>
                      <Typography color="text.secondary" sx={{ textDecoration: "line-through" }}>
                        {e.price.toLocaleString()}₮
                      </Typography>
                    </Box>
            
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
    </div>
  );
}
