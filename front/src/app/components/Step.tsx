import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
function Step({children,step,all}:any) {
  return (
    <Stack display={'flex'} direction={'row'} alignItems={'center'}>
      {all ? <CheckCircleIcon sx={{width:'48px',height:'48px',color:'#18BA51'}}  /> :<RadioButtonCheckedIcon sx={{width:'48px',height:'48px',}}/> }
{/* <RadioButtonCheckedIcon  color:all ? '#18BA51':'#0468C8'}}/> */}
         <Box>
        <Typography>
    {step}
</Typography>
<Typography>
    {children}
</Typography>
<Typography sx={{color:all ? '#18BA51':'#0468C8'}}>
{all?'Оруулсан' :'Хүлээгдэж байна'}
</Typography>

        </Box>
    </Stack>
  )
}

export default Step