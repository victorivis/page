import{
    listar,
    adicionar,
    remover,
    marcar,
    desmarcar,
} from "./lista.js"

function adicionarProduto() {
    const inputNome = document.querySelector("#nome");
    const inputPreco = document.querySelector("#preco");
    if (inputNome.value && inputPreco.value) {
        adicionar({nome: inputNome.value, preco: inputPreco.value, comprado: false});
        mostrarProduto(inputNome.value, inputPreco.value);
    }
}

function mostrarProduto(nome, preco){
    console.log("Nome: ", nome, " Preco:", preco);

    if(nome && preco){
        

        let tabela = document.getElementById("tabela");
        if(tabela == null){
            const body = document.querySelector("body");
            let tabela = document.createElement("table");
            tabela.id = "tabela";

            const linha = document.createElement("tr");
            const coluna1 = document.createElement("th");
            coluna1.textContent = "Nome";

            const coluna2 = document.createElement("th");
            coluna2.textContent = "Preço";

            const coluna3 = document.createElement("th");
            coluna3.textContent = "Comprado";

            const coluna4 = document.createElement("th");
            coluna4.textContent = "Ações";

            for(let i=1; i<=4; i++){
                linha.appendChild(eval(`coluna${i}`));
            }

            tabela.appendChild(linha);
            body.appendChild(tabela);
        }

        tabela = document.getElementById("tabela");
        const linha = document.createElement("tr");

        const coluna1 = document.createElement("th");
        const coluna2 = document.createElement("th");
        const coluna3 = document.createElement("th");
        const coluna4 = document.createElement("th");

        coluna1.textContent = nome;
        coluna2.textContent = "R$ " + preco;
        const selecionar = document.createElement("input");
        selecionar.type = "checkbox";
        coluna3.appendChild(selecionar);
        const remover = document.createElement("button");
        remover.textContent = "Remover"
        remover.id = "botaoRemover";
        //remover.style = "padding: 3px;";
        coluna4.appendChild(remover);

        [coluna1, coluna2, coluna3, coluna4].forEach((coluna) => linha.appendChild(coluna));

        console.log("tabela: ", tabela);
        tabela.appendChild(linha);

        //nome.value = "";
        //preco.value = "";
    }
}

function carregarProduto(){
    let lista = listar();
    console.log("lista: ", lista);
    for(let i of lista){
        console.log(i);
        mostrarProduto(i.nome, i.preco);
    }
}

let botao = document.getElementById("adicionar");
botao.addEventListener("click", adicionarProduto);

window.addEventListener("load", carregarProduto);

/*
let arroz = {nome: "Arroz (5kg)", preco: 20, comprado: false};
let feijao = {nome: "Feijao (1kg)", preco: 4, comprado: false};
adicionar(arroz);
adicionar(feijao);
adicionar(arroz);

remover(arroz);
remover(arroz);
*/