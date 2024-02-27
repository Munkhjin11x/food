import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import useSWR from "swr";
import axios from "axios";

const AddFoodModal = () => {
  const [food, setFood] = useState({
    name: "",
    image: "", 
    ingredient: "",
    price: "",
    discount: 0, 
    category: "",
  });

  const [category, setCategory] = useState("");
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/category",
    fetcher
  );

  console.log(data);

  const addFoodHandler = async () => {
    try {
      const response = await axios.post("http://localhost:8000/foods", food); // Updated endpoint to add food
      console.log("Food added successfully:", response.data);
      // Optionally, you can reset the input fields after adding
      setFood({
        name: "",
        image: "",
        ingredient: "",
        price: "",
        discount: 0,
        category: "",
      });
    } catch (error) {
      console.error("Error adding food:", error);
    }
  };

  return (
    <Box className="bg-black bg-opacity-70 w-full h-full fixed top-0  z-10 flex justify-center items-center">
      <Box className="flex flex-col p-5  mt-[111px] items-center w-[400px] bg-white">
        <Typography>Food name</Typography>
        <input
          placeholder="foodname"
          type="text"
          value={food.name}
          onChange={(e) => setFood({ ...food, name: e.target.value })}
          className="px-[12px] border-solid border-[1px]"
        />
        <Select
          value={food.category}
          onChange={(e) => setFood({ ...food, category: e.target.value })}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            Select a category
          </MenuItem>
          {data &&
            data.map((e) => (
              <MenuItem value={e.name} key={e._id}>
                {e.name}
              </MenuItem>
            ))}
        </Select>
        <input
          placeholder="price"
          type="text"
          value={food.price}
          onChange={(e) => setFood({ ...food, price: e.target.value })}
          className="px-[12px] border-solid border-[1px]"
        />
        <input
          placeholder="ingredient"
          type="text"
          value={food.ingredient}
          onChange={(e) => setFood({ ...food, ingredient: e.target.value })}
          className="px-[12px] border-solid border-[1px]"
        />
        <input
          placeholder="discount"
          type="range"
          value={food.discount}
          onChange={(e) =>
            setFood({ ...food, discount: parseInt(e.target.value) })
          }
          className="px-[12px] border-solid border-[1px]"
        />
           <input
              type="text"
              placeholder="Хоолны зурагны URL"
              color="#8B8E95"
              width={587}
              onChange={(e) =>
                setFood( { ...food, image: e.target.value })
              }
            
            />
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            className="bg-black"
            sx={{ color: "white", bgcolor: "black" }}
          >
            clear
          </Button>
          <Button
            onClick={addFoodHandler}
            className="bg-black"
            sx={{ color: "white", bgcolor: "black" }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddFoodModal;
