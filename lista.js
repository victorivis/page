function listar(){
    if(localStorage.lista == undefined){
        return null;
    }
    else{
        return JSON.parse(localStorage.lista);
    }
}

function adicionar(item){
    if(localStorage.lista == undefined){
        //console.log(JSON.stringify([{item, preco, comprado}]));
        localStorage.lista = JSON.stringify([item]);
    }
    else{
        //alert("Eureka!");
        let atual = listar();
        atual.push(item);
        localStorage.lista = JSON.stringify(atual);
    }
}

function remover(item){
    let atual = listar();
    let posicao = atual.findIndex(obj_atual => obj_atual.nome == item.nome && obj_atual.preco == item.preco && obj_atual.comprado == item.comprado);
    console.log("A posicao do item ", item, "a ser removido é : ", posicao);
    if(posicao != -1 && atual[posicao]){
        atual.splice(posicao, 1);
        localStorage.lista = JSON.stringify(atual);
    }
    else{
        console.log("Item ", item, "nao encontrado")
    }
}

function marcar(item){
    let atual = listar();
    let posicao = atual.findIndex(obj_atual => obj_atual.nome == item.nome && obj_atual.preco == item.preco && obj_atual.comprado == item.comprado)
    console.log("A posicao do item marcado ", item, " é : ", posicao);
    if(posicao != -1 && atual[posicao]){
        atual[posicao].comprado = true;
        localStorage.lista = JSON.stringify(atual);
    }
    else{
        console.log("Item ", item, "nao encontrado")
    }
}

function desmarcar(item){
    let atual = listar();
    let posicao = atual.findIndex(obj_atual => obj_atual.nome == item.nome && obj_atual.preco == item.preco && obj_atual.comprado == item.comprado)
    
    console.log("A posicao do item desmarcado ", item, " é : ", posicao);
    if(posicao != -1 && atual[posicao]){
        atual[posicao].comprado = false;
        localStorage.lista = JSON.stringify(atual);
    }
    else{
        console.log("Item ", item, "nao encontrado")
    }    
}

export {listar, adicionar, remover, marcar, desmarcar};