var idBtBoton,idBtBoton2,idTxAncho,idTxAlto,idTxRadio;

function inicio(){
	idBtBoton = document.getElementById("boton");
	idTxAncho = document.getElementById("ancho");
	idTxAlto = document.getElementById("alto");
	idBtBoton2 = document.getElementById("boton2");
	idTxRadio = document.getElementById("radio");

	idBtBoton.addEventListener("click",dibujarCuadrado);
	idBtBoton2.addEventListener("click",dibujarCirculo);

}

function Cuadrado(idCanvas,x,y,ancho,largo,color){
	var idCanDibujito = document.getElementById(idCanvas);
	lienzo = idCanDibujito.getContext("2d");

	lienzo.beginPath();
	lienzo.moveTo(x,y);
	lienzo.lineTo(ancho,y);
	lienzo.lineTo(ancho,largo);
	lienzo.lineTo(x,largo);
	lienzo.lineTo(x,y);
	lienzo.strokeStyle = color;
	lienzo.stroke();
}

function Circulo(idCanvas,x,y,radio,arco,color,b){
	var idCanDibujito = document.getElementById(idCanvas);
	lienzo = idCanDibujito.getContext("2d");

	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.arc(x,y,radio,arco,b);
	lienzo.closePath();
	lienzo.stroke();
}

function dibujarCuadrado(){
	var alto = Number(idTxAlto.value);
	var ancho = Number(idTxAncho.value);
	Cuadrado("dibujito",5,5,alto,ancho,"#22f90c");
}

function dibujarCirculo(){

	Circulo("dibujito2",150,150,100,2*Math.PI,"#8e0314",false);
}


// // Ejemplo de ciclos y factorial
// var iBtBotoncito,idTxCaja,idDivResultado;

// function inicio(){
// 	idBtBotoncito = document.getElementById("botoncito");
// 	idBtBotoncito.addEventListener("click",);
	
// 	idTxCaja = document.getElementById("caja");
// 	idDivResultado = document.getElementById("resultado");

// }

// function factorial(numero){
// 	var i,resultado = 1;

// 	for(i=1;i<=numero;i++){
// 		resultado = resultado*i;
// 	}

// 	return resultado;
// }

// function mostrarFactorial(){

// 	idDivResultado.innerHTML = factorial(Number(idTxCaja.value));
// 	console.log("Se ejecuto la funcion mostrarFactorial");
// }
