function increaseValue(button) {
    let input = button.previousElementSibling;
    input.value = parseInt(input.value) + 1;
}

function decreaseValue(button) {
    let input = button.nextElementSibling;
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
    }
}

// Função para alterar o valor do input de quantidade
function alterarQuantidade(botao, valor) {
    let input = botao.parentElement.querySelector("input");
    let novaQuantidade = parseInt(input.value) + valor;
    input.value = novaQuantidade < 0 ? 0 : novaQuantidade;
}

// Função para calcular o pedido
function calcularPedido() {
    let nome = document.getElementById("nome").value;
    let itens = document.querySelectorAll(".card");
    let listaResumo = document.getElementById("resumoPedido");
    let precoFinal = 0;
    listaResumo.innerHTML = "";

    itens.forEach(item => {
        let nomePrato = item.querySelector("h3").innerText;
        let precoUnitario = parseFloat(item.querySelector(".preco").innerText.replace("R$", "").replace(",", "."));
        let quantidade = parseInt(item.querySelector("input").value);

        if (quantidade > 0) {
            let total = precoUnitario * quantidade;
            precoFinal += total;
            listaResumo.innerHTML += `<li>${nomePrato} - Preço: R$ ${precoUnitario.toFixed(2)} - Quantidade: ${quantidade} - Total: R$ ${total.toFixed(2)}</li>`;
        }
    });

    document.getElementById("saudacao").innerText = `Caro ${nome}`;
    document.getElementById("precoFinal").innerText = `Preço final: R$ ${precoFinal.toFixed(2)}`;
    document.getElementById("resultado").style.display = "block";
}