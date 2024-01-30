import { Stack } from "@mui/material"
import logo from "../../../public/img/Logo.jpg"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
const Navbar= ({onClick}:any)=>{
    return(
        <Stack className="px-[240px]" direction="row"   alignItems="center" justifyContent="space-between" paddingTop='14px'
        spacing={2}>
            <div className="flex gap-6">
            <img className="w-10"  src={logo.src}/>
            <div className="flex gap-2">
                <p className=" hover:text-[#18BA51]">Нүүр</p>
                <p>
                    Хоолны цэс
                </p>
                <p>
                    Хүргэлтийн бүс
                </p>
            </div>
            </div>
            <div className="flex gap-2">
                <div className="border-[1px] rounded-lg">
                    <SearchIcon/>
                <input type="search" placeholder="Search"/>
                </div>
                <div className="flex">
                <ShoppingBasketIcon/>
                <p>Сагс</p>
                </div>
                <div onClick={onClick} className="flex">
                    <PersonIcon/>   
                    <p>Хэрэглэгч</p>
                </div>

            </div>
        </Stack>
    )
}
export default Navbar