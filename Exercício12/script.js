let tamanho = 16;

function aumentar() {
    tamanho++;
    let text = document.getElementById("texto");
    text.style.fontSize = tamanho+"px";
}
function trocaCor() {
    let text = document.getElementById("texto");
    let cores = ["red", "blue", "green", "purple", "orange", "black", "pink"];
    let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    text.style.color = corAleatoria;
}
function inserir() {
    let novoTexto = document.getElementById("novoTexto").value;
    let textoInserido = document.getElementById("textoInserido");
    textoInserido.innerText = novoTexto;
    textoInserido.classList.add("texto-atualizado");  
}