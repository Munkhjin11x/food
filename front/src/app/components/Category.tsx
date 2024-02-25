import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import FoodCard from "./FoodCard";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FoodModal from "./FoodModal";
import useSWR from "swr";

export default function Category({ food, isLoading }: any) {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  const { data, error } = useSWR("http://localhost:8000/foods/food", fetcher);
  const [modal, setModal] = useState<boolean>(false);

  const [selectedFoodCardId, setSelectedFoodCardId] = useState(null);

  const modalHandle = (foodId) => {
    setSelectedFoodCardId(foodId);
    setModal(!modal);
  };
  return (
    <Box key={food._id} sx={{ paddingX: "240px", marginY: "120px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <WorkspacesIcon sx={{ color: "#18BA51" }} />
          <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
            {food.name}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            color: "#18BA51",
            cursor: "pointer",
          }}
        >
          Бүгдийг sхарах{" "}
          <span>
            <ArrowForwardIosIcon />
          </span>
        </Typography>
      </Box>
      <Box
        key={food._id}
        sx={{
          display: "flex",
          gap: "24px",
          marginTop: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isLoading
          ? "loading"
          : food.foodId.map((e: any) => {
              return (
                <FoodCard
                  onClick={() => modalHandle(e._id)}
                  food={e}
                  foodcate={food}
                />
              );
            })}
      </Box>
      {modal && (
        <FoodModal
          onClick={modalHandle}
          food={data}
          foodCardId={selectedFoodCardId}
        />
      )}
    </Box>
  );
}
