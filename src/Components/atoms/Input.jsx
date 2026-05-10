const Input = ({type = "text", placeholder = "", name = "", value = "", onChange = () => {}, required = false, autoComplete = "", className = "", disabled = false, ...props}) => {
    return (
        <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} required={required} autoComplete={autoComplete} disabled={disabled} className={className} {...props}/>
    );
};

export default Input;