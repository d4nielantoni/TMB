function calculateTMB() {
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    let result = document.getElementById('result');
  
    if (gender === 'male') {
      const tmb = 10 * weight + 6.25 * height - 5 * age + 5;
      result.textContent = `Sua TMB é ${tmb.toFixed(2)} calorias por dia.`;
    } else {
      const tmb = 10 * weight + 6.25 * height - 5 * age - 161;
      result.textContent = `Sua TMB é ${tmb.toFixed(2)} calorias por dia.`;
    }
  }
  