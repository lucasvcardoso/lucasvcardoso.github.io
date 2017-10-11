var items = document.querySelectorAll(".item");

for(var i = 0; i < items.length; i++){
    var item = items[i];

    var tdQuantidade = item.querySelector(".info-quantidade");
    var quantidade = tdQuantidade.textContent;

    var tdPrecoUnitario = item.querySelector(".info-preco-unitario");
    var precoUnitario = tdPrecoUnitario.textContent;

    var tdTotalItem = item.querySelector(".info-total-item");

    var isQuantidadeValida = true;
    var isPrecoValido = true;

    if(quantidade < 0){
        isQuantidadeValida = false;
        tdTotalItem.textContent = "Quantidade inválida";
        item.classList.add("item-invalido");
    }

    if(precoUnitario < 0){
        isPrecoValido = false;
        tdTotalItem.textContent = "Preço inválido";
        item.classList.add("item-invalido");
    }

    if(isQuantidadeValida && isPrecoValido){
        var totalItem = calculaTotalItem(quantidade, precoUnitario);
        tdTotalItem.textContent = totalItem;
        
    }
}

somaLista();

function calculaTotalItem(quantidade, precoUnitario){
    var totalItem = 0;

    totalItem = quantidade * precoUnitario;

    return totalItem.toFixed(2);
}

function somaLista(){
    var items = document.querySelectorAll(".item");
    var total = 0;
    for(var i = 0; i < items.length; i++){
        var item = items[i];
        var tdTotalItem = item.querySelector(".info-total-item");
        var totalItem = tdTotalItem.textContent;
        total = parseFloat(total) + parseFloat(totalItem);
    }

    var totalListaTd = document.querySelector("#totalLista");
    totalListaTd.textContent = "Total da lista: R$" + parseFloat(total).toFixed(2);
    //console.log(total);
}

function atualizaCarrinho(){
    var items = document.querySelectorAll(".item");
    var total = 0;
    for(var i = 0; i < items.length; i++){
        var item = items[i];
        var chkNoCarrinho = item.querySelector(".info-no-carrinho");
        if(chkNoCarrinho.checked){
            var tdTotalItem = item.querySelector(".info-total-item");
            var totalItem = tdTotalItem.textContent;
            total = parseFloat(total) + parseFloat(totalItem);
        }
    }

    var totalCarrinhoTd = document.querySelector("#totalCarrinho");
    totalCarrinhoTd.textContent = "Total no carrinho: R$" + parseFloat(total).toFixed(2);
    //console.log(total);
}

