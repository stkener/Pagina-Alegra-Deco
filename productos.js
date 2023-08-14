const productos=
[
    {
        "img":"mate1.png",
        "nombre":"Mate Pampa"
    },
    {
        "img":"mate3.png",
        "nombre":"Mate + Contenedores"
    },
    {
        "img":"comboMate.png",
        "nombre":"Mate y galletitas"
    },
    {
        "img":"alfombraRayuela.png",
        "nombre":"Alfombra Rayuela"
    },
    {
        "img":"almohadas1.png",
        "nombre":"Almohadas Lisas"
    },
    {
        "img":"almohadones1.png",
        "nombre":"Almohadones Estampados"
    },
    {
        "img":"canastos1.png",
        "nombre":"Canastos de Junco"
    },
    {
        "img":"canastos2.png",
        "nombre":"Mini Canastos"
    },
    {
        "img":"canastos3.png",
        "nombre":"Canastos con tapa"
    },
    {
        "img":"espatulaPlastica.png",
        "nombre":"Espatula Plastica"
    },
    {
        "img":"vasosTapa.png",
        "nombre":"Vasos con tapa"
    },
    {
        "img":"Bazar.png",
        "nombre":"Combo Cocina"
    }
];


function mostrarProductos(productos){
    let articulo=" ";
    productos.forEach(p => {
        articulo +=`
        <article>
        <img src="img/${p.img}" alt="${p.nombre}">
        <p class="fuenteProductos">${p.nombre}</p> 
        </article>
        `;
    });

    let contenedorArticulos = document.getElementById("contenedorArticulos");

    contenedorArticulos.innerHTML = articulo;
}

document.addEventListener("DOMContentLoaded", mostrarProductos(productos));