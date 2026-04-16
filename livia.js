const filmes = document.getElementsByClassName(".model")[0];// pega o elemento direto das divs com a class "model"
const totalf = document.getElementById("total");
let total = 0;

filmes.forEach(filme => {
    const btnMais = filme.querySelector(".mais");
    const btnMenos = filme.querySelector(".menos");
    const qtdElemento = filme.querySelector(".qtd");
    // qndtdade de filmes selecionados
    let qntdde = 0;
    // pega o preço do HTML
    const preco = Number(filme.getAttribute("data-preco"));
    btnMais.addEventListener("click", () => {
        qntdde++;
        total += preco;

        qtdElemento.textContent = qntdde;
        atualizarTotal();
    });
    btnMenos.addEventListener("click", () => {
        if (qntdde > 0) {
            qntdde--;
            total -= preco;

            qtdElemento.textContent = qntdde;
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