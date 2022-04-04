import './App.css';
import Die from './Die';
import { useState, useEffect } from 'react';
import {nanoid} from 'nanoid';
import Confetti from 'react-confetti';

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tensies, setTensies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every(die => die.isclicked)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
        setTensies(true)
    }
  }, [dice])

  function generateNewdie(){
    return {
       value: Math.ceil(Math.random() * 6), 
       isclicked: false, 
       id: nanoid() 
    }
  }

  function allNewDice(){
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewdie());
    }
    return newDice
  }
  function rollDice(){
    if(!tensies){
      setDice(prevset => prevset.map(die => {
        return die.isclicked ? die : generateNewdie()
      }))
    }else{
      setTensies(false)
      setDice(allNewDice())
    }
   
  }

  function clickedDice(id){
    setDice((prevset) =>
      prevset.map((die) => {
        return die.id === id ? { ...die, isclicked: !die.isclicked } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isclicked={die.isclicked}
      clickedDice={() => clickedDice(die.id)}
    />
  ));


  return (
    <>
      <h4 className="connect">
        <a
          href="https://www.linkedin.com/in/shivanshu-pandey-ji/"
          target="_blank"
        >
          LinkedIn
        </a>
      </h4>
      <main>
        {tensies && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instruction">
          Roll untill all dice are the same. Click each dice to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">{diceElements}</div>
        <button onClick={rollDice} className="roll-dice">
          {tensies ? 'New Game' : 'Roll'}
        </button>
      </main>
    </>
  );
}

export default App;
