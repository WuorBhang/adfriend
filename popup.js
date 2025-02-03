document.getElementById('feedbackForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const feedback = document.getElementById('feedback').value;
    if (feedback.trim()) {
      // Example: Log feedback to console (replace with API call)
      console.log('Feedback received:', feedback);
      alert('Thank you for your feedback!');
      document.getElementById('feedback').value = '';
    } else {
      alert('Please enter your feedback.');
    }
  });