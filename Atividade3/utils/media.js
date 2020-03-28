var nome = prompt("nome do aluno");
var notas = prompt("notas *(separadas por vírgula)");

var cont = 0;
notas.split(",").forEach(function(nota){
    cont += parseFloat(nota);
});

confirm(nome +" "+ "nota final: "+ cont/3);