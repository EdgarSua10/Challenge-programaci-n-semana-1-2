
/* Reglas de encriptación:
"e" es convertido para "enter"
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras
*/

/* Reglas de desencriptación:
"enter" es convertido para "e"
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras
*/
var botonEncriptar=document.querySelector("#btn-encriptar");
var mostrarMensaje=document.querySelector(".mensaje");
botonEncriptar.addEventListener("click",function(event){
  event.preventDefault();

  var datosEncriptar=document.querySelector("#input")
  let encriptar=input.value;

  let textoModificado=encriptar.replaceAll('e','enter')
  .replaceAll('i','imes')
  .replaceAll('a','ai')
  .replaceAll('o','ober')
  .replaceAll('u','ufat');
  document.getElementById("msg").value=textoModificado;

});








var botonDesencriptar=document.querySelector("#btn-desencriptar");

botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();

  var datosDesencriptar=document.querySelector("#input")
  var desencriptar=input.value;
  let textoModificado=desencriptar.replaceAll('enter','e')
  .replaceAll('imes','i')
  .replaceAll('ai','a')
  .replaceAll('ober','o')
  .replaceAll('ufat','u');
  document.getElementById("msg").value=textoModificado;




});


function copiar() {
  var copiarTexto = document.querySelector("#msg");
  //var copy
  copiarTexto.select();
  document.execCommand("copy");
}

document.querySelector("#btn-copy").addEventListener("click", copiar);
