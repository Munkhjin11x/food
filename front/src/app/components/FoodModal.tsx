import { Box, Button, Stack, Typography } from "@mui/material";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { FoodContext } from "./Context";


function FoodModal({ foodCardId, food, onClick }: any) {
  const [count, setCount] = useState(1);
  const { addToCart, foodData }:any = useContext(FoodContext);
  const selectedFood = food.find((item:any) => item._id === foodCardId);
  const cardHandler = () => {
    const foodItem = {
      selectedFood,
      count
    };
    addToCart(foodItem);
    console.log(foodData)
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };
 
  return (
    <Stack className="bg-black bg-opacity-70 w-full h-full fixed top-0  z-10 flex justify-center items-center">
      <Box className="flex flex-col p-5  mt-[111px] items-center  bg-white ">
        {selectedFood && (
          <Stack padding={5} display={"flex"} direction={"row"} gap={5}>
            <img src={selectedFood.image} />
            <Stack>
              <Typography
                sx={{ fontSize: "18px", fontWeight: "400" }}
                onClick={onClick}
              >
                x
              </Typography>
              <Box key={selectedFood.id}>
                <Typography sx={{ fontWeight: "800", fontSize: "24px" }}>
                  {selectedFood.name}
                </Typography>
                <Typography> {selectedFood.ingredient}</Typography>
              </Box>

              <Box display={"flex"}>
                <Button onClick={decrementCount}>-</Button>
                <Typography>{count}</Typography>
                <Button onClick={incrementCount}>+</Button>
              </Box>
              <Button onClick={cardHandler}>add to card</Button>
            </Stack>
          </Stack>
        )}
      </Box>
    </Stack>
  );
}
export default FoodModal;
