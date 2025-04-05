/*(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
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

  if (!sadMusicPlayed) {
    const audio = document.getElementById('sadAudio');
    if (audio) {
      audio.play();
      sadMusicPlayed = true;
    }
  }
}

// Function for the "Yes" button click
function handleYesClick() {
  const yesMusic = document.getElementById('yesMusic');
  if (yesMusic) {
    yesMusic.play(); // Play yes music immediately when 'Yes' is clicked
  }

  window.location.href = "yes_page.html";
}

// Ensure that both music files are preloaded
document.addEventListener("DOMContentLoaded", () => {
  // Preload yes_music and no_music
  const yesMusic = document.getElementById('yesMusic');
  const sadAudio = document.getElementById('sadAudio');

  // Preload both audio files to ensure they're ready to play
  if (yesMusic) {
    yesMusic.load();
  }
  if (sadAudio) {
    sadAudio.load();
  }

  // Add click event listeners
  document.querySelector('.no-button')?.addEventListener("click", handleNoClick);
  document.querySelector('.yes-button')?.addEventListener("click", handleYesClick);
});
