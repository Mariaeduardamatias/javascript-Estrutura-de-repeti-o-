// 16) Exibir os números de 1 a 10 usando o loop "do-while".
let i1DoWhile = 1;
let result1DoWhile = "";
do {
  result1DoWhile += i1DoWhile + "\n";
  i1DoWhile++;
} while (i1DoWhile <= 10);
alert(result1DoWhile);
alert("Próximo exercício!");

// 17) Calcular a soma dos números de 1 a 100 usando o loop "do-while".
let soma2DoWhile = 0;
let j2DoWhile = 1;
do {
  soma2DoWhile += j2DoWhile;
  j2DoWhile++;
} while (j2DoWhile <= 100);
alert("A soma dos números de 1 a 100 é:" + soma2DoWhile);
alert("Próximo exercício!");

// 18) Exibir os números pares de 1 a 50 usando o loop "do-while".
let k3DoWhile = 1;
let result3DoWhile = "";
do {
  if (k3DoWhile % 2 === 0) {
    result3DoWhile += k3DoWhile + "\n";
  }
  k3DoWhile++;
} while (k3DoWhile <= 50);
alert(result3DoWhile);
alert("Próximo exercício!");

// 19) Ler 5 números inteiros e exibir a média aritmética dos valores lidos usando o loop "do-while".
let contador4DoWhile = 0;
let somaNumeros4DoWhile = 0;
do {
  let numero4DoWhile = parseInt(prompt("Digite um número inteiro:"));
  somaNumeros4DoWhile += numero4DoWhile;
  contador4DoWhile++;
} while (contador4DoWhile < 5);
let media4DoWhile = somaNumeros4DoWhile / 5;
alert("A média dos números lidos é:" + media4DoWhile);
alert("Próximo exercício!");

// 20) Ler um número inteiro e exibir a tabuada desse número até o décimo valor usando o loop "do-while".
let numeroTabuada5DoWhile = parseInt(prompt("Digite um número inteiro:"));
let indice5DoWhile = 1;
let result5DoWhile = "";
do {
  result5DoWhile += numeroTabuada5DoWhile + " x " + indice5DoWhile + " = " + (numeroTabuada5DoWhile * indice5DoWhile) + "\n";
  indice5DoWhile++;
} while (indice5DoWhile <= 10);
alert(result5DoWhile);
alert("Próximo exercício!");

// 21) Ler um número inteiro positivo e exibir todos os divisores desse número usando o loop "do-while".
let numeroDivisores6DoWhile = parseInt(prompt("Digite um número inteiro positivo:"));
let divisor6DoWhile = 1;
let result6DoWhile = "Os divisores de " + numeroDivisores6DoWhile + " são:\n";
do {
  if (numeroDivisores6DoWhile % divisor6DoWhile === 0) {
    result6DoWhile += divisor6DoWhile + "\n";
  }
  divisor6DoWhile++;
} while (divisor6DoWhile <= numeroDivisores6DoWhile);
alert(result6DoWhile);
alert("Próximo exercício!");

// 22) Ler um número inteiro e exibir se ele é um número primo usando o loop "do-while".
let numeroPrimo7DoWhile = parseInt(prompt("Digite um número inteiro:"));
let divisorPrimo7DoWhile = 2;
let ehPrimo7DoWhile = true;
do {
  if (numeroPrimo7DoWhile % divisorPrimo7DoWhile === 0) {
    ehPrimo7DoWhile = false;
    break;
  }
  divisorPrimo7DoWhile++;
} while (divisorPrimo7DoWhile < numeroPrimo7DoWhile);
if (ehPrimo7DoWhile) {
  alert(numeroPrimo7DoWhile + " é um número primo.");
} else {
  alert(numeroPrimo7DoWhile + " não é um número primo.");
}
alert("Próximo exercício!");

// 23) Ler um número inteiro e exibir a sequência de Fibonacci até o número lido usando o loop "do-while".
let numeroFibonacci8DoWhile = parseInt(prompt("Digite um número inteiro:"));
let primeiroFibonacci8DoWhile = 0;
let segundoFibonacci8DoWhile = 1;
let sequenciaFibonacci8DoWhile = "0, 1";
do {
  let proximoFibonacci8DoWhile = primeiroFibonacci8DoWhile + segundoFibonacci8DoWhile;
  if (proximoFibonacci8DoWhile > numeroFibonacci8DoWhile) {
    break;
  }
  sequenciaFibonacci8DoWhile += ", " + proximoFibonacci8DoWhile;
  primeiroFibonacci8DoWhile = segundoFibonacci8DoWhile;
  segundoFibonacci8DoWhile = proximoFibonacci8DoWhile;
} while (true);
alert("Sequência de Fibonacci até " + numeroFibonacci8DoWhile + ": " + sequenciaFibonacci8DoWhile);
alert("Próximo exercício!");

