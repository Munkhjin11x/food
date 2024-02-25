import { Box, Button, Stack, Typography } from "@mui/material";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { FoodContext } from "./Context";

function FoodModal({ foodCardId, food, onClick }: any) {
  const [count, setCount] = useState(1);
  const { addToCart, foodData }: any = useContext(FoodContext);
  const selectedFood = food.find((item: any) => item._id === foodCardId);
  const cardHandler = () => {
    const foodItem = {
      selectedFood,
      count,
    };
    addToCart(foodItem);
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
            <img className="w-[500px] h-[500px]" src={selectedFood.image} />
            <Stack display={"flex"} justifyContent={"space-between"}>
              <Box key={selectedFood.id}>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "400",
                    cursor: "pointer",
                    textAlign: "end",
                  }}
                  onClick={onClick}
                >
                  x
                </Typography>
                <Typography sx={{ fontWeight: "800", fontSize: "24px" }}>
                  {selectedFood.name}
                </Typography>

                <Typography
                  sx={{ fontWeight: "600", fontSize: "20px", color: "#18BA51" }}
                >
                  {selectedFood.price}₮
                </Typography>
                <Typography sx={{ fontWeight: "800", fontSize: "18px" }}>
                  Орц
                </Typography>
                <Typography> {selectedFood.ingredient}</Typography>
              </Box>
              <Box>
                <Typography> Тоо</Typography>
                <Box display={"flex"} gap={15}>
                  <Button
                    className=" bg-[#18BA51] text-white"
                    onClick={decrementCount}
                  >
                    -
                  </Button>
                  <Typography>{count}</Typography>
                  <Button
                    className=" bg-[#18BA51] text-white"
                    onClick={incrementCount}
                  >
                    +
                  </Button>
                </Box>
                <Button
                  className=" bg-[#18BA51]"
                  sx={{
                    color: "white",
                    ":hover": { color: "#18BA51" },
                    background: "green",
                    width: "379px",
                  }}
                  onClick={cardHandler}
                >
                  add to card
                </Button>
              </Box>
            </Stack>
          </Stack>
        )}
      </Box>
    </Stack>
  );
}
export default FoodModal;
