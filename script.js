function alterarQuantidade(botao, valor) {
    let input = botao.parentElement.querySelector("input");
    let novaQuantidade = parseInt(input.value) + valor;
    input.value = novaQuantidade < 0 ? 0 : novaQuantidade;
}

function calcularPedido() {
    let nome = document.getElementById("nome").value;
    let itens = document.querySelectorAll(".card");
    let listaResumo = document.getElementById("resumoPedido");
    let precoFinal = 0;
    listaResumo.innerHTML = "";

    itens.forEach(item => {
        let nomePrato = item.querySelector("h2").innerText;
        let precoUnitario = parseFloat(item.querySelector(".dinheiro").innerText.replace("R$", "").replace(",", "."));
        let quantidade = parseInt(item.querySelector("input").value);

        if (quantidade > 0) {
            let total = precoUnitario * quantidade;
            precoFinal += total;
            listaResumo.innerHTML += `<li>Prato: ${nomePrato} - Preço unitário: R$ ${precoUnitario.toFixed(2)} - Quantidade: ${quantidade} - Total: R$ ${total.toFixed(2)}</li>`;
        }
    });

    document.getElementById("saudacao").innerText = `Caro ${nome}`;
    document.getElementById("precoFinal").innerText = `Preço final: R$ ${precoFinal.toFixed(2)}`;
    document.getElementById("resultado").style.display = "block";
}
