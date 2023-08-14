const clientes = [
    {
        "img":"cli1.jpeg"
    },
    {
        "img":"cli2.jpeg"
    },
    {
        "img":"cli3.jpeg"
    },
    {
        "img":"cli4.jpeg"
    },
    {
        "img":"cli5.jpeg"
    },
    {
        "img":"cli6.jpeg"
    },
];

function mostrarClientes(clientes){
    let cliente=" ";
    clientes.forEach(c => {
        cliente +=`
        <article>
        <img src="img/${c.img}" alt="">
        </article>
        `;
    });

    let contenedorCli = document.getElementById("contenedorCli");

    contenedorCli.innerHTML = cliente;
}

document.addEventListener("DOMContentLoaded", mostrarClientes(clientes));