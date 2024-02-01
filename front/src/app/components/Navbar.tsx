import { Button, Stack } from "@mui/material"
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import logo from "../../../public/img/Logo.jpg"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
const Navbar= ({onClick,onChange,value}:any)=>{
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
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
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
    return(
        <Stack  className="px-[240px] py-3" direction="row"   alignItems="center" justifyContent="space-between" paddingTop='14px'
        spacing={2}>
            <div className="flex gap-6">
            <img className="w-10"  src={logo.src}/>
            <div className="flex gap-2">
            <Button size="medium" sx={{ color: "black" }}>НҮҮР</Button>
        <Button size="medium" sx={{ color: "black" }}>      Хоолны цэс</Button>
        <Button size="medium" sx={{ color: "black" }}>  Хүргэлтийн бүс</Button>
            </div>
            </div>
            <div className="flex gap-2">
                <div className="border-[1px] rounded-lg">
                    <Search  >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase value={value} onChange={onChange}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
                </div>
                <Button size="medium" sx={{ color: "black" }} className="flex">
                <ShoppingBasketIcon/>
                <p>Сагс</p>
                </Button>
                <Button onClick={onClick} size="medium" sx={{ color: "black" }} className="flex">
                    <PersonIcon/>   
                    <p>Хэрэглэгч</p>
                </Button>

            </div>
        </Stack>
    )
}
export default Navbar