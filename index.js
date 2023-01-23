// CALCULADORA DOLAR TARJETA //

let valorDolar;
function calcularValores(){
    valorDolar = parseInt (prompt ("Ingrese cantidad de dólares (USD)"));
    let valorPesos = (valorDolar * 189.75); //Valor dolar actual 20/01/2023
    let impuestoPais = (valorPesos * 30 / 100); //El impuesto es del 30%
    let impuestoGanacias = (valorPesos * 45 / 100); //El impuesto es del 45%
    let total = (valorPesos + impuestoPais + impuestoGanacias);
    alert ("Costo en Pesos: " + valorPesos + ", Impuesto país del 30%: " + impuestoPais + ", Impuesto a las ganancias del 45%: " + impuestoGanacias + ", Total: " + total);
}
function continuar(){
    let pregunta = prompt ("¿Desea ingresar otro valor? S/N");
    switch (pregunta){
        case "S":
            calcularValores();
            continuar();
            break;
        case "N":
            alert ("Gracias por usar esta calculadora");
            break;
        default:
            alert ("No se reconoce el comando, por favor ingresar solo S/N");
            continuar();
            break
    }
}
calcularValores ();
continuar();


