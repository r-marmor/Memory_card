const Card = ( { id, onClick, img} ) => {
    return (
        <img onClick={() => onClick(id)} src={img} alt={`Card ${id}`} />
    )
}

export default Card;