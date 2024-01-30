import BackPicture from "../icons/BackPicture";

 
export default function Footer(){
    return (
        <div className="bg-[#18BA51] flex flex-col gap-[40px] px-[120px] py-[111px] relative">
            {/* <BackPicture/> */}
            <div className="flex justify-center items-center gap-[8px]">
          
                <p className="text-[20px] text-white">Food Delivery</p>
            </div>
            <div className="flex justify-between">
                <p className="text-white text-[16px] underline">Нүүр</p>
                <p className="text-white text-[16px] underline">Холбоо барих</p>
                <p className="text-white text-[16px] underline">Хоолны цэс</p>
                <p className="text-white text-[16px] underline">Үйлчилгээний нөхцөл</p>
                <p className="text-white text-[16px] underline">Хүргэлтийн бүс</p>
                <p className="text-white text-[16px] underline">Нууцлалын бодлого</p>
            </div>
            <div className="flex gap-[18px] justify-center">
        
            </div>
            <hr className="bg-white w-[1200px]"/>
            <div className="flex flex-col gap-[8px] items-center">
                <p className="text-white text-[16px]">© 2024 Pinecone Foods LLC</p>
                <p className="text-white text-[16px]">Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
            </div>
        </div>
    )
}