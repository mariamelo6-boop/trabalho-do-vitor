const filmes = document.querySelectorAll(".model");//  pega tds os elemnys com model
const totalf = document.getElementById("total");

let total = 0;
filmes.forEach(filme => {
    const btnMais = filme.querySelector(".mais");
    const btnMenos = filme.querySelector(".menos");
    const qtdElemento = filme.querySelector(".qntd");

    let quantidade = 0;
    const preco = Number(filme.getAttribute("preco"));// converte o valor em text para numero
    btnMais.addEventListener("click", () => {
        quantidade++;
        total += preco;
// att o preço para aparecer na tela
        qtdElemento.textContent = quantidade;
        atualizarTotal();
    });
    btnMenos.addEventListener("click", () => {
        if (quantidade > 0) {
            quantidade--;
            total -= preco;

            qtdElemento.textContent = quantidade;
            atualizarTotal();
        }
    });
});
function atualizarTotal() {
    totalf.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}