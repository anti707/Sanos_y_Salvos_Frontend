
function Button({children, text, className="",...props }){
    return <Button className={className} {...props}>{children || text}</Button>
}
export default Button;