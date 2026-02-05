const pontos = [];

document.body.addEventListener("mousemove", (e) => {
  const ponto = document.createElement("div");
  ponto.className = "ponto";
  ponto.style.left = `${e.pageX}px`;
  ponto.style.top = `${e.pageY}px`;

  document.body.appendChild(ponto);
  pontos.push(ponto);

  // Remove o ponto mais antigo se ultrapassar 8
  if (pontos.length > 8) {
    const antigo = pontos.shift();
    antigo.remove();
  }
});
