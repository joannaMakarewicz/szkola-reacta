type TextProps = {
    children:string
}

export const Text = ({ children} :TextProps) => {
    return (
        <p className="text-center p-3 font-medium text-lg tracking-wide">{children}</p>
    )
}