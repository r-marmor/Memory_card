const Card = ( { id, onClick, img, imgName} ) => {
    return (
        <div className="cardContainer">
        <img onClick={() => onClick(id)} src={img} alt={`Card ${id}`} />
        <p>{imgName}</p>
        </div>
    )
}

export default Card;