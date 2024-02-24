import React, { useState, useEffect } from 'react';
import styles from './memory.module.css';

const questions = [
  '2', 'What is 1+2', 'What is 1+3', 'What is 1+4',
  'What is 1+5', 'What is 1+6', 'What is 1+7', 'What is 1+8',
];

const answers = [
  '2', '3', '4', '5', '6', '7', '8', '9',
];

const shuffleIndices = (arrayLength) => {
  const indices = Array.from({ length: arrayLength }, (_, index) => index);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices;
};

function MemoryGame() {
  const [shuffledIndices, setShuffledIndices] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    // Function to shuffle indices
    setShuffledIndices(shuffleIndices(questions.length));
  }, []);

  useEffect(() => {
    let interval = null;
    if (gameStarted) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 0.1);
      }, 100);
    } else if (!gameStarted && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameStarted, timer]);

  const flipCard = (index) => {
    if (flippedIndexes.length === 2 || flippedIndexes.includes(index) || matchedIndexes.includes(index)) {
      return;
    }
  
    const newFlippedIndexes = [...flippedIndexes, index];
    setFlippedIndexes(newFlippedIndexes);
    setMoves((prevMoves) => prevMoves + 1);
  
    if (!gameStarted) {
      setGameStarted(true);
    }
  
    if (newFlippedIndexes.length === 2) {
      // Delay the logic to allow for the second card to flip
      setTimeout(() => {
        const [firstIndex, secondIndex] = newFlippedIndexes;
        if (cards[firstIndex] === cards[secondIndex]) {
          setMatchedIndexes((prevMatched) => [...prevMatched, firstIndex, secondIndex]);
        }
        setFlippedIndexes([]); // Reset flipped indexes regardless of a match
      }, 1000);
    }
    console.log(matchedIndexes)
  };

  const startGame = () => {
    setShuffledIndices(shuffleIndices(questions.length));
    setFlippedIndexes([]);
    setMatchedIndexes([]);
    setMoves(0);
    setTimer(0);
    setGameStarted(false);
  };

  return (
    <div className={styles.html}>
      <div className={styles.memory}>
        <div className={styles.controls}>
          <button className={styles.button} onClick={startGame}>Start</button>
          <div className={styles.stats}>
            <div className={styles.moves}>{`${moves} moves`}</div>
            <div className={styles.timer}>{`time: ${timer.toFixed(1)} sec`}</div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.board} style={{ gridTemplateColumns: `repeat(${Math.sqrt(shuffleIndices.length * 2)}, 1fr)` }}>
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${styles.card} ${flippedIndexes.includes(index) || matchedIndexes.includes(index) ? styles.flipped : ''}`}
                onClick={() => flipCard(index)}
              >
                <div className={styles.cardFront}></div>
                <div className={styles.cardBack}>{card}</div>
              </div>
            ))}
          </div>
          {matchedIndexes.length === cards.length && (
            <div className={styles.win}>
              <span className={styles.winText}>
                All correct!<br />
                in <span className={styles.highlight}>{moves}</span> moves<br />
                at <span className={styles.highlight}>{timer.toFixed(1)}</span> seconds
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MemoryGame;