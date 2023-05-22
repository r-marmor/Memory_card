import { useState } from "react";
import Gameboard from "./Components/Gameboard";
import "./App.css"
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.png';
import img3 from './Images/img3.png';
import img4 from './Images/img4.jpg';
import img5 from './Images/img5.png';
import img6 from './Images/img6.jpg';
import img7 from './Images/img7.png';
import img8 from './Images/img8.jpg';
import img9 from './Images/img9.png';
import img10 from './Images/img10.png';


function App() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);
    const [cards, setCards] = useState([
      { id: 1, img: img1, clicked: false},
      { id: 2, img: img2, clicked: false},
      { id: 3, img: img3, clicked: false},
      { id: 4, img: img4, clicked: false},
      { id: 5, img: img5, clicked: false},
      { id: 6, img: img6, clicked: false},
      { id: 7, img: img7, clicked: false},
      { id: 8, img: img8, clicked: false},
      { id: 9, img: img9, clicked: false},
      { id: 10, img: img10, clicked: false}
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
          <div className="scoresContainer">
            <p className="score">Score : {score}</p>
            <p className="highScore">High score :{highScore}</p>
          </div>
          <Gameboard cards={cards} onClickedCard={handleClick} />
      </div>
    );
}

export default App;
