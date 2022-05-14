function Button( {icon, onClick} ) {
    return (
        <span className="btn" onClick={onClick}>
            <i className= {icon}></i>
        </span>
    )
}

export default Button