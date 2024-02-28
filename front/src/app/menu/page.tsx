"use client";
import { Card, Stack, selectClasses } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import useSWR from "swr";
import Category from "../components/Category";
import CategoryMenu from "../components/CategoryMenu";
import CardModal from "../components/CardModal";
import { FoodProvider } from "../components/Context";

export default function Menu() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const [modal, setModal] = useState<boolean>(false);
  const [category, setCategory] = useState(null);
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/category",
    fetcher
  );
  console.log(data)
  const modalHandle = () => {
    setModal(!modal);
  };
  return (

      <Stack display={"flex"} justifyContent={"center"}>
        <Navbar orderClick={modalHandle} />
        <Stack
          display={"flex"}
          flexDirection={"row"}
          sx={{ justifyContent: "center" }}
        >
          {!isLoading && (
            <CategoryMenu
              food={data}
              selectedCategory={category}
              setSelectedCategory={setCategory}
            />
          )}
          {modal && <CardModal onClick={modalHandle} />}
        </Stack>
      </Stack>
  );
}
