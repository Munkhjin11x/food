'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { Data } from '../constant/Data';
export default function Cardm() {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );
    console.log(Data[0].img)
    return (
        <>
            {Data.map((item, index) => {
                return (
                    <Card key={index} sx={{ minWidth: 275 }}>
                        <CardContent>
                            <item.img />
                                {/* <Image src={item.img} alt='img' /> */}
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {item.p}
                            </Typography>
    
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {item.p1}
                            </Typography>
    
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                )
            })}
        </>
    )
}
