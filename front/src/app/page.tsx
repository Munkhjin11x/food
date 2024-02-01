'use client'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';
import budaa from "../../public/img/Group 534.png"
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import BackPicture from "./icons/BackPicture";
import Cardm from './components/Card';
import FoodCard from './components/FoodCard';
interface FoodItem {
  name: string;
}
export default function Home() {
  const [modal, setModal] = React.useState<boolean>(false)
  const [foodItems, setFoodItems] = React.useState<FoodItem[]>([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  React.useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/foods/food');
        setFoodItems(response.data);
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };
    fetchFoodItems();
  }, []);

  const modalHandle = () => {
    setModal(!modal)
  }
  const filteredFoodItems = foodItems.filter((food) =>
  food.name.toLowerCase().includes(searchQuery.toLowerCase())
);
  return (  
    <Stack sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}  >
      <Navbar   value={searchQuery}   onChange={(e:any) => setSearchQuery(e.target.value)} onClick={modalHandle} />
      <div className="border-[1px] rounded-lg">
                </div>
      <Box sx={{backgroundColor:"#18BA51",display:'flex',height:'788px',alignItems:'center',  justifyContent:'center',gap:"228px",}}>
        <BackPicture/>
        <Box display={'flex'} flexDirection={'column'} gap={4}>
        <Typography fontSize={55} color={'white'} >Pinecone <br /> Food delivery</Typography>
        <hr />
      <Typography fontSize={22} color={'white'} >PinHorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</Typography>
        </Box>
      <Image  src={budaa} width={588} className='h-[438px]'  alt='budaa' />
      </Box>
      {
        modal && (
          <LoginModal onChange={modalHandle} />
        )
      }
    <Cardm/>
    <FoodCard food={filteredFoodItems}/>
      <Footer />
    </Stack >
  );
}
