let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").ariaValueMax.trim();

    if (nomeAmigo ==="") {
        alert("Oh paizao, digite um nome ai");
        return;

    }

    amigos.push(nomeAmigo);


document.getElementById("amigo").value = "";


atualizarListaAmigos();
}


function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach() {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}


function sortearAmigo() {
    if (amigo.length === 0) {
        alert("Você não possuí amigos ainda. Adicione alguns nomes.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHMTL = "";

    let itemResultado = document.createElement("li")
    itemResultado.textContent = "😎 Amigo Sorteado:" + amigoSorteado + "😎";
    resultado.appendChild(itemResultado);


    lançarConfetti();
}


function lançarConfetti() {
    lançarConfetti({
        particleCout: 600,
        spread: 170
        origin: { x: 0,5, y: 0,5}
    });
}