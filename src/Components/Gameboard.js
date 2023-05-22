import Card from "./Card";

const Gameboard = ( {cards, onClickedCards}) => {

    return (
        <div className="gameboard">
            {cards.map(card => 
                <Card key={card.id} id={card.id} img={card.img} onClick={onClickedCards} />
                )}
        </div>
    )
    
}

export default Gameboard;