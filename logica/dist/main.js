"use strict";
const nameUser = " Glaucio Daniel";
const idade = 37;
const statusUser = 1;
if (statusUser == 1) {
    console.log("Usuário");
}
else if (statusUser == 2) {
    console.log("Empresa");
}
else if (statusUser == 3) {
    console.log("Admin");
}
else {
    console.log("Usuário não cadastrado");
}
if (idade <= 2) {
    console.log("Bebê");
}
else if (idade <= 11) {
    console.log("Criança");
}
else if (idade <= 59) {
    console.log("Adulto");
}
else {
    console.log("Idoso");
}
console.log(`Seja bem vindo ao curso de Typescript`);
//1920
//1921
//1922
//.
//.
//2022
//estrutura de repetição
//for(let x = 1920) "let x = 1920 ->valor inicial" até ";" incremento" x <= yearFactory"" "x++ significa que vai de 1 em 1"
const yearFactory = new Date().getFullYear();
for (let x = 1920; x <= yearFactory; x++) {
    console.log(x);
}
//operadores incrementais e decrementais
// x++ x = x + 1 - incremento(vai somar mais um, mas após de terminar tudo)
// ++x x = x + 1 - pré-incremento( vai somar mais um, mas não vai mostrar o valor de x, vai mostrar x + 1)
// x-- x = x - 1 - decremento
// --x x = x - 1 - pré-decremento
//evercicio: mostrar ano descrescente de 1920 até 2022
console.log("--------");
for (let x = yearFactory; x >= 1920; x--) {
    console.log(x);
}
for (let x = yearFactory; x >= 1920; x -= 10) {
    console.log(x);
} //vai de 10 em 10 anos
for (let x = yearFactory; x >= 1920; x -= 10) {
    if (x >= 1990 && x < 2000) {
        continue;
    }
    console.log(x);
}
console.log("--------------------------");
for (let x = 0; x >= 10; x++) {
    if (x >= 3 && x <= 9) {
        if (x % 2 == 1 && x > 3) {
            console.log(".");
        }
        continue;
    }
    console.log(`2 x ${x} = ${x * 2}`);
}
for (let a = 10; a <= 20; a++) {
    if (a >= 12 && a < 18) {
        continue;
    }
    console.log(a);
}
