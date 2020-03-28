var opcao = parseInt(prompt(
    "1) Pedra" + "\n" +
    "2) Papel" + "\n" +
    "3) Tesoura" + "\n"
));

var num = parseInt((Math.random()*100)%3) + 1;

if(num == opcao) alert("EMPATE");
else if(num == 1 && opcao == 3) alert("COMPUTADOR");
else if(num == 3 && opcao == 2) alert("COMPUTADOR");
else if(num == 2 && opcao == 1) alert("COMPUTADOR");
else alert("VOCÊ GANHOU");
 
