import React, { useState, useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import FoodCard from "./FoodCard";
import useSWR from "swr";
import FoodModal from "./FoodModal";
import axios from "axios";
import NewCategoryModal from "./NewCategoryModal";
import AddFoodModal from "./AddFoodModal";

export default function AdminCategory({
  food,
  selectedCategory,
  setSelectedCategory,
}: any) {
  const [filteredFood, setFilteredFood] = useState(null);
  const [modal, setModal] = useState<boolean>(false);
  const [foodModal, setFoodModal] = useState<boolean>(false);

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/foods/food",
    fetcher
  );

  useEffect(() => {
    if (food.length > 0 && !selectedCategory) {
      setSelectedCategory(food[0].name);
      setFilteredFood(food[0]);
    }
  }, [food, selectedCategory, setSelectedCategory]);

  const handleCategoryClick = (categoryName: string) => {
    const filtered = food.filter((e) => e.name === categoryName);
    setFilteredFood(filtered[0]);
    setSelectedCategory((prevCategory) =>
      prevCategory === categoryName ? null : categoryName
    );
  };

  const modalHandle = () => {
    setModal(!modal);
  };
  const foodModalHandle = () => {
    setFoodModal(!foodModal);
  };

  return (
    <Stack sx={{ display: "flex", flexDirection: "row" ,justifyContent:'center'}}>
      <Stack
        display={"flex"}
        justifyContent={"center"}
        direction="column"
        gap={2}
      >
        <Typography>Food menu</Typography>
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
        <Button
          sx={{
            color: "black",
            border: "solid",
            borderWidth: "1px",
            width: "200px",
          }}
          onClick={modalHandle}
        >
          Add new category+
        </Button>
        {modal && <NewCategoryModal />}
      </Stack>
      <Stack sx={{background:'#F7F7F8',padding:'20px'}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            background:'#F7F7F8'
          }}
        >
          <Typography>Category</Typography>
          <Button onClick={foodModalHandle} sx={{ height: "20px" }}>
            Add new Food
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "100px",
            flexWrap: "wrap",
            justifyContent: "center",
            background:'#F7F7F8'  
          }}
        >
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
        {foodModal && <AddFoodModal />}
      </Stack>
    </Stack>
  );
}
