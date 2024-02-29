import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import StatusModal from './StatusModal';
function AdminOrder({ data }: any) {
  const [modal, setModal] = useState<boolean>(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const  orderId = data &&data.map(e=>{
    const id =e._id
    return id
  })
    const modalHandle = (orderId: string) => {
        setSelectedOrderId(orderId);
        setModal(!modal);
    };
    console.log(selectedOrderId)
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
    return (
        <Box display={'flex'}>
            <Box display={'flex'} flexDirection={'column'} gap={2} width={'fit'} height={'72px'} px={'16px'} py={"24px"}>
            {data && data.map((e) => (
                <Box gap={'20px'} display={'flex'}  >
                     {
                        e.foods.map(food => (
                            <img width={'40px'} height={'40px'} src={food.image} />
                        ))
                    }
          <Box>
          <Typography>#{e.orderNumber}</Typography>
                    {
                        e.foods.map(food => (
                            <Typography>{food.name}</Typography>
                        ))
                    }
          </Box>
                </Box>
            ))}
            </Box>
      <Box display={'flex'} flexDirection={'column'} gap={2} width={'140px'} height={'72px'} px={'16px'} py={"24px"}>
  {data && data.map((e)=>(
    <Box  display={'flex'} flexDirection={'column'}>
              <Typography>{e.userid.name}</Typography>
        <Typography>{e.userid.phone_number}</Typography>
    </Box>
  ))}    
      </Box>
      <Box display={'flex'} flexDirection={'column'} gap={2} width={'230px'} height={'72px'} py={"24px"}   >
  {data && data.map((e)=>(
    <Box  display={'flex'} gap={2} alignItems={'center'}>
     <Box>         <Typography>{e.totalPrice}</Typography>
        <Typography>{formatDate(e.createdDate)}</Typography></Box>
        <Typography>{e.payment}</Typography>
    </Box>
  ))}    
      </Box>
      <Box display={'flex'} flexDirection={'column'} gap={2} width={'fit'} height={'72px'}  py={"24px"}>
  {data && data.map((e)=>(
    <Box  display={'flex'} flexDirection={'column'}>
              <Typography>{e.district},<br />{e.khoroo},{e.apartment}</Typography>
    </Box>
  ))}    
      </Box>
      <Box display={'flex'} flexDirection={'column'} gap={'30px'} px={'24px'} width={'fit'} height={'72px'}  py={"24px"}>
  {data && data.map((e)=>(
    <Box  display={'flex'} gap={10}  >
              <Typography>{e.process}</Typography>
              <Button onClick={() => modalHandle(e._id)}>
                                <MoreVertIcon />
                            </Button>
                            {modal && selectedOrderId === e._id && <StatusModal selectedId={selectedOrderId} />}
    </Box>
  ))}    
      </Box>
            
        </Box>
    )
}

export default AdminOrder