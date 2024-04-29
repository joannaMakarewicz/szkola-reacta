import { type ComponentProps } from "react";
import { cn } from "../../utilis/cn";

type TextProps = {
    children:string
} & ComponentProps<"p">

export const Text = ({ children, className, ...rest} :TextProps) => {
    return (
        <p className={cn("p-3 font-medium text-lg tracking-widex", className)} {...rest}>{children}</p>
    )
}