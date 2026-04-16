const filmes = document.querySelectorAll(".model");
const totalf = document.getElementById("total");
let total = 0;

filmes.forEach(filme => {
    const btnMais = filme.querySelector(".mais");
    const btnMenos = filme.querySelector(".menos");
    const qtdElemento = filme.querySelector(".qtd");
    let quantidade = 0;
    const preco = Number(filme.getAttribute("preco"));

    btnMais.addEventListener("click", () => {
        quantidade++;
        total += preco;

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