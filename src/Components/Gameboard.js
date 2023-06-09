import Card from "./Card";

const Gameboard = ( {cards, onClickedCard}) => {

    return (
        <div className="gameboard">
            {cards.map(card => 
                <Card key={card.id} id={card.id} img={card.img} imgName={card.title} onClick={onClickedCard} />
                )}
        </div>
    )
    
}

export default Gameboard;