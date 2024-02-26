import React, { useContext, useState } from "react";
import { FoodContext } from "./Context";
import { Box, Stack, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function CardModal({ onClick }: any) {
  const { foodData, updateFoodData } = useContext(FoodContext);
  const router = useRouter();
  const increaseCount = (index) => {
    const updatedFoodData = [...foodData];
    updatedFoodData[index].count++;
    updateFoodData(updatedFoodData);
  };
  const decreaseCount = (index) => {
    const updatedFoodData = [...foodData];
    if (updatedFoodData[index].count > 0) {
      updatedFoodData[index].count--;
      updateFoodData(updatedFoodData);
    }
  };
  const getTotalPrice = () => {
    let totalPrice = 0;
    foodData.forEach((foodItem) => {
      totalPrice += foodItem.selectedFood.price * foodItem.count;
    });
    return totalPrice;
  };
  const order = () => {
    router.push("/order");
    localStorage.setItem("data", JSON.stringify(foodData));
  };
  return (
    <Stack className="bg-black bg-opacity-70 w-full h-full fixed top-0  z-10 flex justify-center items-center">
      <Stack className="flex justify-between flex-col p-5 items-center h-full fixed top-0 right-0  bg-white ">
        <Stack>
          <Box display={"flex"} alignItems={"center"} gap={9}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                cursor: "pointer",
                textAlign: "end",
              }}
              onClick={onClick}
            >
              <ArrowBackIosIcon />
            </Typography>
            <Typography sx={{ width: "200px" }}>Таны сагс</Typography>
          </Box>
          {foodData &&
            foodData.map((foodItem, index) => (
              <Card key={index}>
                <CardContent sx={{ display: "flex" }}>
                  <img
                    className=" w-[245px] h-[150px]"
                    src={foodItem.selectedFood.image}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <Box>
                      <Typography>{foodItem.selectedFood.name} </Typography>
                      <Typography>{foodItem.selectedFood.price}₮ </Typography>
                    </Box>
                    <Box display={"flex"}>
                      <Button
                        className=" bg-[#18BA51] text-white "
                        sx={{ width: "10px" }}
                        onClick={() => decreaseCount(index)}
                      >
                        -
                      </Button>
                      <Typography>{foodItem.count}</Typography>
                      <Button
                        className=" bg-[#18BA51] text-white"
                        onClick={() => increaseCount(index)}
                      >
                        +
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
        </Stack>
        <Card
          className="w-full "
          sx={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardContent sx={{ display: "flex" }}>
            <Box>
              <Typography>Нийт төлөх дүн</Typography>
              {getTotalPrice()}₮<Typography></Typography>
            </Box>
            <Button onClick={order}>Захиалах</Button>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
}
