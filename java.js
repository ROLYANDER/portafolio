function encriptar(){
    var textIngresado=document.getElementById("entradaTexto").value.toLowerCase();
    var textEncriptado=textIngresado.replace(/e/gmi,"enter");
    var textEncriptado=textEncriptado.replace(/o/gmi,"ober");
    var textEncriptado=textEncriptado.replace(/i/gmi,"imes");
    var textEncriptado=textEncriptado.replace(/a/gmi,"ai");
    var textEncriptado=textEncriptado.replace(/u/gmi,"ufat");
    
    document.getElementById("muneco").style.display="none";
    document.getElementById("alerta").style.display="none";
    document.getElementById("areaTexto").innerHTML=textEncriptado;
    document.getElementById("copiar").style.display= "show";
    document.getElementById("copiar").style.display= "inherit";
}

function desencriptar(){
    var textIngresado=document.getElementById("entradaTexto").value.toLowerCase();
    var textEncriptado=textIngresado.replace(/enter/gmi,"e");
    var textEncriptado=textEncriptado.replace(/ober/gmi,"o");
    var textEncriptado=textEncriptado.replace(/imes/gmi,"i");
    var textEncriptado=textEncriptado.replace(/ai/gmi,"a");
    var textEncriptado=textEncriptado.replace(/ufat/gmi,"u");
    
    document.getElementById("muneco").style.display="none";
    document.getElementById("alerta").style.display="none";
    document.getElementById("areaTexto").innerHTML=textEncriptado;
    document.getElementById("copiar").style.display= "show";
    document.getElementById("copiar").style.display= "inherit";
}

function copiar(){
    var conteni=document.querySelector("#areaTexto");
    conteni.select();
    document.execCommand("copy")
}