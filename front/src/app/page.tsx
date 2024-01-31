'use client'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';
import budaa from "../../public/img/Group 534.png"

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import BackPicture from "./icons/BackPicture";
import Cardm from './components/Card';

export default function Home() {
  const [modal, setModal] = React.useState<boolean>(false)
  const modalHandle = () => {
    setModal(!modal)
  }
  return (
    <Stack sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}  >
      <Navbar onClick={modalHandle} />
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
      <Footer />
    </Stack >
  );
}
