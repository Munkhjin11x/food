'use client'
import { Box, Container, Stack, Typography } from "@mui/material"
import useSWR from "swr";
import Navbar from "../components/Navbar";
import SearchComp from "../components/Search";
import AdminNav from "../components/AdminNav";
import AdminOrder from "../components/AdminOrder";

const adminDash =()=>{
    const fetcher = (url: string) => fetch(url).then((r) => r.json());
    const { data, error, isLoading } = useSWR(
      "http://localhost:8000/order",
      fetcher
    );
    console.log(data)
    return(
        <Stack>
            <Navbar/>
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'} >
            <Box sx={{display:'flex',alignItems:'center'}}>
<Typography>Admin Dashboard</Typography>
<SearchComp/>
            </Box>
            <Box >
                <AdminNav/>
                <AdminOrder data={data} />
            </Box>
            </Box>

        </Stack>
    )
}
export default adminDash