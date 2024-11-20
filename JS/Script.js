// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Example of changing meme coin price dynamically
    const ticker = document.querySelector('.stock-ticker');
    let price = 100;  // Initial price

    // Set initial ticker content
    ticker.textContent = `🚀 Meme Coin Price: $${price} | Join the revolution! | 🚀`;

    setInterval(() => {
        price += 1; // Increment price by 1 every interval (adjust as needed)
        ticker.textContent = `🚀 Meme Coin Price: $${price} | Join the revolution! | 🚀`;
    }, 100); // Update price every 100 milliseconds (you can adjust this value)
});
