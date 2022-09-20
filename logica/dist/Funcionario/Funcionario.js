"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("../Pessoa"));
//classe Funcionario de torna "pai" de Pessoa- herança
class Funcionario extends Pessoa_1.default {
    nome = 'Usuario';
    ri = '132345';
    cpf = '123.456.789-00';
    cadFuncionario(parametroNome, parametroRi, parametroCpf) {
        this.nome = parametroNome;
        this.ri = parametroRi;
        this.cpf = parametroCpf;
        console.log(`Funcionário ${this.nome} cadastrado com sucesso!`);
    }
}
exports.default = Funcionario;
