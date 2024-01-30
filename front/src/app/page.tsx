'use client'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';

export default function Home() {
  const [modal,setModal]=React.useState<boolean>(false)
 const modalHandle = ()=>{
setModal(!modal)
  }
  return (
<Stack >
  <Navbar onClick={modalHandle}/>
  {modal&&(
    <LoginModal/>

  )}
  <Footer/>
    </Stack>
  );
}
