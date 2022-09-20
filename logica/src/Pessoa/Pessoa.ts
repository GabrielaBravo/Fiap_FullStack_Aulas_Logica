class Pessoa {
    //Atributos - armazenam informações
    nome: string;
    idade: number;

    //métodos - executam ações
    constructor(parametroNome:string,  parametroIdade: number) {
        this.nome = parametroNome;
        this.idade = parametroIdade;
        console.log(`A pessoa ${this.nome} de idade ${this.idade} está andando`);
    }
}

export default Pessoa;
