import React, { useContext } from "react";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import axios from "axios";
import { OrderContext } from "./OrderContext";
import { useRouter } from "next/navigation";
import cookies from 'js-cookie'
import jwt from "jsonwebtoken";
function OrderFood({ data }: any) {
  const order = useContext(OrderContext);
  const router = useRouter()
  const token = cookies.get('token')
  const code = jwt.decode(token as any);

  const Orderhandler = async () => {
    try {
      const orderData = {
        userid: code.payload.id,
        khoroo: order.orderDetails.khoroo,
        apartment: order.orderDetails.apartment,
        district: order.orderDetails.district,
        orderNumber: generateOrderNumber(),
        totalPrice: getTotalPrice(),
        createdDate: new Date(),
        foods: data.map((foodItem) => foodItem.selectedFood),

      };
      const response = await axios.post(
        "http://localhost:8000/order",
        orderData
      );
      console.log(code)
      router.push(`/historyPage/${code.payload.id}`)
    } catch (error) {
      console.error("Error posting order:", error);
    }
  };

  function generateOrderNumber() {
    let orderNumber = '';
    for (let i = 0; i < 5; i++) {
      orderNumber += Math.floor(Math.random() * 10);
    }
    return orderNumber;
  }
  const getTotalPrice = () => {
    let totalPrice = 0;
    data.forEach((foodItem) => {
      totalPrice += foodItem.selectedFood.price * foodItem.count;
    });
    return totalPrice;
  };

  return (
    <Stack sx={{ width: '432px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between   ' }}>
      <Box>
        {data.map((foodItem) => (
          <Card
            key={foodItem.selectedFood.name}
            sx={{ width: "384px", display: "flex", gap: "20px", padding: "10px" }}
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
        ))}</Box>

      <Box>
        <Typography>Нийт төлөх дүн</Typography>
        {getTotalPrice()}₮<Typography></Typography>
        <Button onClick={Orderhandler}>Захиалах</Button>
      </Box>
    </Stack>
  );
}

export default OrderFood;
