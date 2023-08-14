const imagenes = document.querySelector(".listaImagenes")
const listaImagenes = document.querySelectorAll(".imagenFoto")
const btnIzq = document.querySelector(".botonIzquierda")
const btnDer = document.querySelector(".botonDerecha")

btnDer.addEventListener("click", fotoAnterior)
btnIzq.addEventListener("click", fotoSiguiente)



let indice = 0

let intervalo = setInterval(empezarIntervalo, 3000) //funcion y cada cuanto se repite

function empezarIntervalo(){
    indice = indice +1
   
    moverCarrusel()
}

function resetearIntervalo(){
    clearInterval(intervalo)
}

function moverCarrusel(){
    /*let porcentaje = indice * 100*/

    /*console.log(porcentaje)*/

    if(indice > listaImagenes.length - 1){
        indice = 0;
    }else if(indice < 0){
        indice = listaImagenes.length - 1;
    }

    imagenes.style.transform = `translateX(-${indice * 100}%)`
}

function fotoAnterior(){
    indice = indice - 1
    resetearIntervalo()
    moverCarrusel()
}

function fotoSiguiente(){
    indice++
    resetearIntervalo()
    moverCarrusel()
}