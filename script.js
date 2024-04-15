document.getElementById('taxform').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const grossIncome = parseFloat(document.getElementById('grossIncome').value);
    const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
    const deductions = parseFloat(document.getElementById('deductions').value) || 0;
    const age = document.getElementById('age').value;
    
    // Validate age selection
    if (age === '') {
      document.getElementById('ageError').textContent = 'Age group is required';
      document.getElementById('ageError').style.display = 'inline';
      return;
    }
  
    // Hide error icons
    document.querySelectorAll('.error-icon').forEach(icon => {
      icon.style.display = 'none';
    });
  
    // Calculate tax
    let tax = 0;
    const taxableIncome = grossIncome + extraIncome - deductions - 8000000; // Deduct 8 Lakhs
    if (taxableIncome > 0) {
      if (age === '<40') {
        tax = taxableIncome * 0.3; // 30% tax for age < 40
      } else if (age === '40-60') {
        tax = taxableIncome * 0.4; // 40% tax for age ≥ 40 but < 60
      } else if (age === '≥60') {
        tax = taxableIncome * 0.1; // 10% tax for age ≥ 60
      }
    }
  
    // Display tax result in modal
    document.getElementById('taxResult').textContent = ` ${tax.toFixed(2)}  after tax deductions`;
    // document.getElementById('taxResult').textContent = ` \n after tax deductions `
    document.getElementById('modal').style.display = 'block';
  });
  
  // Close modal
  
  document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });
