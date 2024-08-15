//criara uma função com o nome inserir."num"é de numero
function inserir(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function limpa(){
    document.getElementById('resultado').innerHTML = ' ';
}
function apagar(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML=eval(resultado)
}