import './style.css';
import getRandomWord from './src/randomWord';
import setSharkImage from './src/sharkImage';
import  {setupWord, isLetterInWord, revealLetterInWord} from './src/word';
//import { revealLetterInWord } from './src/word';
import setupGuesses from './src/guess';


document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();
  setSharkImage(document.querySelector('#shark-img'), numWrong);

  setupWord(word, document.querySelector('#word-container'));

  
  

  const handleGuess = (guessEvent, letter) => {
    const button = guessEvent.target;
    button.setAttribute('disabled', true);
    
    if (isLetterInWord(letter)) {
      revealLetterInWord(letter);
    } else {
      numWrong += 1;
      setSharkImage(document.querySelector('#shark-img'), numWrong);
    }


    let isWordComplete = true;
    for (const el of document.querySelectorAll('.letter-box')) {
      if (el.innerText === '') {
        isWordComplete = false;
        break; // break will exit the loop
      }
    }


    if(isWordComplete){
      document.querySelector('#game-status').textContent = "You Win";
    }else if(numWrong === 5){
      document.querySelector('#game-status').textContent = "You Lose";
    }
    if(isWordComplete || numWrong ===5){
      document.querySelectorAll('button').forEach((btn) => {
        btn.setAttribute('disabled', true);
      });
    }
  }
  
  setupGuesses(document.querySelector('#letter-buttons'), handleGuess);

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
};

initSharkwords();


//setupGuesses(document.querySelector('#letter-buttons'), handleGuess);

//setSharkImage(document.querySelector('#shark-img'), numWrong);

//setupWord(document.querySelector('#word-container'), word);
