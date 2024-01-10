function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const religions = document.querySelectorAll('input[name="religion"]:checked');
  
    if (name.trim() === '') {
      alert('Name is required');
      return false;
    }
  
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
      return false;
    }
  
    if (!isValidPhone(phone)) {
      alert('Please enter a valid 10-digit phone number');
      return false;
    }
  
    if (gender === '') {
      alert('Please select a gender');
      return false;
    }
  
    if (religions.length === 0) {
      alert('Please select at least one religion');
      return false;
    }
  
    let selectedReligions = [];
    religions.forEach(religion => {
      selectedReligions.push(religion.value);
    });
  
    alert(`Form submitted successfully!\nSelected Religions: ${selectedReligions.join(', ')}`);
    // Proceed with form submission or other actions
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidPhone(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  }