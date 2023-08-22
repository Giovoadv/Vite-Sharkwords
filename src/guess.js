const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function setupGuesses(element, handleGuess) {
  // Loop over each letter in the alphabet string
  alphabet.split('').forEach((letter) => {
    // Create a button element
    const btn = document.createElement('button');
    // Set its innerText so it displays a letter
    btn.innerText = letter;
    // Attach the given event handler (handleGuess) to the 'click' event
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    // Append the button to the given element
    element.append(btn);
  });
}

export default setupGuesses;
