// exercicio Um
//Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles

function exercicioUm(){
    var nomesEstudantes = [] = "\tESTUDANTES";
    var numeroEstudante = 0;
    var continuar = "";
    var nome = "";
    do{
        do{
            nome = prompt("adicione o nome do aluno");
            if(nome === "")
                alert("o campo não pode estar vazio")
        }while(nome === "")
        nomesEstudantes += "\n" + nome; 
        numeroEstudante ++;
        do{
            continuar = prompt("escreva PARE, Pare ou pare para encerrar a entrada de nomes");
            if(continuar === "")
                alert("não é permitido deixar nulo");
        }while(continuar === "");
    }while(continuar !== "PARE" && continuar !== "Pare" && continuar !== "pare");
    alert("tiveram " + numeroEstudante + " cadastrados, sendo eles:\n" + nomesEstudantes);
}

// exercicio 2
//Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta. Verifique se o planeta que o usuário informou está na array e informe ao usuário.
function exercicioDois(){
    var planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];
    do{
        var planeta =  transformarMaiuscula(prompt("Digite o nome de um planeta"));
        if(planeta === "")
            alert("não deixe o campo vazio")
    }while(planeta === "")   
    var planetaVerificado = false;
    planetaVerificado = planetas.includes(planeta);
    if(planetaVerificado)
        alert("O Planeta " + planeta + " está no array");
    else
        alert("O Planeta " + planeta + " não está no array");
}

// exercicio 3
// Vamos criar uma lista de compras. Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista". Peça novamente para o usuário digitar o nome de uma fruta para ser removida. Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado". Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".

function exercicioTres(){
    do{
        var lista = ["\nMaça", "\nBanana", "\nPessego", "\nMorango", "\nUva", "\nPitaia", "\nKiwi", "\nAmeixa"];
        var confirmar;
        var compra = "\n";
        var item;
        do{
            compra += transformarMaiuscula(prompt("\tLISTA DE COMPRAS" + lista + "\n\ndeseja comprar algo?"));
            if(compra === "")
                alert("não da para estocar o ar, evite deixar vazio");
            else if(!lista.includes(compra))
                alert("item não está na lista de compras");
            else{
                item = lista.indexOf(compra);
                lista.splice(item, 1);
                alert("item comprado");
            }
            compra = "\n";
        }while(lista.length > 0 );
        alert("Lista de compra finalizada com sucesso!");
        confirmar = confirm("deseja fazer uma nova lista de compra?");
    }while(confirmar);
}

// function para Letra maiuscula vindo direto do chatgpt
function transformarMaiuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
} 