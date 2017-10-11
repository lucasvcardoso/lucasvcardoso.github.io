var chkNoCarrinhoList = document.querySelectorAll(".info-no-carrinho");

for(var i = 0; i < chkNoCarrinhoList.length; i++){
    var chkNoCarrinho = chkNoCarrinhoList[i];
    chkNoCarrinho.addEventListener("click", function(){
        if(chkNoCarrinho.checked){
            item.classList.add("no-carrinho");
            atualizaCarrinho();
        }
        else{
            item.classList.remove("no-carrinho");
            atualizaCarrinho();
        }
    });
}