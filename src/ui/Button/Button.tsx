import { type ComponentProps } from "react";
import { cn } from "../../utilis/cn";

type ButtonProps = {
  label: string;
  // onClick?: MouseEventHandler<HTMLButtonElement>;
} & ComponentProps<"button">;

export const Button = ({
  label,
  className,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-lightGreen p-2 text-slate-50 rounded m-3 w-28 border",
        className,
        { "bg-slate-50": disabled }
      )}
      {...rest}
    >
      {label}
    </button>
  );
};
