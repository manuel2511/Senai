// document.getElementsByClassName("click", () =>{
//     alert("Acessou")
// })



function click(){
    let novoItem = document.createElement("li");
    let texto = document.createTextNode("Novo Item");
    novoItem.append(texto);

    let lista = document.getElementById("minhaLista");
    lista.appendChild(novoItem);
    
}