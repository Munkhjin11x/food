'use client'
import { Stack } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import useSWR from 'swr';
import Category from '../components/Category';
import CategoryMenu from '../components/CategoryMenu';

export default function Menu() {

  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const { data, error, isLoading } = useSWR('http://localhost:8000/category', fetcher)
  return (
    <Stack>
        <Navbar/>
        <Stack display={'flex'} flexDirection={'row'}>
        {isLoading ? data : data.map((el: any) => <CategoryMenu food={el} isLoading={isLoading} />  )}
        </Stack>
    </Stack>
  )
}