// 24) Ler o nome e a idade de 5 pessoas e exibir a média das idades usando o loop "do-while".
let somaIdades9DoWhile = 0;
let contadorIdades9DoWhile = 0;
do {
  let nomePessoa9DoWhile = prompt("Digite o nome da pessoa:");
  let idadePessoa9DoWhile = parseInt(prompt("Digite a idade de " + nomePessoa9DoWhile + ":"));
  somaIdades9DoWhile += idadePessoa9DoWhile;
  contadorIdades9DoWhile++;
} while (contadorIdades9DoWhile < 5);
let mediaIdades9DoWhile = somaIdades9DoWhile / 5;
alert("A média das idades das pessoas é:" + mediaIdades9DoWhile);
alert("Próximo exercício!");

// 25) Exibir os primeiros 20 números da sequência de Fibonacci usando o loop "do-while".
let contadorFibonacci10DoWhile = 0;
let primeiroFibonacci10DoWhile = 0;
let segundoFibonacci10DoWhile = 1;
let result10DoWhile = "Os primeiros 20 números da sequência de Fibonacci são:\n";
do {
  result10DoWhile += primeiroFibonacci10DoWhile + "\n";
  let proximoFibonacci10DoWhile = primeiroFibonacci10DoWhile + segundoFibonacci10DoWhile;
  primeiroFibonacci10DoWhile = segundoFibonacci10DoWhile;
  segundoFibonacci10DoWhile = proximoFibonacci10DoWhile;
  contadorFibonacci10DoWhile++;
} while (contadorFibonacci10DoWhile < 20);
alert(result10DoWhile);
alert("Próximo exercício!");

// 26) Ler um número inteiro e exibir a soma de todos os números pares entre 1 e o número lido usando o loop "do-while".
let numeroSomaPares11DoWhile = parseInt(prompt("Digite um número inteiro:"));
let somaPares11DoWhile = 0;
let contadorPares11DoWhile = 2;
do {
  somaPares11DoWhile += contadorPares11DoWhile;
  contadorPares11DoWhile += 2;
} while (contadorPares11DoWhile <= numeroSomaPares11DoWhile);
alert("A soma dos números pares até " + numeroSomaPares11DoWhile + " é:" + somaPares11DoWhile);
alert("Próximo exercício!");

// 27) Exibir os números ímpares de 1 a 50 usando o loop "do-while".
let numeroImpar12DoWhile = 1;
let result12DoWhile = "Os números ímpares de 1 a 50 são:\n";
do {
  result12DoWhile += numeroImpar12DoWhile + "\n";
  numeroImpar12DoWhile += 2;
} while (numeroImpar12DoWhile <= 50);
alert(result12DoWhile);
alert("Próximo exercício!");

// 28) Ler um número inteiro e exibir os seus dígitos separadamente usando o loop "do-while".
let numeroDigitos13DoWhile = prompt("Digite um número inteiro:");
let indiceDigito13DoWhile = 0;
let result13DoWhile = "Os dígitos do número " + numeroDigitos13DoWhile + " são:\n";
do {
  result13DoWhile += numeroDigitos13DoWhile.charAt(indiceDigito13DoWhile) + "\n";
  indiceDigito13DoWhile++;
} while (indiceDigito13DoWhile < numeroDigitos13DoWhile.length);
alert(result13DoWhile);
alert("Próximo exercício!");

// 29) Calcular o fatorial de um número inteiro inserido pelo usuário usando o loop "do-while".
let numeroFatorial14DoWhile = parseInt(prompt("Digite um número inteiro para calcular o fatorial:"));
let fatorial14DoWhile = 1;
let contadorFatorial14DoWhile = 1;
do {
  fatorial14DoWhile *= contadorFatorial14DoWhile;
  contadorFatorial14DoWhile++;
} while (contadorFatorial14DoWhile <= numeroFatorial14DoWhile);
alert("O fatorial de " + numeroFatorial14DoWhile + " é:" + fatorial14DoWhile);
alert("Próximo exercício!");

// 30) Ler o nome e a idade de várias pessoas usando o loop "do-while" até que o nome "fim" seja informado. Ao final, exibir a média das idades.
let somaIdades15DoWhile = 0;
let contadorIdades15DoWhile = 0;
let nomePessoa15DoWhile;
do {
  nomePessoa15DoWhile = prompt("Digite o nome da pessoa (ou 'fim' para encerrar):");
  if (nomePessoa15DoWhile.toLowerCase() !== "fim") {
    let idadePessoa15DoWhile = parseInt(prompt("Digite a idade de " + nomePessoa15DoWhile + ":"));
    somaIdades15DoWhile += idadePessoa15DoWhile;
    contadorIdades15DoWhile++;
  }
} while (nomePessoa15DoWhile.toLowerCase() !== "fim");
if (contadorIdades15DoWhile > 0) {
  let mediaIdades15DoWhile = somaIdades15DoWhile / contadorIdades15DoWhile;
  alert("A média das idades das pessoas é:" + mediaIdades15DoWhile);
} else {
  alert("Nenhuma idade foi informada.");
}
