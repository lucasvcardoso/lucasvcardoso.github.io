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
    nomeTd.classList.add("info-nome");
    var quantidadeTd = document.createElement("td");
    quantidadeTd.classList.add("info-quantidade");
    var precoUnitarioTd = document.createElement("td");  
    precoUnitarioTd.classList.add("info-preco-unitario")  
    var totalItemTd = document.createElement("td");
    totalItemTd.classList.add("info-total-item");
    var noCarrinhoTd = document.createElement("td");
    var checkbox = document.createElement("INPUT");
    checkbox.type = "checkbox";
    checkbox.classList.add("info-no-carrinho");
    checkbox.addEventListener("click", function(){
        if(checkbox.checked){
            itemTr.classList.add("no-carrinho");
            atualizaCarrinho();
        }
        else{
            itemTr.classList.remove("no-carrinho");
            atualizaCarrinho();
        }
    });

    noCarrinhoTd.appendChild(checkbox);

    nomeTd.textContent = item;
    quantidadeTd.textContent = quantidade;
    precoUnitarioTd.textContent = parseFloat(precoUnitario).toFixed(2);    
    totalItemTd.textContent = calculaTotalItem(quantidade, precoUnitario);

    itemTr.appendChild(noCarrinhoTd);
    itemTr.appendChild(nomeTd);
    itemTr.appendChild(quantidadeTd);
    itemTr.appendChild(precoUnitarioTd);
    itemTr.appendChild(totalItemTd);
    
    var tabela = document.querySelector("#tabela-compras");

    tabela.appendChild(itemTr);

    showMensagem(item + " adicionado com sucesso!");

    somaLista();
        
    form.reset();
});

function showMensagem(mensagem){
    var label = document.querySelector("#mensagem");
    label.textContent = mensagem;
    label.classList.remove("invisivel");
    label.classList.add("visivel");
    label.classList.add("fadeOut");
    
    setTimeout(function(){
        label.classList.remove("fadeOut");
        label.classList.remove("visivel");
        label.classList.add("invisivel");
    }, 5000);
}