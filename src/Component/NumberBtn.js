function NumberBtn( {number, letters, onClick} ) {
    return (
        <span className="btn num" onClick={onClick}>
            <i>{number}</i>
            <p>{letters}</p>
        </span>
    )
}

export default NumberBtn;