import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
function Step2({children,step,all,order,process}:any) {
  return (
    <Stack display={'flex'} direction={'row'} alignItems={'center'}>
      {all ? <CheckCircleIcon sx={{width:'48px',height:'48px',color:'#18BA51'}}  /> :<RadioButtonCheckedIcon sx={{width:'48px',height:'48px',}}/> }
         <Box>
        <Typography>
    {step}
</Typography>
<Typography>
    {children}
</Typography>
<Typography>

</Typography>
<Typography>
         Захиалга#<span>{order}</span> 
</Typography>
<Typography sx={{color:all ? '#18BA51':'#0468C8'}}>
<span>{process}</span> 
</Typography>

        </Box>
    </Stack>
  )
}

export default Step2