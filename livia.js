const filmes = document.querySelectorAll(".model");//  pega tds os elemnys com model
const totalf = document.getElementById("total");

let total = 0;
filmes.forEach(filme => {
    const btnmais = filme.querySelector(".mais");
    const btnmenos = filme.querySelector(".menos");
    const qtdelmt = filme.querySelector(".qntd");

    let qntdd = 0;
    const preco = Number(filme.getAttribute("preco")); // converte o valor em text para numero
    
    btnmais.addEventListener("click", () => {
        qntdd++;
        total += preco;
// att o preço para aparecer na tela
        qtdelmt.textContent = qntdd;
        atualizarTotal();
    });
    btnmenos.addEventListener("click", () => {
        if (qntdd > 0) {
            qntdd--;
            total -= preco;

            qtdelmt.textContent = qntdd;
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