// Algoritmo con condicional
function calcularImpuesto() {
    let ingresos = parseFloat(document.getElementById("ingresos").value);
    if (ingresos > 0) {
        let impuesto = ingresos * 0.75;
        document.getElementById("resultado").innerHTML = "El monto del impuesto a pagar es de: " + impuesto;
    } else {
        document.getElementById("resultado").innerHTML = "Error: el monto de ingresos debe ser mayor que cero.";
    }
}

// Algoritmo con ciclo
let totalIngresos = 0;
let totalImpuestos = 0;

function agregarIngreso() {
    let ingresos = parseFloat(document.getElementById("ingresos_ciclo").value);
    if (ingresos >= 0) {
        totalIngresos += ingresos;
        let impuesto = ingresos * 0.75;
        totalImpuestos += impuesto;
        document.getElementById("total_ingresos").innerHTML = "El monto total de ingresos es de: " + totalIngresos;
        document.getElementById("total_impuestos").innerHTML = "El monto total de impuestos a pagar es de: " + totalImpuestos;
    } else {
        document.getElementById("total_ingresos").innerHTML = "Error: el monto de ingresos debe ser mayor o igual a cero.";
        document.getElementById("total_impuestos").innerHTML = "";
    }
}