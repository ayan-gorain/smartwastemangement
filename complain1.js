// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the search button and input
  const searchButton = document.querySelector('.search-button');
  const searchInput = document.querySelector('.search-input');
  
  // Add click event to search button
  searchButton.addEventListener('click', function() {
      const searchQuery = searchInput.value.trim();
      if (searchQuery) {
          // In a real application, you would handle the search here
          console.log('Search query:', searchQuery);
          alert('Your complaint has been submitted: ' + searchQuery);
          searchInput.value = '';
      } else {
          alert('Please enter what you want to complain about.');
      }
  });
  
  // Add enter key press event to search input
  searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          searchButton.click();
      }
  });
  
  // Get all complain buttons
  const complainButtons = document.querySelectorAll('.complain-button');
  
  // Add click event to each complain button
  complainButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Get the category from the parent elements
          const detailItem = this.closest('.detail-item');
          const categoryTitle = detailItem.querySelector('.detail-title').textContent;
          
          // In a real application, you would handle the complaint submission here
          alert(`You are about to file a complaint for: ${categoryTitle}`);
          
          // Redirect to the search input with pre-filled category
          searchInput.value = categoryTitle + ': ';
          searchInput.focus();
          
          // Scroll to the search input
          searchInput.scrollIntoView({ behavior: 'smooth' });
      });
  });
  
  // Mobile menu toggle functionality could be added here
  // This would be needed for smaller screens where the navigation is hidden
});