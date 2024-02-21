import React, { useContext } from "react";
import { FoodContext } from "./Context";
import { Stack } from "@mui/material";

export default function CardModal() {
  const { foodData } = useContext(FoodContext);

  return (
    <Stack>
      {foodData &&
        foodData.map((foodItem, index) => (
          <div>{foodItem.selectedFood.name}</div>
        ))}
    </Stack>
  );
}
