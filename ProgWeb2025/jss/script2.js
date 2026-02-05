let pontos = 0;

while (true) {
  const escolha = parseInt(prompt("Escolha sua jogada:\n1 - Papel\n2 - Pedra\n3 - Tesoura"));

  // Verifica se a escolha é inválida
  if (![1, 2, 3].includes(escolha)) {
    console.log("Opção inválida. Você perdeu!");
    console.log(`A sua pontuação foi de ${pontos}`);
    break;
  }

  const opcoes = ["", "Papel", "Pedra", "Tesoura"];
  const computador = Math.floor(Math.random() * 3) + 1;

  console.log(`O computador jogou ${opcoes[computador]}`);

  // Verifica se houve empate
  if (escolha === computador) {
    console.log("A rodada empatou!");
    continue;  // A rodada continua sem perder pontos
  }

  // Define as condições de vitória
  const ganhou =
    (escolha === 1 && computador === 3) ||  // Papel ganha de Tesoura
    (escolha === 2 && computador === 1) ||  // Pedra ganha de Papel
    (escolha === 3 && computador === 2);   // Tesoura ganha de Pedra

  // Verifica se o jogador ganhou ou perdeu
  if (ganhou) {
    pontos++;
    console.log("Você ganhou!\n");
  } else {
    console.log(`Você perdeu! A sua pontuação foi de ${pontos}`);
    break;
  }
}
