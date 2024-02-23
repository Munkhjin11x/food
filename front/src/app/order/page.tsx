'use client'
import { Stack } from '@mui/material'
import { useContext, useState } from 'react'
import { FoodContext, FoodProvider } from '../components/Context'
import Test from '../components/Test'
import useSWR from 'swr'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/navigation'

function order() {
    const fetcher = (url: string) => fetch(url).then((r) => r.json());
    const [category, setCategory] = useState(null);
    const { foodData,updateFoodData }  = useContext(FoodContext)

  return (
   <FoodProvider>
      <Stack display={"flex"} justifyContent={"center"}>
      <Navbar/>
          <Test/>
      </Stack>
      </FoodProvider>
  )
}

export default order