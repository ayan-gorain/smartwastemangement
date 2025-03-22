// Replace the placeholder image with a building illustration
document.addEventListener('DOMContentLoaded', function() {
    // Create a building illustration
    const buildingImg = document.querySelector('.building');
    
    // If we have access to the actual image, use it
    // Otherwise, create a simple building illustration with SVG
    if (buildingImg) {
        const buildingSvg = `
        <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <!-- Sky background -->
            <rect x="0" y="0" width="400" height="300" fill="#e4f0f9" />
            
            <!-- Sun -->
            <circle cx="350" cy="70" r="40" fill="#feb06d" />
            
            <!-- Clouds -->
            <ellipse cx="100" cy="60" rx="30" ry="20" fill="#ffffff" />
            <ellipse cx="130" cy="65" rx="25" ry="15" fill="#ffffff" />
            <ellipse cx="70" cy="65" rx="20" ry="12" fill="#ffffff" />
            
            <ellipse cx="250" cy="40" rx="25" ry="15" fill="#ffffff" />
            <ellipse cx="280" cy="45" rx="20" ry="12" fill="#ffffff" />
            
            <!-- Ground -->
            <rect x="0" y="250" width="400" height="50" fill="#98ba60" />
            <rect x="0" y="240" width="400" height="10" fill="#6c8431" />
            
            <!-- Road -->
            <rect x="0" y="260" width="400" height="20" fill="#ced3db" />
            <rect x="20" y="270" width="40" height="2" fill="#ffffff" />
            <rect x="100" y="270" width="40" height="2" fill="#ffffff" />
            <rect x="180" y="270" width="40" height="2" fill="#ffffff" />
            <rect x="260" y="270" width="40" height="2" fill="#ffffff" />
            <rect x="340" y="270" width="40" height="2" fill="#ffffff" />
            
            <!-- Building -->
            <rect x="100" y="100" width="200" height="150" fill="#dd764d" />
            
            <!-- Roof -->
            <polygon points="100,100 200,60 300,100" fill="#b7502c" />
            
            <!-- Windows -->
            <rect x="120" y="120" width="30" height="30" fill="#0cdfef" />
            <rect x="120" y="170" width="30" height="30" fill="#0cdfef" />
            <rect x="185" y="120" width="30" height="30" fill="#0cdfef" />
            <rect x="185" y="170" width="30" height="30" fill="#0cdfef" />
            <rect x="250" y="120" width="30" height="30" fill="#0cdfef" />
            <rect x="250" y="170" width="30" height="30" fill="#0cdfef" />
            
            <!-- Door -->
            <rect x="185" y="220" width="30" height="30" fill="#6b251f" />
            
            <!-- Trees -->
            <rect x="50" y="200" width="10" height="50" fill="#91423c" />
            <circle cx="55" cy="180" r="25" fill="#a4cf3a" />
            
            <rect x="340" y="200" width="10" height="50" fill="#91423c" />
            <circle cx="345" cy="180" r="25" fill="#a4cf3a" />
            
            <!-- Wind Turbine -->
            <rect x="30" y="150" width="5" height="100" fill="#7f8b99" />
            <circle cx="32.5" cy="150" r="2" fill="#7f8b99" />
            
            <!-- Turbine Blades -->
            <path d="M32.5,150 L10,130 L32.5,150 L20,170 L32.5,150 L55,130" stroke="#7f8b99" stroke-width="2" fill="none" />
        </svg>
        `;
        
        // Replace the placeholder with our SVG
        const container = buildingImg.parentElement;
        container.innerHTML = buildingSvg;
    }
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.learn-more');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        button.addEventListener('click', function() {
            alert('Learn more about Recyclean waste management solutions!');
        });
    });
});