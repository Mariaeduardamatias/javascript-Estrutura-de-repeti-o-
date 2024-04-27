// 1) Exibir os números de 1 a 10 usando o loop "while".
let count1 = 1;
let result1 = "";
while (count1 <= 10) {
result1 += count1 + "\n";
count1++;
}
alert(result1);
alert("Próximo exercício!");

// 2) Calcular a soma dos números de 1 a 100 usando o loop "while".
let sum2 = 0;
let count2 = 1;
while (count2 <= 100) {
sum2 += count2;
count2++;
}
alert("A soma dos números de 1 a 100 é: " + sum2);
alert("Próximo exercício!");

// 3) Exibir os números pares de 1 a 50 usando o loop "while".
let count3 = 1;
let result3 = "";
while (count3 <= 50) {
if (count3 % 2 === 0) {
result3 += count3 + "\n";
}
count3++;
}
alert(result3);
alert("Próximo exercício!");

// 4) Ler 5 números inteiros e exibir a média aritmética dos valores lidos usando o loop "while".
let counter4 = 0;
let sumNumbers4 = 0;
while (counter4 < 5) {
let number4 = parseInt(prompt("Digite um número inteiro:"));
sumNumbers4 += number4;
counter4++;
}
let average4 = sumNumbers4 / 5;
alert("A média dos números lidos é: " + average4);
alert("Próximo exercício!");

// 5) Ler um número inteiro e exibir a tabuada desse número até o décimo valor usando o loop "while".
let numberTable5 = parseInt(prompt("Digite um número inteiro:"));
let index5 = 1;
let result5 = "";
while (index5 <= 10) {
result5 += numberTable5 + " x " + index5 + " = " + (numberTable5 * index5) + "\n";
index5++;
}
alert(result5);
alert("Próximo exercício!");

// 6) Ler um número inteiro positivo e exibir todos os divisores desse número usando o loop "while".
let numberDivisors6 = parseInt(prompt("Digite um número inteiro positivo:"));
let divisor6 = 1;
let result6 = "Os divisores de " + numberDivisors6 + " são:\n";
while (divisor6 <= numberDivisors6) {
if (numberDivisors6 % divisor6 === 0) {
result6 += divisor6 + "\n";
}
divisor6++;
}
alert(result6);
alert("Próximo exercício!");

// 7) Ler um número inteiro e exibir se ele é um número primo usando o loop "while".
let numberPrime7 = parseInt(prompt("Digite um número inteiro:"));
let divisorPrime7 = 2;
let isPrime7 = true;
while (divisorPrime7 < numberPrime7) {
if (numberPrime7 % divisorPrime7 === 0) {
isPrime7 = false;
break;
}
divisorPrime7++;
}
if (isPrime7) {
alert(numberPrime7 + " é um número primo.");
} else {
alert(numberPrime7 + " não é um número primo.");
}
alert("Próximo exercício!");

// 8) Ler um número inteiro e exibir a sequência de Fibonacci até o número lido usando o loop "while".
let numberFibonacci8 = parseInt(prompt("Digite um número inteiro:"));
let firstFibonacci8 = 0;
let secondFibonacci8 = 1;
let sequenceFibonacci8 = "0, 1";
while (firstFibonacci8 + secondFibonacci8 <= numberFibonacci8) {
let nextFibonacci8 = firstFibonacci8 + secondFibonacci8;
sequenceFibonacci8 += ", " + nextFibonacci8;
firstFibonacci8 = secondFibonacci8;
secondFibonacci8 = nextFibonacci8;
}
alert("Sequência de Fibonacci até " + numberFibonacci8 + ": " + sequenceFibonacci8);
alert("Próximo exercício!");

// 9) Ler o nome e a idade de 5 pessoas e exibir a média das idades usando o loop "while".
let sumAges9 = 0;
let countAges9 = 0;
while (countAges9 < 5) {
let namePerson9 = prompt("Digite o nome da pessoa:");
let agePerson9 = parseInt(prompt("Digite a idade de " + namePerson9 + ":"));
sumAges9 += agePerson9;
countAges9++;
}
let averageAges9 = sumAges9 / 5;
alert("A média das idades das pessoas é: " + averageAges9);
alert("Próximo exercício!");

// 10) Exibir os primeiros 20 números da sequência de Fibonacci usando o loop "while".
let countFibonacci10 = 0;
let firstFibonacci10 = 0;
let secondFibonacci10 = 1;
let result10 = "Os primeiros 20 números da sequência de Fibonacci são:\n";
while (countFibonacci10 < 20) {
result10 += firstFibonacci10 + "\n";
let nextFibonacci10 = firstFibonacci10 + secondFibonacci10;
firstFibonacci10 = secondFibonacci10;
secondFibonacci10 = nextFibonacci10;
countFibonacci10++;
}
alert(result10);
alert("Próximo exercício!");

// 11) Ler um número inteiro e exibir a soma de todos os números pares entre 1 e o número lido usando o loop "while".
let numberSumPairs11 = parseInt(prompt("Digite um número inteiro:"));
let sumPairs11 = 0;
let countPairs11 = 2;
while (countPairs11 <= numberSumPairs11) {
sumPairs11 += countPairs11;
countPairs11 += 2;
}
alert("A soma dos números pares até " + numberSumPairs11 + " é: " + sumPairs11);
alert("Próximo exercício!");

// 12) Exibir os números ímpares de 1 a 50 usando o loop "while".
let numberOdd12 = 1;
let result12 = "Os números ímpares de 1 a 50 são:\n";
while (numberOdd12 <= 50) {
result12 += numberOdd12 + "\n";
numberOdd12 += 2;
}
alert(result12);
alert("Próximo exercício!");

// 13) Ler um número inteiro e exibir os seus dígitos separadamente usando o loop "while".
let numberDigits13 = prompt("Digite um número inteiro:");
let indexDigit13 = 0;
let result13 = "Os dígitos do número " + numberDigits13 + " são:\n";
while (indexDigit13 < numberDigits13.length) {
result13 += numberDigits13.charAt(indexDigit13) + "\n";
indexDigit13++;
}
alert(result13);
alert("Próximo exercício!");

// 14) Calcular o fatorial de um número inteiro inserido pelo usuário usando o loop "while".
let numberFactorial14 = parseInt(prompt("Digite um número inteiro para calcular o fatorial:"));
let factorial14 = 1;
let countFactorial14 = 1;
while (countFactorial14 <= numberFactorial14) {
factorial14 *= countFactorial14;
countFactorial14++;
}
alert("O fatorial de " + numberFactorial14 + " é: " + factorial14);
alert("Próximo exercício!");

// 15) Ler o nome e a idade de várias pessoas usando o loop "while" até que o nome "fim" seja informado. Ao final, exibir a média das idades.
let sumAges15 = 0;
let countAges15 = 0;
let namePerson15;
do {
namePerson15 = prompt("Digite o nome da pessoa (ou 'fim' para encerrar):");
if (namePerson15.toLowerCase() !== "fim") {
let agePerson15 = parseInt(prompt("Digite a idade de " + namePerson15 + ":"));
sumAges15 += agePerson15;
countAges15++;
}
} while (namePerson15.toLowerCase() !== "fim");

if (countAges15 > 0) {
let averageAges15 = sumAges15 / countAges15;
alert("A média das idades das pessoas é: " + averageAges15);
} else {
alert("Nenhuma idade foi informada.");
}