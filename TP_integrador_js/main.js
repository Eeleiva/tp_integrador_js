function agregar(precio) {
    let inputPrecioFinal = document.getElementById("inputPrecioFinal");
    let precioFinal = document.getElementById("precioFinal");

    let nuevoPrecio = Number(inputPrecioFinal.value) + Number(precio);

    precioFinal.textContent = "$ " + (nuevoPrecio);
    inputPrecioFinal.value = nuevoPrecio;
}

function limpiarPrecio() {
    let inputPrecioFinal = document.getElementById("inputPrecioFinal");
    let precioFinal = document.getElementById("precioFinal");

    inputPrecioFinal.value = 0;
    precioFinal.textContent = "$ 0";
}