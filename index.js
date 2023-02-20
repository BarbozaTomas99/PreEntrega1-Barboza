// CALCULADORA DOLAR TARJETA //

let cotizacionDolar = parseInt (prompt ("Ingrese el valor de la cotizacion (Pesos)"));

function calcularValores(){
    let valorDolar = parseInt (prompt ("Ingrese cantidad de dólares (USD)"));
    let valorPesos = (valorDolar * cotizacionDolar);
    let impuestoPais = (valorPesos * 30 / 100); //El impuesto es del 30%
    let impuestoGanancias = (valorPesos * 45 / 100); //El impuesto es del 45%
    let total = (valorPesos + impuestoPais + impuestoGanancias);
    alert("Costo en Pesos: " + valorPesos + "\nImpuesto país del 30%: " + impuestoPais + "\nImpuesto a las ganancias del 45%: " + impuestoGanancias + "\nTotal: " + total);
}

// Ejecutar la función principal

calcularValores ();

let pregunta = "S";
while (pregunta === "S") {
    pregunta = prompt("Desea ingresar otro valor? S/N");
    if (pregunta === "S") {
        calcularValores();
    }
}

alert("Gracias por usar esta calculadora");
