"use client";
import { Stack } from "@mui/system";
import useSWR from "swr";

const historyPage = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/order",
    fetcher
  );
  console.log(data);
  return <Stack>sad</Stack>;
};
export default historyPage;
