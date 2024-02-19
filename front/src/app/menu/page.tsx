"use client";
import { Stack, selectClasses } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import useSWR from "swr";
import Category from "../components/Category";
import CategoryMenu from "../components/CategoryMenu";

export default function Menu() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const [category, setCategory] = useState(null)
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/category",
    fetcher
  );
  return (
    <Stack>
      <Navbar />
      <Stack
        display={"flex"}
        flexDirection={"row"}
        sx={{ justifyContent: "center" }}
      >

        {
          !isLoading && <CategoryMenu food={data} selectedCategory={category} setSelectedCategory={setCategory} />
        }
        {/* {isLoading
          ? data
          : data.map((el: any) => (
            
          ))} */}
      </Stack>
    </Stack>
  );
}
