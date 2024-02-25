import React, { useContext } from "react";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import axios from "axios";
import { OrderContext } from "./OrderContext";

function OrderFood({ data }: any) {
  const order = useContext(OrderContext);

  const Orderhandler = async () => {
    try {
      const orderData = {
        khoroo: "order.orderDetails.khoroo",
        apartment: "order.orderDetails.apartment,",
        district: "order.orderDetails.district,",

        foods: data.map((foodItem) => ({
          name: foodItem.selectedFood.name,
          price: foodItem.selectedFood.price,
          ingredient: foodItem.selectedFood.ingredient,
        })),
      };

      const response = await axios.post(
        "http://localhost:8000/order",
        orderData
      );
      console.log(orderData);
    } catch (error) {
      console.error("Error posting order:", error);
    }
  };

  return (
    <Stack>
      {data.map((foodItem) => (
        <Card
          key={foodItem.selectedFood.name} // Add a unique key to each card
          sx={{ width: "245px", display: "flex", gap: "20px", padding: "10px" }}
        >
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
              <Typography>{foodItem.selectedFood.ingredient}</Typography>
            </Box>
          </Box>
        </Card>
      ))}
      <Button onClick={Orderhandler}>Захиалах</Button>
    </Stack>
  );
}

export default OrderFood;
