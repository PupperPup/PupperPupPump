// script.js

document.addEventListener('DOMContentLoaded', () => {
    const ticker = document.querySelector('.stock-ticker');
    let price = 100; // Initial price

    // Set initial ticker content immediately
    ticker.textContent = `🚀 Meme Coin Price: $${price} | Join the revolution! | 🚀`;

    setInterval(() => {
        price += 1; // Increment price by 1 every interval
        ticker.textContent = `🚀 Meme Coin Price: $${price} | Join the revolution! | 🚀`;
    }, 100); // Update price every 100 milliseconds
});
