import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';

function Step({children,step,all}:any) {
  return (
    <Stack display={'flex'} direction={'row'} alignItems={'center'}>
<Brightness1RoundedIcon sx={{width:'24px',height:'24px', color:all ? '#18BA51':'#0468C8'}}/>
         <Box>
        <Typography>
    {step}
</Typography>
<Typography>
    {children}
</Typography>
<Typography>
Хүлээгдэж байна
</Typography>
        </Box>
    </Stack>
  )
}

export default Step