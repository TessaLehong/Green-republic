// Show Login Modal
function showLoginModal() {
    document.getElementById('login-modal').style.display = 'block';
    document.getElementById('signup-modal').style.display = 'none'; // Hide Sign Up modal if it's open
  }
  
  // Show Sign Up Modal
  function showSignUpModal() {
    document.getElementById('signup-modal').style.display = 'block';
    document.getElementById('login-modal').style.display = 'none'; // Hide Login modal if it's open
  }
  
  // Close Modal
  function closeModal() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('signup-modal').style.display = 'none';
  }
  
  // Close modal on outside click
  window.onclick = function(event) {
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    if (event.target == loginModal || event.target == signupModal) {
      closeModal(); // Close any open modal if the outside area is clicked
    }
  }
  
  // Age Confirmation Check (when signing up)
  function checkAge() {
    const dob = document.getElementById('dob').value;
    const ageConfirmation = document.getElementById('age-confirmation').checked;
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    // Check if user is at least 18
    if (age < 18) {
      alert('You must be 18 years or older to sign up.');
      return false; // Prevent form submission
    }
  
    // Check if the age confirmation checkbox is checked
    if (!ageConfirmation) {
      alert('Please confirm that you are 18 years or older.');
      return false; // Prevent form submission
    }
  
    return true; // Allow form submission
  }
  