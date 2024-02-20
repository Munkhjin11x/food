'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box, Stack, Typography } from '@mui/material';
import { Data } from '../constant/Data';
export default function Cardm() {
    return (
        
        <Box className='flex gap-10 justify-center  mt-[140px]'>
            {Data.map((item, index) => {
                return (
                    <Card key={index} sx={{ minWidth: 275 }}>
                        <CardContent>
                            <item.img sx={{color:"green"}} />
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {item.p}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {item.p1}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </Box>
    )
}
