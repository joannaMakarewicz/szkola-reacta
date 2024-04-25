import { MouseEventHandler } from "react";

type ButtonProps = {
    label:string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
export const Button = ({label, onClick} : ButtonProps) => {
    return (
        <button className="bg-lightGreen p-2 text-green-900 border-slate-600 rounded-sm " onClick={onClick}>{label}</button>
    )
}