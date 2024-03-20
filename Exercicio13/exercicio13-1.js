nome1 = window.prompt("Qual o seu nome?");
if (nome1 !== null && nome1 !== "") {
  document.writeln("Seja bem vindo, " + nome1 + "!");
} else {
  document.writeln("Olá, visitante!");
}
function validar() {
const nome = document.getElementById("nome");
const valorNome = nome.value;
const observacao = document.getElementById("observacao");
const valorobservacao = observacao.value;
if (valorNome === "") {
  alert("Campo nome está vazio!");
  nome.focus();
  return false;
}
if (valorobservacao === "" || valorobservacao === null) {
  alert("Campo observação está vazio!");
  observacao.focus();
  return false;
}

}

