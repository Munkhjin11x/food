'use client'
import { Stack } from "@mui/material";
import  { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import CategoryMenu from "../components/CategoryMenu";
import AdminCategory from "../components/AdminCategory";
import Navbar from "../components/Navbar";
function adminDashboard() {
  const [modal, setModal] = useState<boolean>(false);
  const [category, setCategory] = useState(null);

  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/category",
    fetcher
  );
  
  const modalHandle = () => {

    setModal(!modal);
  };
  return(
    <Stack>
      <Navbar/>
              {!isLoading && (
            <AdminCategory
              food={data}
              selectedCategory={category}
              setSelectedCategory={setCategory}
            />
          )}
    </Stack>
  )
  
}

export default adminDashboard;
