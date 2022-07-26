let nombre = document.getElementById("nombre-persona");
let nombredos = prompt("introduce tu nombre.")
nombre.insertAdjacentHTML("afterend", nombredos)

function sumar (valor) {
    var total = 0;	
    valor = parseInt(valor);
    total = document.getElementById("cant-total").innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById("cant-total").innerHTML = total;
}

function multi(){
    var seis = 6;
    var cuatro = 4;
    var preciocuatro = 350;
    var precioseis = 450;
    var bcuatro = document.getElementById("cant-bandeja-4").value;
    var bseis = document.getElementById("cant-bandeja-6").value;
    var puno = bcuatro * cuatro;
    var pdos = bseis * seis;
    var ptotal = puno + pdos;
    var preciouno = preciocuatro * bcuatro;
    var preciodos = precioseis * bseis;
    var preciototal = preciouno + preciodos;
    document.getElementById("numero-hambur").innerHTML = ptotal;
    document.getElementById("valor-compra").innerHTML = "$" + preciototal;
}