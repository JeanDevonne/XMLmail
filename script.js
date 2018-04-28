//XML uso de XMLHttpRequest (AJAX)

//1.- Creamos el objeto XMLHttpRequest para intercambiar datos con el servidor en formato Texto, Json o XML.
//  Tengamos en cuenta que los archivos XML se parsean automáticamente por el objeto XMLHttpRequest y son accesibles por el objeto DOM.

//Nota, ubicar este proyecto en el Servidor Local.

//Este IF valida si el navegador soporta XMLHttpRequest
if (window.XMLHttpRequest) {
    //Código específico para los navegadores IE7+, Firefox, Chrome, Opera y Safari.
    var xmlhttp = new XMLHttpRequest();
}
else {
    //Código específico para IE6, IE5
    var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

//Abrimos el archivo XML email.xml en modo sincrono (false)
xmlhttp.open("GET", "email.xml", false);//El método open admite 

//Lanzamos la consulta HTTP al servidor
xmlhttp.send();

//Creación  del documento XML en memoria
var xmlDoc = xmlhttp.responseXML;

//Es posible conocer si la peticion se ejecuto correctamente haciendo un IF
// if (xmlhttp.status==200) {
//     alert("Petición ejecutada correctamente");
// }

//Mostramos el campo Remitente
document.getElementById("de").innerHTML = xmlDoc.getElementsByTagName("de")[0].childNodes[0].nodeValue;
//Mostramos el campo Remitente
document.getElementById("a").innerHTML = xmlDoc.getElementsByTagName("a")[0].childNodes[0].nodeValue;
//Mostramos el campo Remitente
document.getElementById("prioridad").innerHTML = xmlDoc.getElementsByTagName("prioridad")[0].childNodes[0].nodeValue;
//Mostramos el campo Remitente
document.getElementById("asunto").innerHTML = xmlDoc.getElementsByTagName("asunto")[0].childNodes[0].nodeValue;
//Mostramos el campo Remitente
document.getElementById("mensaje").innerHTML = xmlDoc.getElementsByTagName("mensaje")[0].childNodes[0].nodeValue;

