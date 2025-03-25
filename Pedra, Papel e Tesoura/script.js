/*Para treinar o switch conforme o livro. */
let escolhaUsuario = prompt("Escolha: pedra, papel ou tesoura")
  .toLowerCase()
  .trim();

let aleatorio = Math.ceil(Math.random() * 3);

let sorteio = null;
switch (aleatorio) {
  case 1:
    sorteio = "pedra";
    break;
  case 2:
    sorteio = "papel";
    break;
  case 3:
    sorteio = "tesoura";
}

if (escolhaUsuario === sorteio) {
  alert(`Deu empate paizão, também escolhi ${sorteio}`);
} else if (
  (sorteio === "pedra" && escolhaUsuario === "tesoura") ||
  (sorteio === "tesoura" && escolhaUsuario === "papel") ||
  (sorteio === "papel" && escolhaUsuario === "pedra")
) {
  alert(`Você perdeu my G, escolhi ${sorteio}`);
} else {
  alert(`Boaa, você está com sorte joguei ${sorteio}`);
}
