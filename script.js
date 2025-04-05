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

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.2}px`;

  if (!sadMusicPlayed) {
    const audio = document.getElementById('sadAudio');
    if (audio) {
      audio.play();
      sadMusicPlayed = true;
    }
  }
}

function handleYesClick() {
  // Play the 'yes_music' immediately when clicked
  const yesMusic = new Audio("yes_music.mp3");
  yesMusic.play();
  
  // Redirect to the 'yes_page.html'
  window.location.href = "yes_page.html";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.no-button')?.addEventListener("click", handleNoClick);
  document.querySelector('.yes-button')?.addEventListener("click", handleYesClick);
});
