
        // Selecionar todas as caixas
        const caixas = document.querySelectorAll(".caixa");

        // Ao clicar em uma caixa, colocar borda verde
        caixas.forEach(function(caixa) {
            caixa.addEventListener("click", function() {
                caixa.classList.remove("azul");
                caixa.classList.toggle("verde");
            });
        });

        // Botão principal: todas as caixas ficam azuis
        const botaoPrincipal = document.querySelector("#botaoPrincipal");

        botaoPrincipal.addEventListener("click", function() {
            caixas.forEach(function(caixa) {
                caixa.classList.remove("verde");
                caixa.classList.add("azul");
            });
        });

        // Botão secundário: remover todas as bordas coloridas
        const botaoSecundario = document.querySelector("#botaoSecundario");

        botaoSecundario.addEventListener("click", function() {
            caixas.forEach(function(caixa) {
                caixa.classList.remove("verde");
                caixa.classList.remove("azul");
            });
        });