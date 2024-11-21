// script.js

// Array of random messages for the ticker
const messages = [
    "🚀 Meme Coin Price: $100 | Join the revolution! 🚀",
    "🔥 Pupper Pump Pup to the Moon! 🌕",
    "💰 $PUPUPU is trending now! 💎",
    "🐾 Meme Coins are the future. Get in today! 🚀",
    "📈 Next stop: Meme Coin Milestone at $500k! 🚀",
    "🌟 Voting for the next charity is live now! 🐕",
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
setInterval(updateTicker, 5000); // Updates every 5 seconds

// Function to play audio after user interaction
function playAudio() {
    const audio = document.getElementById("background-music");
    audio.play()
        .then(() => {
            document.getElementById("audio-control").style.display = "none"; // Hide the play button after audio starts
        })
        .catch((error) => {
            console.error("Error playing audio:", error);
        });
}

function playAudio() {
    const audio = document.getElementById("background-music");
    audio.play()
        .then(() => {
            document.getElementById("audio-control").style.display = "none";
            localStorage.setItem("audioPlayed", "true");
        })
        .catch((error) => console.error("Error playing audio:", error));
}

// Auto-hide play button if the user has already interacted
if (localStorage.getItem("audioPlayed") === "true") {
    document.getElementById("audio-control").style.display = "none";
    document.getElementById("background-music").play();
}
