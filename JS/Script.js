// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Example of changing meme coin price dynamically
    const ticker = document.querySelector('.stock-ticker');
    let price = 100;
    
    setInterval(() => {
        price += 10; // Increment price by 10 every interval
        ticker.textContent = `🚀 Meme Coin Price: $${price} | Join the revolution! | 🚀`;
    }, 100); // Update price every 100 milliseconds (this makes it go up quickly)
});
