import { Box, Button, Input, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const NewCategoryModal = () => {
  const [category, setCategory] = useState("");
  const addNewCategoryHandler = async () => {
    try {
      const response = await axios.post("http://localhost:8000/category", {
        name:category,
      });
      console.log('object',response.data);
      setCategory('')
    } catch (error) {}
  };

  return (
    <Box className="bg-black bg-opacity-70 w-full h-full fixed top-0  z-10 flex justify-center items-center">
      <Box className="flex flex-col p-5  mt-[111px] items-center w-[400px] bg-white   ">
        <Typography>Category name</Typography>
        <input
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          placeholder="category"
          type="text"
          className=" px-[12px] border-solid border-[1px]"
        />
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            className="bg-black"
            sx={{ color: "white", bgcolor: "black" }}
          >
            clear
          </Button>
          <Button
            onClick={addNewCategoryHandler}
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
export default NewCategoryModal;
