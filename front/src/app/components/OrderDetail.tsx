import { useContext, useState } from "react";
import { OrderContext } from "./OrderContext";
import { Input } from '@mui/base/Input';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Select,
  MenuItem,
  Stack,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  FormControl,
  Card,
} from "@mui/material";
import Step from "./Step";
import { Label } from "@mui/icons-material";

function OrderDetail() {
  const { setOrderDetails } = useContext(OrderContext);
  const [state , setState] =  useState(null)
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedKhoroo, setSelectedKhoroo] = useState("");
  const [selectedApartment, setSelectedApartment] = useState("");
  const [selectedDesc, setSelectedDesc] = useState("");
  const [selectedPhone, setSelectedPhone] = useState("");

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




  const changer  = (option)=>{
    setState(option)
  }

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

  const handleDescChange = (event) => {
    setSelectedDesc(event.target.value);
    setOrderDetails((prevOrderDetails) => ({
      ...prevOrderDetails,
      desc: event.target.value,
    }));
  };

  const handlePhoneChange = (event) => {
    setSelectedPhone(event.target.value);
    setOrderDetails((prevOrderDetails) => ({
      ...prevOrderDetails,
      phone: event.target.value,
    }));
  };
  const allSelected = selectedDistrict && selectedKhoroo && selectedApartment && selectedDesc && selectedPhone;

  return (
    <Stack sx={{}} padding={'24px'} spacing={2}>
      <Box>
        <Step all={allSelected} children={'Хаягийн мэдээлэл оруулах'} step={'Алхам 1'} >

        </Step>
      </Box>
      <Card sx={{padding:'24px',width:'432px',bgcolor:''}}>
      <Box sx={{ flexDirection: 'column', display: 'flex', gap:'20px' }}>
        <Typography>Хаяг оруулна уу</Typography>
        <FormControl sx={{ backgroundColor: selectedDistrict ? "#4caf50" : "", color: "#000" }}>
          <Select
            value={selectedDistrict}
            onChange={handleDistrictChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <option defaultChecked={true} value=""><LocationOnIcon/>Дүүрэг сонгоно уу</option>
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
          <option defaultChecked={true} value=""> <LocationOnIcon/>Хороо сонгоно уу</option>
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
          <option defaultChecked={true} value=""><LocationOnIcon/>  Байр, гудамж сонгоно уу</option>

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
        <textarea  value={selectedDesc} onChange={handleDescChange} className=" bg-[#F7F7F8] border-solid border-[1px] px-4 py-2 w-[384px] rounded h-[112px]"  placeholder="Орц, давхар, орцны код ..." />
      </Box>
      <Box>
        <Typography>Утасны дугаар* </Typography>
        <input value={selectedPhone} onChange={handlePhoneChange} className=" bg-[#F7F7F8] border-solid border-[1px] px-4 py-2 w-[384px] rounded"  placeholder="Утасны дугаараа оруулна уу" />
      </Box>
      <Typography>Төлбөр төлөх </Typography>

      <Box display={"flex"}>
      <FormControlLabel
        control={<Checkbox checked={state === "бэлнээр"} onChange={() => changer("бэлнээр")} />}
        label="бэлнээр"
      />
      <FormControlLabel
        control={<Checkbox checked={state === "картаар"} onChange={() => changer("картаар")} />}
        label="картаар"
      />
      </Box>
      </Card>
    </Stack>
  );
}

export default OrderDetail;
