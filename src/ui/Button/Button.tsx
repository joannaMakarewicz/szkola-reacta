import {type ComponentProps } from "react";
import { cn } from "../../utilis/cn";

type ButtonProps = {
    label:string;
    // onClick?: MouseEventHandler<HTMLButtonElement>;
} & ComponentProps<"button">

export const Button = ({label, className, ...rest} : ButtonProps) => {
    return (
        <button className={cn("bg-lightGreen p-2 text-slate-50 border-slate-600 rounded-sm m-3 w-28", className)}{...rest}>{label}</button>
    )
}