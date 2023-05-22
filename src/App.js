import { useState } from "react";
import Card from "./Components/Card";

function App() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);
    const [cards, setCards] = useState([
      { id: 1, img: "img1.jpg", clicked: false},
      { id: 2, img: "img2.png", clicked: false},
      { id: 3, img: "img3.png", clicked: false},
      { id: 4, img: "img4.jpg", clicked: false},
      { id: 5, img: "img5.png", clicked: false},
      { id: 6, img: "img6.jpg", clicked: false}
    ]);

    const handleClick = (id) => {
      if (clickedCards.includes(id)) {
        setScore(0);
        setClickedCards([]);
      } else {
        setScore(score + 1);
        setClickedCards([ ...clickedCards, id]);
        if (score + 1 > highScore) {
          setHighScore(score + 1);
        }
      }
      setCards(shuffleArray(cards));
    }

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
      return array;
    }
    
    return (
      <div className="App">
        
      </div>
    );
}

export default App;
