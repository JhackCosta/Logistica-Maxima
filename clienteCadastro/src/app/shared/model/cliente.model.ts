import { Endereco } from "./endereco.model";


export class Cliente{
    codigo: number;
    nome: string;
    cnpj: string;
    endereco: Endereco

    constructor(codigo: number, nome:string , cnpj:string, endereco: Endereco){

        this.codigo = codigo;
        this.nome = nome;
        this.cnpj = cnpj;
        this.endereco = endereco;

    }

}