"use client";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";
import budaa from "../../public/img/Group 534.png";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import BackPicture from "./icons/BackPicture";
import Cardm from "./components/Card";
import useSWR from "swr";
import { useMemo, useState } from "react";
import Category from "./components/Category";
import CardModal from "./components/CardModal";
import { FoodProvider } from "./components/Context";
interface FoodItem {
  name: string;
}
export default function Home() {
  const [modal, setModal] = useState<boolean>(false);
  const [order, setOrder] = useState<boolean>(false);

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/category",
    fetcher
  );
  const modalHandle = () => {
    setModal(!modal);
    console.log("object");
  };
  const orderModal = () => {
    setOrder(!order);
  };
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Navbar onClick={modalHandle} orderClick={orderModal} />
      <Box
        sx={{
          backgroundColor: "#18BA51",
          display: "flex",
          height: "788px",
          alignItems: "center",
          justifyContent: "center",
          gap: "228px",
        }}
      >
        <BackPicture />
        <Box display={"flex"} flexDirection={"column"} gap={4}>
          <Typography fontSize={55} color={"white"}>
            Pinecone <br /> Food delivery
          </Typography>
          <hr />
          <Typography fontSize={22} color={"white"}>
            PinHorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </Typography>
        </Box>
        <Image src={budaa} width={588} className="h-[438px]" alt="budaa" />
      </Box>
      {modal && <LoginModal onClick={modalHandle} />} <Cardm />
      {isLoading
        ? data
        : data.map((el: any) => <Category food={el} isLoading={isLoading} />)}
      {order && <CardModal onClick={orderModal} />}
      <Footer />
    </Stack>
  );
}
