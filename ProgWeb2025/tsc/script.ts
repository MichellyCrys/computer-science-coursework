function calcular(): void {
    const raioInput = document.getElementById("raio") as HTMLInputElement;
    const areaSpan = document.getElementById("area")!;
    const circunferenciaSpan = document.getElementById("circunferencia")!;
  
    const raio = parseFloat(raioInput.value);
  
    if (isNaN(raio) || raio <= 0) {
      areaSpan.textContent = "Valor inválido";
      circunferenciaSpan.textContent = "Valor inválido";
      return;
    }
  
    const area = Math.PI * raio * raio;
    const circunferencia = 2 * Math.PI * raio;
  
    areaSpan.textContent = area.toFixed(2);
    circunferenciaSpan.textContent = circunferencia.toFixed(2);
  }
  