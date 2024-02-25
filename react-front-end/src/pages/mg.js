import React, { useState, useEffect } from 'react';
import styles from './memory.module.css';

const questions = [
  'What does CC in CCUS stand for?', 'What is a Carbon Offset?', 'How is C02 consumption reduced?', 
  'How to reduce the impact and consumption of C02?', 'What is the depth of CO2 storage?', 'What does US in CCUS stand for?',
  'What is the Energy Initiative?', 'What is the company\'s founding year?',
]

const answers = [
  'Carbon Capture', 'Removing equivalent CO2 from atmosphere as emitted', 'By introducing Large-Scale Hydrogen Delivery', 
  'Renewable Energy Projects', '22 football fields deep', 'Utilization and Storage',
  'A partnership with MIT ', '1879',
];

const shuffle = (array) => {
  const clonedArray = [...array];
  for (let index = clonedArray.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [clonedArray[index], clonedArray[randomIndex]] = [clonedArray[randomIndex], clonedArray[index]];
  }
  return clonedArray;
};

function MemoryGame() {
  const [cards, setCards] = useState([...questions, ...answers]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [winFlip, setWinFlip] = useState(false);

  useEffect(() => {
    let interval = null;
    if (gameStarted && matchedIndexes.length < cards.length) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 0.1);
      }, 100);
    } 
    else if (matchedIndexes.length >= cards.length) {
      setWinFlip(true);
    }
    else if (!gameStarted && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameStarted, timer]);

  useEffect(() => {
    setCards(shuffle([...questions, ...answers]));
  }, [])

  const flipCard = (index) => {
    if (flippedIndexes.length === 2 || flippedIndexes.includes(index) || matchedIndexes.includes(index)) {
      return;
    }
  
    const newFlippedIndexes = [...flippedIndexes, index];
    setFlippedIndexes(newFlippedIndexes);
  
    if (!gameStarted) {
      setGameStarted(true);
      setWinFlip(false);
    }
  
    if (newFlippedIndexes.length === 2) {
      setMoves((prevMoves) => prevMoves + 1);
      // Delay the logic to allow for the second card to flip
      setTimeout(() => {
        const [firstIndex, secondIndex] = newFlippedIndexes;
        if (answers.indexOf(cards[firstIndex]) === questions.indexOf(cards[secondIndex]) && questions.indexOf(cards[secondIndex]) != -1
        || questions.indexOf(cards[firstIndex]) === answers.indexOf(cards[secondIndex]) && answers.indexOf(cards[secondIndex]) != -1) {
          setMatchedIndexes((prevMatched) => [...prevMatched, firstIndex, secondIndex]);
        }
        setFlippedIndexes([]); // Reset flipped indexes regardless of a match
      }, 1000);
    }
  };

  const startGame = () => {
    setCards(shuffle([...questions, ...answers]));
    setFlippedIndexes([]);
    setMatchedIndexes([]);
    setMoves(0);
    setTimer(0);
    setGameStarted(false);
    setWinFlip(false);
  };

  return (
    <div className={styles.html}>
      <div className={styles.memory}>
        <div className={styles.controls}>
          <button className={styles.button} onClick={startGame}>Reset</button>
          <div className={styles.stats}>
            <div className={styles.moves}>{`${moves} moves`}</div>
            <div className={styles.timer}>{`time: ${timer.toFixed(1)} sec`}</div>
          </div>
        </div>
          <div
            className={`${styles.container} ${winFlip ? styles.flipped : ''}`}
          >
            <div className={styles.board} style={{ gridTemplateColumns: `repeat(${Math.sqrt(cards.length / 2)}, 1fr)` }}>
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`${styles.card} ${flippedIndexes.includes(index) || matchedIndexes.includes(index) ? styles.flipped : ''} ${matchedIndexes.includes(index) ? styles.matched : ''}`}
                  onClick={() => flipCard(index)}
                >
                  <div className={styles.cardFront}></div>
                  <div className={styles.cardBack}>{card}</div>
                </div>
              ))}
            </div>
            <div className={styles.win}>
              <span className={styles.winText}>
                All Correct! <br></br>
                In {`${moves} moves`} <br></br>
                And {`${timer.toFixed(1)} seconds`}
              </span>
            </div>
          </div>
      </div>
    </div>
  );
}

export default MemoryGame;