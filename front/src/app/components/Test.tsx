import React, { useContext } from "react";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import axios from "axios";
import { OrderContext } from "./OrderContext";
import { useRouter } from "next/navigation";
import cookies from 'js-cookie'
import jwt from "jsonwebtoken";
import Step from "./Step";
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
        phone:order.orderDetails.phone,
        desc:order.orderDetails.desc,
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
    <Stack sx={{}} padding={'24px'} spacing={2} >
      <Step children={'Хаягийн мэдээлэл оруулах'} step={'Алхам 2'} />
      <Card sx={{width:'432px ', display:'flex',flexDirection:'column',gap:'20px',alignItems:'center', padding:'20px'}}>
        {data.map((foodItem) => (
          <Card
            key={foodItem.selectedFood.name}
            sx={{ width: "384px", display: "flex", gap: "20px",padding:'16px'}}
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
                <Typography sx={{fontSize:'18px',fontWeight:'600'}}>{foodItem.selectedFood.name} </Typography>
                <Typography sx={{fontSize:'18px',fontWeight:'600',color:'#18BA51'}}>{foodItem.selectedFood.price}₮ </Typography>
                <Typography  sx={{fontSize:'16px',fontWeight:'400',color:'#767676'}}>{foodItem.selectedFood.ingredient}</Typography>
              </Box>
            </Box>
            
          </Card>
     
        ))}
                   <Box sx={{display:'flex',justifyContent:'center',gap:'40px',padding:'16px'}}>
   <Box>

   <Typography>Нийт төлөх дүн</Typography>
                {getTotalPrice()}₮<Typography></Typography>
   </Box>
                <Button className=" bg-[#18BA51]" sx={{paddingX:'16px',paddingY:'8px',color:'white'}} onClick={Orderhandler}>Захиалах</Button>
              </Box>
        </Card>


    </Stack>
  );
}

export default OrderFood;
