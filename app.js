//O principal objetivo deste desafio é fortalecer 
// suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para 
// resolver o problema.

let listaAmigos = [];

function adicionarAmigo(){
    let nomeAmigo = document.querySelector('input').value;

    //Implemente uma validação para garantir que o campo não esteja vazio.
    // Se estiver vazio, exiba um alerta com a mensagem de erro: 
    // "Por favor, insira um nome."
    if(nomeAmigo == ''){
        alert("Por favor, insira um nome.")
    } else{
        listaAmigos.push(nomeAmigo); //para adicionar o nome digitado do amigo na lista de amigos
        console.log(listaAmigos);
    }
}

