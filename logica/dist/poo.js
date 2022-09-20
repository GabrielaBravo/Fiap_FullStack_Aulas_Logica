"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
//criando um objeto que instancia ou representa a classe Pessoa.
//tudo que precisamos, usamos o objeto funcionario.
const funcionario = new Pessoa_1.default("João", 23);
//chamando o método andar do objeto funcionario.
