/*
* Creando el objeto pokemon
* Participante LUIS FERNANDO NUMA NAVARRO ARIAS
*/

function Pokemon()
{
	this.nombre = "";
	this.vida = "";
	this.ataque = "";	
}

Pokemon.prototype.capturarDatos = function() 
{
	this.cargarNombre(document.getElementById("nombrePokemon").value);
    this.cargarVida(document.getElementById("vidaPokemon").value);
    this.cargarAtaque(document.getElementById("ataquePokemon").value);
};

// Cargar datos al objeto.
Pokemon.prototype.cargarNombre = function(nombre) 
{
	this.nombre = nombre;
};

Pokemon.prototype.cargarVida = function(vida) 
{
	this.vida = vida;
};

Pokemon.prototype.cargarAtaque = function(ataque) 
{
	this.ataque = ataque;
};

// Obtener datos del objeto.
Pokemon.prototype.obtenerNombre = function()
{
	return this.nombre;
}

Pokemon.prototype.obtenerVida = function()
{
	return this.vida;
}

Pokemon.prototype.obtenerAtaque = function()
{
	return this.ataque;
}

Pokemon.prototype.mostrarInformacion = function()
{
	datosPokemon.innerText = "El nombre del pokemon es " + this.obtenerNombre() + " tiene una vida de " + this.obtenerVida() + " y un ataque de " + this.obtenerAtaque();
}