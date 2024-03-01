'use client'
import { Stack } from "@mui/system"
import useSWR from "swr";
import cookies from 'js-cookie'
import jwt from "jsonwebtoken";
import Step from "@/app/components/Step";
import { Box, Card, Typography } from "@mui/material";
import Navbar from "@/app/components/Navbar";
import { it } from "node:test";
import Step2 from "@/app/components/Step2";


const historyPage = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const token = cookies.get('token')
  const code = jwt.decode(token as any);
  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/userOrder/${code.payload.id}`,
    fetcher
  );
console.log(data)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  return (
    <Stack>
      <Navbar />
      <Box sx={{display:'flex',justifyContent:'center ',gap:'100px'}}>
   <Card>
   {data && data.map((foodItem, index) => (
          <Stack >
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', width: '384px', padding: '16px' }}  >
              <Box >
                <Step2 process={foodItem.process} order={foodItem.orderNumber} />

              </Box>
              <Typography>{formatDate(foodItem.createdDate)}</Typography>
              <Typography></Typography>

            </Box>
            <Box>

            </Box>
          </Stack>
        )
        )
        }
   </Card>
        <Card sx={{width:'432px'}}>
        <Typography>Захиалгын дэлгэрэнгүй</Typography>
        {data && data.map((item) => (
          <Stack sx={{padding:'16px'}}>
                <Box>
                
                  {item.foods.map(e=>(
                    <Typography>{e.name}</Typography>
                  ))}
          <hr />
              </Box>
          </Stack>
        ))} 
        </Card>
 
      </Box>


    </Stack>
  )
}
export default historyPage