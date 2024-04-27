// 31) Exibir os números de 1 a 10 usando o loop "for".
let result1For = "";
for (let i1For = 1; i1For <= 10; i1For++) {
  result1For += i1For + "\n";
}
alert(result1For);
alert("Próximo exercício!");

// 32) Calcular a soma dos números de 1 a 100 usando o loop "for".
let soma2For = 0;
for (let j2For = 1; j2For <= 100; j2For++) {
  soma2For += j2For;
}
alert("A soma dos números de 1 a 100 é:" + soma2For);
alert("Próximo exercício!");

// 33) Exibir os números pares de 1 a 50 usando o loop "for".
let result3For = "";
for (let k3For = 1; k3For <= 50; k3For++) {
  if (k3For % 2 === 0) {
    result3For += k3For + "\n";
  }
}
alert(result3For);
alert("Próximo exercício!");

// 34) Ler 5 números inteiros e exibir a média aritmética dos valores lidos usando o loop "for".
let somaNumeros4For = 0;
for (let contador4For = 0; contador4For < 5; contador4For++) {
  let numero4For = parseInt(prompt("Digite um número inteiro:"));
  somaNumeros4For += numero4For;
}
let media4For = somaNumeros4For / 5;
alert("A média dos números lidos é:" + media4For);
alert("Próximo exercício!");

// 35) Ler um número inteiro e exibir a tabuada desse número até o décimo valor usando o loop "for".
let numeroTabuada5For = parseInt(prompt("Digite um número inteiro:"));
let result5For = "";
for (let indice5For = 1; indice5For <= 10; indice5For++) {
  result5For += numeroTabuada5For + " x " + indice5For + " = " + (numeroTabuada5For * indice5For) + "\n";
}
alert(result5For);
alert("Próximo exercício!");

// 36) Ler um número inteiro positivo e exibir todos os divisores desse número usando o loop "for".
let numeroDivisores6For = parseInt(prompt("Digite um número inteiro positivo:"));
let result6For = "Os divisores de " + numeroDivisores6For + " são:\n";
for (let divisor6For = 1; divisor6For <= numeroDivisores6For; divisor6For++) {
  if (numeroDivisores6For % divisor6For === 0) {
    result6For += divisor6For + "\n";
  }
}
alert(result6For);
alert("Próximo exercício!");

// 37) Ler um número inteiro e exibir se ele é um número primo usando o loop "for".
let numeroPrimo7For = parseInt(prompt("Digite um número inteiro:"));
let ehPrimo7For = true;
for (let divisorPrimo7For = 2; divisorPrimo7For < numeroPrimo7For; divisorPrimo7For++) {
  if (numeroPrimo7For % divisorPrimo7For === 0) {
    ehPrimo7For = false;
    break;
  }
}
if (ehPrimo7For) {
  alert(numeroPrimo7For + " é um número primo.");
} else {
  alert(numeroPrimo7For + " não é um número primo.");
}
alert("Próximo exercício!");

// 38) Ler um número inteiro e exibir a sequência de Fibonacci até o número lido usando o loop "for".
let numeroFibonacci8For = parseInt(prompt("Digite um número inteiro:"));
let primeiroFibonacci8For = 0;
let segundoFibonacci8For = 1;
let sequenciaFibonacci8For = "0, 1";
for (let i8For = 0; primeiroFibonacci8For + segundoFibonacci8For <= numeroFibonacci8For; i8For++) {
  let proximoFibonacci8For = primeiroFibonacci8For + segundoFibonacci8For;
  sequenciaFibonacci8For += ", " + proximoFibonacci8For;
  primeiroFibonacci8For = segundoFibonacci8For;
  segundoFibonacci8For = proximoFibonacci8For;
}
alert("Sequência de Fibonacci até " + numeroFibonacci8For + ": " + sequenciaFibonacci8For);
alert("Próximo exercício!");

