"use client";
import { Box, Stack } from "@mui/material";
import { useContext, useState } from "react";
import { FoodContext, FoodProvider } from "../components/Context";
import OrderFood from "../components/Test";
import useSWR from "swr";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import OrderDetail from "../components/OrderDetail";
import { OrderProvider } from "../components/OrderContext";
import axios from "axios";

function order() {
  const store = JSON.parse(localStorage.getItem("data") as any);
  console.log(store, "s");

  return (
    <OrderProvider>
      <Stack display={"flex"} justifyContent={"center"}>
        <Navbar />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <OrderDetail />
          <OrderFood data={store} />
        </Box>
      </Stack>
    </OrderProvider>
  );
}

export default order;
