function calculateTMB() {
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    let result = document.getElementById('result');

    if (!gender || !age || !weight || !height) {
      result.textContent = "Por favor, preencha todos os campos.";
      return; 
    }
  
    if (gender === 'male') {
      const tmb = 66 + (13.8 * weight) + (5 * height) - (6.8 * age);
      result.textContent = `Sua TMB é ${tmb.toFixed(2)} calorias por dia.`;
    } else {
      const tmb = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
      result.textContent = `Sua TMB é ${tmb.toFixed(2)} calorias por dia.`;
    }
  }
  