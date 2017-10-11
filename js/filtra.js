var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var items = document.querySelectorAll(".item");
    
    if(this.value.length > 0){
        for(var i = 0; i < items.length; i++){
            var item = items[i];
            var tdNome = item.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");
            
            if(expressao.test(nome)){
                item.classList.remove("item-escondido");
            }else{
                item.classList.add("item-escondido");
            }
            
            /* 
            Podemos escrever a comparação com outro método,
            utilizando substring:
            
            var comparavel = nome.substr(0, this.value.length).toLowerCase();
            var valorDigitado = this.value.toLowerCase();
            
            if(!(comparavel == valorDigitado)){
                //adiciona classe invisivel
            }else{
                //remove classe invisivel                    
            }
            
            */
        }
    }else{
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.classList.remove("item-escondido");
        }
    }
});