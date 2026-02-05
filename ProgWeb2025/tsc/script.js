function calcular() {
    var raioInput = document.getElementById("raio");
    var areaSpan = document.getElementById("area");
    var circunferenciaSpan = document.getElementById("circunferencia");
    var raio = parseFloat(raioInput.value);
    if (isNaN(raio) || raio <= 0) {
        areaSpan.textContent = "Valor inválido";
        circunferenciaSpan.textContent = "Valor inválido";
        return;
    }
    var area = Math.PI * raio * raio;
    var circunferencia = 2 * Math.PI * raio;
    areaSpan.textContent = area.toFixed(2);
    circunferenciaSpan.textContent = circunferencia.toFixed(2);
}
