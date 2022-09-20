"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    //Atributos - armazenam informações
    nome;
    idade;
    //métodos - executam ações
    constructor(parametroNome, parametroIdade) {
        this.nome = parametroNome;
        this.idade = parametroIdade;
        console.log(`A pessoa ${this.nome} de idade ${this.idade} está andando`);
    }
}
exports.default = Pessoa;
