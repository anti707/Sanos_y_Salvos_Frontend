
function BodyCard({children, className=""}){
    return(
        <div className={`body-card ${className}`}>
            {children}
        </div>

    )
}

export default BodyCard;