// 39) Ler o nome e a idade de 5 pessoas e exibir a média das idades usando o loop "for".
let somaIdades9For = 0;
for (let contadorIdades9For = 0; contadorIdades9For < 5; contadorIdades9For++) {
  let nomePessoa9For = prompt("Digite o nome da pessoa:");
  let idadePessoa9For = parseInt(prompt("Digite a idade de " + nomePessoa9For + ":"));
  somaIdades9For += idadePessoa9For;
}
let mediaIdades9For = somaIdades9For / 5;
alert("A média das idades das pessoas é:" + mediaIdades9For);
alert("Próximo exercício!");

// 40) Exibir os primeiros 20 números da sequência de Fibonacci usando o loop "for".
let primeiroFibonacci10For = 0;
let segundoFibonacci10For = 1;
let result10For = "Os primeiros 20 números da sequência de Fibonacci são:\n";
for (let contadorFibonacci10For = 0; contadorFibonacci10For < 20; contadorFibonacci10For++) {
  result10For += primeiroFibonacci10For + "\n";
  let proximoFibonacci10For = primeiroFibonacci10For + segundoFibonacci10For;
  primeiroFibonacci10For = segundoFibonacci10For;
  segundoFibonacci10For = proximoFibonacci10For;
}
alert(result10For);
alert("Próximo exercício!");

// 41) Ler um número inteiro e exibir a soma de todos os números pares entre 1 e o número lido usando o loop "for".
let numeroSomaPares11For = parseInt(prompt("Digite um número inteiro:"));
let somaPares11For = 0;
for (let contadorPares11For = 2; contadorPares11For <= numeroSomaPares11For; contadorPares11For += 2) {
  somaPares11For += contadorPares11For;
}
alert("A soma dos números pares até " + numeroSomaPares11For + " é:" + somaPares11For);
alert("Próximo exercício!");

// 42) Exibir os números ímpares de 1 a 50 usando o loop "for".
let result12For = "Os números ímpares de 1 a 50 são:\n";
for (let numeroImpar12For = 1; numeroImpar12For <= 50; numeroImpar12For += 2) {
  result12For += numeroImpar12For + "\n";
}
alert(result12For);
alert("Próximo exercício!");

// 43) Ler um número inteiro e exibir os seus dígitos separadamente usando o loop "for".
let numeroDigitos13For = prompt("Digite um número inteiro:");
let result13For = "Os dígitos do número " + numeroDigitos13For + " são:\n";
for (let indiceDigito13For = 0; indiceDigito13For < numeroDigitos13For.length; indiceDigito13For++) {
  result13For += numeroDigitos13For.charAt(indiceDigito13For) + "\n";
}
alert(result13For);
alert("Próximo exercício!");

// 44) Calcular o fatorial de um número inteiro inserido pelo usuário usando o loop "for".
let numeroFatorial14For = parseInt(prompt("Digite um número inteiro para calcular o fatorial:"));
let fatorial14For = 1;
for (let contadorFatorial14For = 1; contadorFatorial14For <= numeroFatorial14For; contadorFatorial14For++) {
  fatorial14For *= contadorFatorial14For;
}
alert("O fatorial de " + numeroFatorial14For + " é:" + fatorial14For);
alert("Próximo exercício!");

// 45) Ler o nome e a idade de várias pessoas usando o loop "for" até que o nome "fim" seja informado. Ao final, exibir a média das idades.
let somaIdades15For = 0;
let contadorIdades15For = 0;
let nomePessoa15For;
do {
  nomePessoa15For = prompt("Digite o nome da pessoa (ou 'fim' para encerrar):");
  if (nomePessoa15For.toLowerCase() !== "fim") {
    let idadePessoa15For = parseInt(prompt("Digite a idade de " + nomePessoa15For + ":"));
    somaIdades15For += idadePessoa15For;
    contadorIdades15For++;
  }
} while (nomePessoa15For.toLowerCase() !== "fim");

if (contadorIdades15For > 0) {
  let mediaIdades15For = somaIdades15For / contadorIdades15For;
  alert("A média das idades das pessoas é:" + mediaIdades15For);
} else {
  alert("Nenhuma idade foi informada.");
}
