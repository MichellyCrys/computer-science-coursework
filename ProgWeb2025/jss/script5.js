function desenhar() {
    const alturas = document.getElementById('alturas').value.trim().split(/\s+/).map(Number);
    const largura = parseInt(document.getElementById('largura').value);
    const grafico = document.getElementById('grafico');
  
    // Limpa gráfico anterior
    grafico.innerHTML = '';
  
    // Cria as barras
    alturas.forEach(altura => {
      const barra = document.createElement('div');
      barra.className = 'barra';
      barra.style.height = `${altura}px`;
      barra.style.width = `${largura}px`;
      grafico.appendChild(barra);
    });
  }
  