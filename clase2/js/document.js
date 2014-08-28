function Pokemon(n,v,a)
{
	this.grito = "Pika!";
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function(){
		alert(this.grito);
	}

}

function inicio(){
	var rattata = new Pokemon("Rattata",40,2);
	rattata.vida = rattata.vida - 13;
	nombrePokemon.innerText = "El pokemon se llama " + [rattata.nombre];
	datosPokemon.innerText = "Tiene una vida de " + [rattata.vida] + 
	", y un ataque de " + rattata.ataque + "y su grito es: " + rattata.grito;

}




//Document Objet Model
// navigator, window, navigator
//Objeto
//	Variables
//	Funciones

//document.write("Hola!!");
//var pi = 3.14159265;

/* var max;

max = Math.max(2,54,33,44,74,644,64,34,212);
document.write(max);

var pos = navigator.getCurrentPosition();
document.write

*/