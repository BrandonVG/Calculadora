var display = document.querySelector("#display");
var botonM = document.querySelector("#botonM");
var botonMmas = document.querySelector("#botonMmas");
var botonMmenos = document.querySelector("#botonMmenos");
var botonC = document.querySelector("#botonC");
var botonNueve = document.querySelector("#botonNueve");
var botonOcho = document.querySelector("#botonOcho");
var botonSiete = document.querySelector("#botonSiete");
var botonMas = document.querySelector("#botonSumar");
var botonMenos = document.querySelector("#botonResta");
var botonCuatro = document.querySelector("#botonCuatro");
var botonCinco = document.querySelector("#botonCinco");
var botonSeis = document.querySelector("#botonSeis");
var botonMultiplicacion = document.querySelector("#botonMultiplicacion");
var botonDivision = document.querySelector("#botonDivision");
var botonUno = document.querySelector("#botonUno");
var botonDos = document.querySelector("#botonDos");
var botonTres = document.querySelector("#botonTres");
var botonIgual = document.querySelector("#botonIgual");
var botonCero = document.querySelector("#botonCero");
var botonPunto = document.querySelector("#botonPunto");
var memoria = JSON.parse(localStorage.getItem("memoria"));

botonUno.addEventListener("click",()=>{
    if (display.textContent == "0"){
        display.textContent = "1";
    }
    else if (display.textContent.length != 15){
        display.textContent=display.textContent+ "1";
    }
});
botonDos.addEventListener("click",()=>{
    if (display.textContent == "0"){
        display.textContent = "2";
    }
    else if (display.textContent.length != 15){
        display.textContent+= "2";
    }
});
botonTres.addEventListener("click",()=>{
    if (display.textContent == "0"){
        display.textContent = "3";
    }
    else if (display.textContent.length != 15){
        display.textContent+= "3";
    }
});
botonCuatro.addEventListener("click",()=>{
    if (display.textContent == "0"){
        display.textContent = "4";
    }
    else if (display.textContent.length != 15){
        display.textContent+= "4";
    }
});
botonCinco.addEventListener("click",()=>{
    if (display.textContent == "0"){
        display.textContent = "5";
    }
    else if (display.textContent.length != 15){
        display.textContent+= "5";
    }
});
botonSeis.addEventListener("click",()=>{
    if (display.textContent == "0"){
        display.textContent = "6";
    }
    else if (display.textContent.length != 15){
        display.textContent+= "6";
    }
});
botonSiete.addEventListener("click",()=>{
    if (display.textContent == "0"){
        display.textContent = "7";
    }
    else if (display.textContent.length != 15){
        display.textContent+= "7";
    }
});
botonOcho.addEventListener("click",()=>{
    if (display.textContent == "0"){
        display.textContent = "8";
    }
    else if (display.textContent.length != 15){
        display.textContent+= "8";
    }
});
botonNueve.addEventListener("click",()=>{
    if (display.textContent == "0"){
        display.textContent = "9";
    }
    else if (display.textContent.length != 15){
        display.textContent+= "9";
    }
});
botonCero.addEventListener("click",()=>{
    if (display.textContent == "0"){
        display.textContent = "0";
    }
    else if (display.textContent.length != 15){
        display.textContent+= "0";
    }
});
botonMas.addEventListener("click",()=>{
    var ultimo = display.textContent.substr(display.textContent.length - 1);
    if("+" == ultimo || "-" == ultimo || "*" == ultimo || "/" == ultimo){
        display.textContent = display.textContent.slice(0,display.textContent.length-1) + "+";
    }
    else if (display.textContent.length != 15) {
        display.textContent+="+";
    }
});
botonMenos.addEventListener("click",()=>{
    var ultimo = display.textContent.substr(display.textContent.length - 1);
    if("+" == ultimo || "-" == ultimo || "*" == ultimo || "/" == ultimo){
        display.textContent = display.textContent.slice(0,display.textContent.length-1) + "-";
    }
    else if (display.textContent.length != 15) {
        display.textContent+="-";
    }
});
botonMultiplicacion.addEventListener("click",()=>{
    var ultimo = display.textContent.substr(display.textContent.length - 1);
    if("+" == ultimo || "-" == ultimo || "*" == ultimo || "/" == ultimo){
        display.textContent = display.textContent.slice(0,display.textContent.length-1) + "*";
    }
    else if (display.textContent.length != 15) {
        display.textContent+="*";
    }
});
botonDivision.addEventListener("click",()=>{
    var ultimo = display.textContent.substr(display.textContent.length - 1);
    if("+" == ultimo || "-" == ultimo || "*" == ultimo || "/" == ultimo){
        display.textContent = display.textContent.slice(0,display.textContent.length-1) + "/";
    }
    else if (display.textContent.length != 15) {
        display.textContent+="/";
    }
});
botonPunto.addEventListener("click",()=>{
    display.textContent += ".";
});
botonC.addEventListener("click",()=>{
    display.textContent="0";
});
botonIgual.addEventListener("click",()=>{
    resultado = eval(display.textContent);
    if(resultado % 1 === 0){
        display.textContent= parseInt(resultado);
    }
    else{
        display.textContent=resultado.toFixed(9);
    }
});
botonMmas.addEventListener("click",()=>{
    var memoria = JSON.parse(localStorage.getItem("memoria"));
    if (memoria == null){
        memoria = [];
    }
    if (memoria.length == 0){
        var objeto = {"numero":display.textContent}
        memoria.push(objeto);
        localStorage.setItem("memoria",JSON.stringify(memoria));
    }
    else{
        var numeroMemoria = parseFloat(memoria[0].numero);
        var suma = parseFloat(display.textContent) + numeroMemoria;
        var objeto = {"numero":suma}
        memoria[0] = objeto;
        localStorage.setItem("memoria",JSON.stringify(memoria));
        display.textContent = suma;
    }
});
botonM.addEventListener("click",()=>{
    var memoria = JSON.parse(localStorage.getItem("memoria"));
    if (memoria == null){
        display.textContent = 0;
    }
    else{
        display.textContent= memoria[0].numero;
    }
});
botonMmenos.addEventListener("click",()=>{
    var memoria = JSON.parse(localStorage.getItem("memoria"));
    if (memoria == null){
        display.textContent = 0;
    }
    else if (display.textContent == 0){
        memoria = [];
        localStorage.clear();
    }
    else{
        var numeroMemoria = parseFloat(memoria[0].numero);
        var resta =numeroMemoria - parseFloat(display.textContent);
        var objeto = {"numero":resta}
        memoria[0] = objeto;
        localStorage.setItem("memoria",JSON.stringify(memoria));
        display.textContent = resta;
    }
})