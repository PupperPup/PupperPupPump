// Array of random messages for the ticker
const messages = [
    "🚀 Meme Coin Price: $100 | Join the revolution! 🚀",
    "🔥 Pupper Pump Pup to the Moon! 🌕",
    "💰 $PUPUPU is trending now! 💎",
    "💡 Discover the power of $PUPUPU! Network like never before. 💼",
];

// Function to update the ticker content randomly
function updateTicker() {
    const ticker = document.getElementById("random-ticker");
    const randomIndex = Math.floor(Math.random() * messages.length);
    ticker.textContent = messages[randomIndex];
}

// Set the initial message and update it every 5 seconds
updateTicker();
setInterval(updateTicker, 20000); // Updates every 5 seconds

// Function to play audio after user interaction (Windows 95 style)
function playAudio() {
    const audio = document.getElementById("background-music");
    audio.play()
        .then(() => {
            // Hide the play button after music starts (Windows 95-style behavior)
            document.getElementById("audio-control").style.display = "none";
            // Store that the audio was played so it doesn't prompt again
            localStorage.setItem("audioPlayed", "true");
        })
        .catch((error) => console.error("Error playing audio:", error));
}

// Auto-hide play button if the user has already interacted (Windows 95 style)
if (localStorage.getItem("audioPlayed") === "true") {
    // Hide audio control if the user has previously interacted
    document.getElementById("audio-control").style.display = "none";
    document.getElementById("background-music").play();
}

// Show the audio control as a retro-style Windows 95 pop-up
function showAudioControlPopup() {
    const popup = document.createElement("div");
    popup.className = "audio-popup";
    popup.innerHTML = `
        <div class="popup-title-bar">
            <span class="popup-title">Audio Control</span>
            <button onclick="closePopup()">X</button>
        </div>
        <div class="popup-body">
            <p>Click below to start the music:</p>
            <button class="retro-button" onclick="playAudio()">Play Music</button>
        </div>
    `;
    document.body.appendChild(popup);
}

// Close the pop-up (Windows 95 style)
function closePopup() {
    const popup = document.querySelector(".audio-popup");
    popup.remove();
}

// If audio has not been played, show the audio control pop-up
if (!localStorage.getItem("audioPlayed")) {
    showAudioControlPopup();
}
