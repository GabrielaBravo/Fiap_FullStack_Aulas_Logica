import Pessoa from "../Pessoa";

//classe Funcionario de torna "pai" de Pessoa- herança
class Funcionario extends Pessoa{
    nome:string = 'Usuario';
    ri:string = '132345';
    cpf:string = '123.456.789-00';

    cadFuncionario(parametroNome: string, parametroRi: string, parametroCpf: string){
        this.nome = parametroNome;
        this.ri = parametroRi;
        this.cpf = parametroCpf;
        console.log(`Funcionário ${this.nome} cadastrado com sucesso!`);
    }
}

export default Funcionario
