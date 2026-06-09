let idade = Number(prompt("informe sua idade"));
if (idade >=18){
    alert("de maior");
}
else{
    alert("de menor");
}

let numero = Number(prompt("informe um numero"));
switch (numero){
    case 1: alert("baixo");
    break;
    case 2: alert("medio");
    break;
    case 3: alert("alto");
    break;
    default: alert("numero invalido");
} 

let numero = Number(prompt("informe um numero"));
let resultado = numero%2 === 0 ? "par" : "impar";
alert(resultado);


let podeVotar = Number(prompt("você tem idade para votar?"));
let nacionalidade = String(prompt("qual seu pais?"));
if (podeVotar >=16 && nacionalidade === "brasil"){
    alert("pode votar");
}else {
    alert("não pode votar");
}

