/*Crie uma variável com uma nota de 0 a 100. Use if/else para classificar: A (>= 90), B (>= 80), C (< 80). Exiba a classificação.
let nota = Number(prompt("informe uma nota"));
if (nota>=90){
    alert("A");
}
else if(nota>=80){
    alert("B");
}
else {
    alert("C");
}   */

/*Crie uma variável com número de 1 a 7. Use switch para exibir o nome do dia correspondente (1 = Domingo, 2 = Segunda...). Caso inválido, exiba "Dia inválido".

let numero = Number(prompt("informe um número de 1 a 7"));
switch (numero) {
    case 1: alert("Domingo");
    break;
    case 2: alert("Segunda");
    break;
    case 3: alert("Terça");
    break;
    case 4: alert("Quarta");
    break;
    case 5: alert("Quinta");
    break;
    case 6: alert("Sexta");
    break;
    case 7: alert("Sábado");
    break;
    default: alert("Dia inválido");
}*/

/*Crie uma variável com uma temperatura. Use o operador ternário para exibir "Quente" se maior que 25, ou "Frio" caso contrário.

let temperatura = Number(prompt("informe a temperatura"));     
let temp = temperatura > 25 ? "Quente" : "Frio";
alert(temp); */

/*Crie duas variáveis: maior de idade (boolean) e tem carteira (boolean). Use if com && para verificar se a pessoa pode dirigir (maior de idade E tem carteira).

let maiorIdade = (prompt("informe false para menor e true para maior idade"))=== "true";
let carteira = (prompt("tem carteira de motorista"))=== "true";
if (maiorIdade && carteira){
    alert("pode dirigir");
}else {
    alert("não pode dirigir");
}

 Crie uma variável com um número. Verifique se ele está entre 10 e 20 (inclusive). Exiba "Dentro" ou "Fora" do intervalo.
let numero = Number(prompt("informe um número"));
if (numero >= 10 && numero <= 20) {
    alert("Dentro");
} else {
    alert("Fora");
}
    Você tem um if/else que verifica cores. Reescreva-o usando switch. Cores: "vermelho" → "Pare", "amarelo" → "Atenção", "verde" → "Siga".
    let cor = prompt("informe uma cor do semaforo").toLowerCase();
    switch (cor){
        case "vermelho":alert("pare");
        break;
        case "amarelo":alert("atenção");
        break;
        case "verde":alert("siga");
        break;
        default:alert("cor inválida");
    }*/