// Create stars in the background
document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 2 + 1;
        
        // Random opacity
        const opacity = Math.random() * 0.8 + 0.2;
        
        // Apply styles
        star.style.cssText = `
            position: absolute;
            top: ${y}%;
            left: ${x}%;
            width: ${size}px;
            height: ${size}px;
            background-color: white;
            border-radius: 50%;
            opacity: ${opacity};
            animation: twinkle ${Math.random() * 5 + 3}s infinite ease-in-out;
        `;
        
        starsContainer.appendChild(star);
    }
    
    // Add floating bubbles/particles
    const bubbleCount = 15;
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 50 + 20;
        
        // Random opacity
        const opacity = Math.random() * 0.2 + 0.05;
        
        // Apply styles
        bubble.style.cssText = `
            position: absolute;
            top: ${y}%;
            left: ${x}%;
            width: ${size}px;
            height: ${size}px;
            background-color: #2bd614;
            border-radius: 50%;
            opacity: ${opacity};
            filter: blur(5px);
            animation: float ${Math.random() * 10 + 10}s infinite ease-in-out;
        `;
        
        starsContainer.appendChild(bubble);
    }
});

// Add animation for stars
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 0.8; }
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0) translateX(0); }
        25% { transform: translateY(-20px) translateX(10px); }
        50% { transform: translateY(0) translateX(20px); }
        75% { transform: translateY(20px) translateX(10px); }
    }
`;
document.head.appendChild(style);