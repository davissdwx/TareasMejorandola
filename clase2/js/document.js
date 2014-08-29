function Pokemon(g,n,v,a,path)
{
	this.grito = g;
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.imagen = path;
	this.gritar = function(){
		alert(this.grito);
	}

}

function inicio(){
	var rattata = new Pokemon("Rattatatatatata","Ratata",40,2,"img/imgRattata.png");
	rattata.vida = rattata.vida - 13;
	nombrePokemon.innerText = "El pokemon se llama " + [rattata.nombre];
	datosPokemon.innerText = "Tiene una vida de " + [rattata.vida] + 
	", y un ataque de " + rattata.ataque + "y su grito es: " + rattata.grito;
	imagenPokemon.src = rattata.imagen;

	var pikachu = new Pokemon("pika pikaaaa","Pikachu",100,100,"img/imgpikachu.png");
	pikachu.vida = pikachu.vida - 13;
	nombrePokemon2.innerText = "El pokemon se llama " + [pikachu.nombre];
	datosPokemon2.innerText = "Tiene una vida de " + [pikachu.vida] + 
	", y un ataque de " + pikachu.ataque + "y su grito es: " + pikachu.grito;
	imagenPokemon2.src = pikachu.imagen;

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