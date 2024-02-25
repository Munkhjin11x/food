import { useContext, useState } from "react";
import { OrderContext } from "./OrderContext";
import {
  Select,
  MenuItem,
  Stack,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";

function OrderDetail() {
  const { setOrderDetails } = useContext(OrderContext);
  const districts = [
    "Баянзүрх дүүрэг",
    "Хан-Уул дүүрэг",
    "Баянгол дүүрэг",
    "Сонгинохайрхан дүүрэг",
    "Чингэлтэй дүүрэг",
  ];
  const khoroo = [
    "1-р хороо",
    "2-р хороо",
    "3-р хороо",
    "4-р хороо",
    "5-р хороо",
  ];

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedKhoroo, setSelectedKhoroo] = useState("");
  const [selectedApartment, setSelectedApartment] = useState("");

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    setOrderDetails((prevOrderDetails) => ({
      ...prevOrderDetails,
      district: event.target.value,
    }));
  };

  const handleKhorooChange = (event) => {
    setSelectedKhoroo(event.target.value);
    setOrderDetails((prevOrderDetails) => ({
      ...prevOrderDetails,
      khoroo: event.target.value,
    }));
  };

  const handleApartmentChange = (event) => {
    setSelectedApartment(event.target.value);
    setOrderDetails((prevOrderDetails) => ({
      ...prevOrderDetails,
      apartment: event.target.value,
    }));
  };

  return (
    <Stack spacing={2}>
      <Select
        placeholder="district"
        value={selectedDistrict}
        onChange={handleDistrictChange}
      >
        {districts.map((district) => (
          <MenuItem key={district} value={district}>
            {district}
          </MenuItem>
        ))}
      </Select>
      <Select value={selectedKhoroo} onChange={handleKhorooChange}>
        {khoroo.map((khoroo) => (
          <MenuItem key={khoroo} value={khoroo}>
            {khoroo}
          </MenuItem>
        ))}
      </Select>
      <Select value={selectedApartment} onChange={handleApartmentChange}>
        {/* Add options for apartments */}
      </Select>
      <Box display={"flex"}>
        <FormControlLabel control={<Checkbox />} label="бэлнээр" />
        <FormControlLabel control={<Checkbox />} label="картаар" />
      </Box>
    </Stack>
  );
}

export default OrderDetail;
