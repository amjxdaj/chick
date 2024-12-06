// Wait until the page is fully loaded
window.onload = () => {
    // Show the popup
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
  
    // Trigger confetti animation
    triggerConfetti();
  
    // Add event listener to show offers when the popup is clicked
    popup.addEventListener('click', () => {
      // Hide the popup
      popup.style.display = 'none';
  
      // Show the offers section
      const offers = document.getElementById('offers');
      offers.style.display = 'block';
    });
  };
  
  // Function to generate random confetti
  function triggerConfetti() {
    const container = document.getElementById('confetti-container');
  
    // Create 50 confetti pieces for effect
    for (let i = 0; i < 50; i++) {
      const confettiPiece = document.createElement('div');
      confettiPiece.classList.add('confetti');
      confettiPiece.style.left = `${Math.random() * 100}vw`;
      confettiPiece.style.animationDuration = `${Math.random() * 2 + 3}s`;
      confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(confettiPiece);
    }
  }
  