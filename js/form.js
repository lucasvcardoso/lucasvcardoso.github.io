var botaoAdicionar = document.querySelector("#adicionar-item");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var item = form.nome.value;
    var quantidade = form.quantidade.value;
    var precoUnitario = form.precoUnitario.value;

    if(quantidade <= 0 || precoUnitario <= 0 || isNaN(quantidade) || isNaN(precoUnitario)){
        var mensagem = "Erro: quantidade e preço devem ser números válidos.";
        showMensagem(mensagem);
        return;
    }

    if(item == "" || quantidade == "" || precoUnitario == ""){
        var mensagem = "Erro: os campos devem ser preenchidos.";
        showMensagem(mensagem);
        return;
    }
    
    var itemTr = document.createElement("tr");
    itemTr.classList.add("item");
    var nomeTd = document.createElement("td");
    var quantidadeTd = document.createElement("td");
    var precoUnitarioTd = document.createElement("td");  
    precoUnitarioTd.classList.add("info-preco-unitario")  
    var totalItemTd = document.createElement("td");
    totalItemTd.classList.add("info-total-item");

    nomeTd.textContent = item;
    quantidadeTd.textContent = quantidade;
    precoUnitarioTd.textContent = parseFloat(precoUnitario).toFixed(2);    
    totalItemTd.textContent = calculaTotalItem(quantidade, precoUnitario);

    itemTr.appendChild(nomeTd);
    itemTr.appendChild(quantidadeTd);
    itemTr.appendChild(precoUnitarioTd);
    itemTr.appendChild(totalItemTd);

    var tabela = document.querySelector("#tabela-compras");

    tabela.appendChild(itemTr);

    showMensagem(item + " adicionado com sucesso!");

    somaLista();
    
    limpaCampos(form);
});

function showMensagem(mensagem){
    var label = document.querySelector(".mensagem");
    label.textContent = mensagem;
    label.style.display = "block";
    setTimeout(function(){
        label.style.display = "none";
    }, 3000);
}

function limpaCampos(form){
    form.nome.value = "";
    form.quantidade.value = "";
    form.precoUnitario.value = "";
}
