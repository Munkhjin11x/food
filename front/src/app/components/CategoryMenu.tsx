import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import FoodCard from "./FoodCard";

export default function CategoryMenu({ food }: any) {
  if (food.name === "Sales") {
    return null;
  }
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === categoryName ? null : categoryName
    );
  };
  console.log(selectedCategory);

  return (
    <Stack>
      <Button
        sx={{
          color: "black",
          border: "solid",
          borderWidth: "1px",
          width: "200px",
        }}
        style={{
          background: selectedCategory === food.name ? "#18BA51" : "",
        }}
        onClick={() => handleCategoryClick(food.name)}
      >
        {food.name}
      </Button>

      <Box sx={{ display: "flex", marginTop: "100px" }}>
        {selectedCategory === food.name &&
          food.foodId &&
          food.foodId.map((foodItem: any) => (
            <FoodCard key={foodItem.id} food={foodItem} foodcate={food} />
          ))}
      </Box>
    </Stack>
  );
}
