import React from "react";

export interface ButtonProps 
extends React.DetailedHTMLProps
<React.ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement>,React.AriaAttributes{
    variant?:'primary'|'ghost'|'outline'|'del'
}
export const Button =({children , onClick, variant}:ButtonProps) => {
    return <button className={`rounded-lg py-2 px-4 w-[352px]  text-white  ${variant === 'ghost' && ' bg-[#EEEFF2]  py-2 px-4  text-gray-700 hover:bg-[#18BA51]'}
    ${
      variant === 'outline' && 'py-2 px-4  bg-white border border-[#18BA51] text-black'
    } ${variant=== 'del' && 'bg-red-500 px-2 py-1'}`} onClick={onClick}>
{children}
    </button>
}