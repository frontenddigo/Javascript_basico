//operadores aritimeticas//

// calculadora simples

let primeiroNumero = 100;
let segundoNumero = 240;

console.log(primeiroNumero+segundoNumero);
console.log(primeiroNumero-segundoNumero);
console.log(primeiroNumero*segundoNumero);
console.log(primeiroNumero/segundoNumero);

// resto da divisao

let numero = 130;
let resultado = numero%2===0 ? "par" : "impar"
console.log(resultado)

// ptencia
console.log(primeiroNumero*primeiroNumero)
console.log(primeiroNumero*primeiroNumero*primeiroNumero)

//converao de temperatura

let celsius = 23;
let fr = ((celsius*(9/5)+32));

console.log(fr);

// media
let nota1 = 8;
let nota2 = 9.5;
let nota3 = 5;

let media = ((nota1+nota2+nota3)/3);

console.log(media.toFixed(2));

// calculo troco

let pago = 100;
let preco = 75;
let troco = pago-preco;
console.log(troco);

// operador de comparacao

// verdadeiro ou falso
let valor1 = 94;
let valor2 = '94';
console.log (valor1==valor2);
console.log (valor2===valor1);

//maior ou menor 
let maior = 10;
let menor = 5;
let resultado2 = maior>menor ? "maior" : "menor";
console.log (resultado2);

//aprovado reprovado
let notaFinal = 8;
let resultado3 = notaFinal>=7 ? "aprovado" : "reprovado";

console.log(resultado3)

//verificação de idade
let idade1 = 16
let idadeMaior = idade1>=18 ? "de maior" : "de menor"

console.log(idadeMaior);



//comparacao de string
let string1 = "Olá"
let string2 = "olá"

let resultado5 = string1===string2 ? "nomes sao iguais" : "nomes sao diferentes";

console.log(resultado5);


/*function situacaoAluno (){
  let nota4 = Number(prompt("informe a nota:"))
  let nota5 = Number(prompt("informe a nota:"))
   let nota6 = Number(prompt("informe a nota:"))
    let media1 = (nota4+nota5+nota6)/3; 

    if(media1 < 6){
        alert("Aluno reprovado")
    }
    else if(media1 >=6 && media1 <7 ){
      alert("Aluno em exame")
    }
    else {
        alert("Aluno aprovado")
    }}
    situacaoAluno();*/

/*function parEIntervalo() {
    let numero = Number(prompt("Informe o número:")); 
    
    if (numero > 0 && numero <= 100) {
        if (numero % 2 === 0) {
            alert("O número está no intervalo de 0 a 100, e é par.");
        } else {
            alert("O número está no intervalo de 0 a 100, e é ímpar.");
        }
    } else {
        alert("Fora do intervalo.");
    }
}
parEIntervalo();*/

/*function classificacaoNota(){
    let nota7 = Number(prompt("Informe a nota:"));

    if (nota7 >= 9 && nota7 <= 10) {
        alert("aprovado com sucesso");
    } else if (nota7 >= 7) {
        alert("aprovado");
    } else if (nota7 >= 5) {
        alert("recuperação");
    } else {
        alert("reprovado");
    }
}
classificacaoNota();
*/
/*function calcularIMC(){
    let peso = Number(prompt("Informe seu peso:"));
    let altura = Number(prompt("Informe sua altura:"));
    
    let imc = peso / (altura **2);
    if (imc < 18.5) {
        alert("Abaixo do peso");
    } else if (imc <= 25) {
        alert("Peso normal");
    } else if (imc <= 30) {
        alert("Sobrepeso");
    } else if (imc <= 35) {
        alert("Obesidade");
    }
}

calcularIMC();*/