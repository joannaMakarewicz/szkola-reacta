type TextProps = {
    children:string
}

export const Text = ({ children} :TextProps) => {
    return (
        <p className="text-center text-slate-50 p-3 font-medium text-lg tracking-wide uppercase">{children}</p>
    )
}