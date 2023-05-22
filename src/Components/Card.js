const Card = ( { id, handleClick, img} ) => {
    return (
        <img onClick={() => handleClick(id)} src={require(`../Images/${img}`)} alt={`Card ${id}`} />
    )
}

export default Card;