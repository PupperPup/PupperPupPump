// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Example of changing meme coin price dynamically
    const ticker = document.querySelector('.stock-ticker');
    let price = 100;
    
    setInterval(() => {
        price = (Math.random() * 200).toFixed(2); // Randomize the price
        ticker.textContent = `🚀 Meme Coin Price: $${price} | Join the revolution! | 🚀`;
    }, 5000); // Update price every 5 seconds
});
