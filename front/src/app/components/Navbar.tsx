import { Box, Button, Stack, Typography } from "@mui/material"
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import logo from "../../../public/img/Logo.jpg"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const Navbar = ({ onClick, onChange, value }: any) => {


  return (
    <Stack className="px-[240px] py-3" direction="row" alignItems="center" justifyContent="space-between" paddingTop='14px'
      spacing={2}>
      <Box className="flex gap-6">
        <img className="w-10" src={logo.src} />
        <Box className="flex gap-2">
          <Button size="medium" sx={{ color: "black", ":hover": { color: '#18BA51' } }}>НҮҮР</Button>
          <Button size="medium" sx={{ color: "black", ":hover": { color: '#18BA51' } }}> Хоолны цэс</Button>
          <Button size="medium" sx={{ color: "black", ":hover": { color: '#18BA51' } }}>Хүргэлтийн бүс</Button>
        </Box>
      </Box>
      <Box className="flex gap-2">
        <Box className="border-[1px] rounded-lg">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={value} onChange={onChange}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
        <Button size="medium" sx={{ color: "black", ":hover": { color: '#18BA51' } }} className="flex">
          <ShoppingBasketIcon />
          <Typography>Сагс</Typography>
        </Button>
        <Button onClick={onClick} size="medium" sx={{ color: "black", ":hover": { color: '#18BA51' } }} className="flex">
          <PersonIcon />
          <Typography>Хэрэглэгч</Typography>
        </Button>

      </Box>
    </Stack>
  )
}
export default Navbar