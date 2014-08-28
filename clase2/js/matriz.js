//var menu = ["Productos","Ventas","Contacto"];
//document.write(menu[1]);

//var dofa = [["Fuerza","Oportunidades"],["Debilidades","Amenazas"]];
//document.write(dofa);

function explosion(){
	alert("Boom");
	document.write("<h1>Elegiste una celda minada</h1>");
}

function ganaste(){
	document.write("Eres un ganador");
}

var campo = [[ 1 , 0 , 0 ],
			[ 0 , 1 , 0 ],
			[ 1 , 1 , 1 ]];

var textos = ["Cesped!!","Bomba!!"];

var x,y;
alert("Estas en un campo minado \n" +
	"Elige una posicion entre 0 y 2 para X y Y");

x = prompt("Posicion en X? (entre 0 y 2");
y = prompt("Posicion en Y? (entre 0 y 2");

//document.write( textos[campo[x][y]] );

if(x<=2 && y<=2){
	var posicion = campo[x][y];
	document.write("Elegiste "+textos[posicion]+"<br></br>");
	if(posicion==1){
		explosion();
	}else{
		ganaste();
	}
}else{
	explosion();
}