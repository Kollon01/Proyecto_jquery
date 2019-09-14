$(document).ready(function(){

 if(window.location.href.indexOf('index') > -1){


var posts = [{
	titulo: "Post #1",
	Fecha: "Publicado el dia " + moment().date() + " de" + moment().format("MMMM") + " del " + moment().format("YYYY"),  
	informacion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad tempora saepe earum asperiores nostrum, debitis beatae quisquam, dolorem porro velit voluptatum labore nihil officia obcaecati error, id nemo! Earum ratione illum, quidem autem impedit. Laboriosam necessitatibus ratione deleniti, sequi deserunt."
},{
	titulo: "Post #2",
	Fecha: "Publicado el dia " + moment().date() + " de" + moment().format("MMMM") + " del " + moment().format("YYYY"),  
	informacion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad tempora saepe earum asperiores nostrum, debitis beatae quisquam, dolorem porro velit voluptatum labore nihil officia obcaecati error, id nemo! Earum ratione illum, quidem autem impedit. Laboriosam necessitatibus ratione deleniti, sequi deserunt."

},{
	titulo: "Post #3",
	Fecha: "Publicado el dia " + moment().date() + " de" + moment().format("MMMM") + " del " + moment().format("YYYY"),  
	informacion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad tempora saepe earum asperiores nostrum, debitis beatae quisquam, dolorem porro velit voluptatum labore nihil officia obcaecati error, id nemo! Earum ratione illum, quidem autem impedit. Laboriosam necessitatibus ratione deleniti, sequi deserunt."

},{
	titulo: "Post #4",
	Fecha: "Publicado el dia " + moment().date() + " de" + moment().format("MMMM") + " del " + moment().format("YYYY"),  
	informacion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad tempora saepe earum asperiores nostrum, debitis beatae quisquam, dolorem porro velit voluptatum labore nihil officia obcaecati error, id nemo! Earum ratione illum, quidem autem impedit. Laboriosam necessitatibus ratione deleniti, sequi deserunt."

}]; 

var hoja = $("#posts");
posts.forEach(function(item, index) {

var post = `<article class="post">
					<h2>${item.titulo}</h2>
					<span class="date">${item.Fecha}</span>
					<p>${item.informacion}</p>
					<a href="#" class="button-more">Leer mas</a>
				</article>`;
hoja.append(post); 
}); 

 }




var theme = $("#theme"); 

//Seleccion de tema
$("#to-yellow").click(function(){
theme.attr("href", "css/yellow.css")
}); 
$("#to-blue").click(function(){
theme.attr("href", "css/blue.css")
});
$("#to-green").click(function(){
theme.attr("href", "css/green.css")
});

$("#arriba").click(function(e){
	e.preventDeafult(); 
	("html, body").animate({
		scrollTop: 0,
	}, 8000)
	return false; 
});


//Login

$("#login form").submit(function(){

var Nombre = $("#name").val(); 
var Correo = $("#correo").val(); 
var Contraseña =$("#contraseña").val(); 
 

localStorage.setItem("Nombre", Nombre); 
localStorage.setItem("Correo", Correo); 
localStorage.setItem("Contraseña", Contraseña); 

});

var NombreLocal = localStorage.getItem("Nombre"); 
var CorreoLocal = localStorage.getItem("Correo");
var ContraseñaLocal = localStorage.getItem("Contraseña");


var about = $("#about p"); 

if (NombreLocal != "undefined" && NombreLocal != null 
	&& CorreoLocal != "undefined" && CorreoLocal != null 
	&& ContraseñaLocal != "undefined" && ContraseñaLocal != null) {
	about.html("<strong>Nombre:</strong> " + NombreLocal + "<br>" +"<strong>Correo:</strong> " + CorreoLocal + "<br>" + "<strong>Contraseña:</strong> " + ContraseñaLocal ); 
	about.append(`<a href="#" id="Cerrar">Cerrar Sesión</a>`);
	$("#login").hide(); 
	}else{
	alert("Usuario no registrado"); 	
}

$("#Cerrar").click(function(){
localStorage.clear();
location.reload();  
});


//Acordeon
if(window.location.href.indexOf("about") > -1) {
	$("#acordeon").accordion(); 
}


//Reloj
if(window.location.href.indexOf("reloj") > -1){
setInterval(function(){
var Reloj = moment().format("h:mm:ss a"); 
$("#reloj").html(Reloj); 
},1000)

}

if(window.location.href.indexOf("contacto")> -1){

	$(`form input[name = "FechaNac"]`).datepicker({
		dateFormat: "dd-mm-yyyy"
	});
	 $.validate({
    lang: 'es'
  });
}
});