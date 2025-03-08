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
        limparCampo(); //chamo a função para que o input fique limpo para o usuario digitar outro nome
    }
}

function limparCampo() {
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function atualizarLista(){
    exibirTextoNaTela('h1', listaAmigos);
}

//Escreva uma função que selecione aleatoriamente um dos nomes armazenados no array amigos.
// Use Math.random() e Math.floor() para obter um índice aleatório.
function sortearAmigo(){
    //Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.
    if(listaAmigos.lenght === 0){
        alert("Digite o nome dos seus amigos.")
    }else{
        //Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.
        let indice = Math.floor(Math.random() * listaAmigos.length);
        //Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.
        amigoSorteado = listaAmigos[indice];
    }
    //Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.
    exibirTextoNaTela('h1', `O seu amigo secreto é: ${amigoSorteado}`)


}