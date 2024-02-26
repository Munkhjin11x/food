import { useContext, useState } from "react";
import { OrderContext } from "./OrderContext";
import { Input } from '@mui/base/Input';
import {
  Select,
  MenuItem,
  Stack,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  InputLabel,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import Step from "./Step";
import { Label } from "@mui/icons-material";

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
  const apartment = [
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
  const allSelected = selectedDistrict && selectedKhoroo && selectedApartment;

  return (
    <Stack padding={'24px'} spacing={2}>
      <Box>
        <Step all={allSelected} children={'Хаягийн мэдээлэл оруулах'} step={'Алхам 1'} >

        </Step>
      </Box>
      <Box sx={{ flexDirection: 'column', display: 'flex' }}>
        <FormControl sx={{ backgroundColor: selectedDistrict ? "#4caf50" : "", color: "#000" }}>
          <Select
            value={selectedDistrict}
            onChange={handleDistrictChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <option defaultChecked={true} value="">Дүүрэг сонгоно уу</option>
            {districts.map((district) => (
              <MenuItem key={district} value={district}>
                {district}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ backgroundColor: selectedKhoroo ? "#4caf50" : "", color: "#000" }}>
          <Select value={selectedKhoroo} onChange={handleKhorooChange}            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }} >
          <option defaultChecked={true} value="">Хороо сонгоно уу</option>
            {khoroo.map((khoroo) => (
              <MenuItem key={khoroo} value={khoroo}>
                {khoroo}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ backgroundColor: selectedApartment ? "#4caf50" : "", color: "#000" }}>
          <Select value={selectedApartment} onChange={handleApartmentChange}             displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}>
          <option defaultChecked={true} value="">Байр, гудамж сонгоно уу</option>

            {apartment.map((apartment) => (
              <MenuItem key={apartment} value={apartment}>
                {apartment}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

      </Box>

      <Box>
        <Typography>Нэмэлт мэдээлэл</Typography>
        <Input placeholder="Орц, давхар, орцны код ..." />
      </Box>
      <Box>
        <Typography>Утасны дугаар* </Typography>
        <Input placeholder="Утасны дугаараа оруулна уу" />
      </Box>
      <Typography>Төлбөр төлөх </Typography>

      <Box display={"flex"}>
        <FormControlLabel control={<Checkbox />} label="бэлнээр" />
        <FormControlLabel control={<Checkbox />} label="картаар" />
      </Box>
    </Stack>
  );
}

export default OrderDetail;
