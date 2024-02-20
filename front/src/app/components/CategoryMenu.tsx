import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import FoodCard from "./FoodCard";
import useSWR from "swr";
import FoodModal from "./FoodModal";

export default function CategoryMenu({
  food,
  selectedCategory,
  setSelectedCategory,
}: any) {
  const [filteredFood, setFilteredFood] = useState(null);
  const [modal, setModal] = useState<boolean>(false);
  const [selectedFoodCardId, setSelectedFoodCardId] = useState(null);
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/foods/food",
    fetcher
  );
  if (food.name === "Sales") {
    return null;
  }
  const handleCategoryClick = (categoryName: string) => {
    const filtered = food.filter((e) => e.name === categoryName);
    setFilteredFood(filtered[0]);
    setSelectedCategory((prevCategory) =>
      prevCategory === categoryName ? null : categoryName
    );
  };
  const modalHandle = (foodId) => {
    setSelectedFoodCardId(foodId);
    setModal(!modal);
  };
  console.log(filteredFood);
  return (
    <Stack>
      <Stack direction="row" gap={2}>
        {food.map((f: any) => (
          <Button
            key={f.id}
            sx={{
              color: "black",
              border: "solid",
              borderWidth: "1px",
              width: "200px",
            }}
            style={{
              background: selectedCategory === f.name ? "#18BA51" : "",
            }}
            onClick={() => handleCategoryClick(f.name)}
          >
            {f.name}
          </Button>
        ))}
      </Stack>
      <Box sx={{ display: "flex", marginTop: "100px", flexWrap: "wrap" }}>
        {!selectedCategory &&
          !isLoading &&
          data.map((e) => (
            <FoodCard
              onClick={() => modalHandle(e._id)}
              key={e.id}
              food={e}
              foodcate={food}
            />
          ))}
        {selectedCategory &&
          filteredFood &&
          filteredFood?.foodId?.map((e) => (
            <FoodCard
              onClick={() => modalHandle(e._id)}
              key={e.id}
              food={e}
              foodcate={food}
            />
          ))}
      </Box>
      {modal && <FoodModal onClick={modalHandle} food={data} foodCardId={selectedFoodCardId} />}
    </Stack>
  );
}
