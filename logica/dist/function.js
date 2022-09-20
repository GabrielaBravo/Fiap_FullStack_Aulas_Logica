"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//sub-rotina: função está engessada, não há return
function escreveConsole() {
    console.log("Vai Palmeiras");
}
//function-  a função é livre
function escreve() {
    return "VAI PALMEIRAS";
}
//para aparecer resultado tem que "chamar" = escreve();
escreveConsole();
console.log(`o melhor time do mundo é o ${escreve()}`);
const empresa = "Avanade";
console.log(empresa.toUpperCase(), empresa.toLowerCase(), empresa.length);
//sexta-feira, 16 de setembro de 2022 14:38:00 BRT
const locale = 'pt-br';
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
};
console.log(new Date().toLocaleDateString(locale, options));
// como deixar mais organizado o código abaixo: cria uma pasta no ./src->botao direito>new folder>types>cria um novo arquivo chamado addressType.ts,onde vai entrar 
const user = {
    name: 'Joao',
    age: 32,
    email: 'joao@gmail.com',
    address: {
        street: "Rua ABC",
        number: 100,
        city: "Sampa",
        state: "SP",
    },
    cpf: "123.123.123-00"
};
