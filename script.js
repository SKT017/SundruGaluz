const messages = [
  "Are you sure Sundru? 😢",
  "Really really sure?? 🥺",
  "Come on, just one kiss 😚",
  "You're breaking my heart 💔",
  "Okay now I'm sad 😞",
  "No??? But why?? 😭",
  "This is emotional damage 😩",
  "Fine, I’ll just cry in a corner 😿",
  "You still have time to say yes 😌",
  "Last chance... maybe? 😅"
];

let messageIndex = 0;
let sadMusicPlayed = false;

// Function for the "No" button click
function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.2}px`;

  // Play the sad music immediately
  const audio = document.getElementById('sadAudio');
  if (audio && !sadMusicPlayed) {
    audio.play();
    sadMusicPlayed = true;
  }
}

// Function for the "Yes" button click
function handleYesClick() {
  const yesMusic = document.getElementById('yesMusic');

  // Play the yes music immediately
  if (yesMusic) {
    yesMusic.play();
  }

  // Delay navigation slightly to let the music start playing
  setTimeout(function() {
    window.location.href = "yes_page.html";
  }, 300); // Adjust this delay as needed (300ms)
}

document.addEventListener("DOMContentLoaded", () => {
  const yesButton = document.querySelector('.yes-button');
  const noButton = document.querySelector('.no-button');

  // Ensure the buttons work
  yesButton.addEventListener("click", handleYesClick);
  noButton.addEventListener("click", handleNoClick);
});
