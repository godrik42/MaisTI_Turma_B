class Cliente {
    constructor(nome, email, telefone, CPF, carrinho = []) {
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
      this.CPF = CPF;
      this.carrinho = carrinho
    }

    getNome() {
      return this.nome
    }

    setNome(novoNome){
      this.nome = novoNome
    }

    getEmail() {
      return this.email
    }
    setEmail(novoEmail){
      this.email = novoEmail
    }

    getTelefone() {
      return this.telefone
    }
    setTelefone(novoTelefone){
      this.telefone = novoTelefone
    }

    getCPF() {
      return this.CPF
    }
    setCPF(novoCPF){
      this.CPF = novoCPF
    }

    getCarrinho() {
      return this.carrinho
    }

    comprarProduto(){
      return "não feito"
    }

    adicionarNoCarrinho(produto){
      this.carrinho.push(produto)
    }
}


class GerenciadorCliente{
  constructor(){
    this.lista = [];
  }

  cadastrarCliente(nome, email, telefone, cpf){
    let novoCliente = new Cliente(nome, email, telefone, cpf);
    this.lista.push(novoCliente);
    fs.writeFileSync(nomeArquivo, JSON.stringify(this.lista, null, 2));
  }

  buscarCliente(cpf){
    for (let cliente of this.lista){
      if (cliente.getCPF() === cpf){
        return cliente
      }
    }
    console.log("Cliente não encontrado")
    //return null
  }

  deletarCliente(cpf){
    let indice = this.lista.indexOf(this.buscarCliente(cpf));
    this.lista.splice(indice,1);
    console.log(this.lista)
  }
}


let gerencia = new GerenciadorCliente();

// INICIALIZANDO MODULO FILE SYSTEM
const fs = require("fs");
// NOME DO ARQUIVO QUE SERÁ CRIADO
let nomeArquivo = "dados.json";

// CADASTRANDO CLIENTES
gerencia.cadastrarCliente("joel" ,"1111@gmail.com"  ,"999999","123.456.789-00");
gerencia.cadastrarCliente("bene" ,"1111@gmail.com"  ,"999999","123.456.789-01");
gerencia.cadastrarCliente("Fabio","2222@hotmail.com","888888","123.456.789-02");
gerencia.cadastrarCliente("Janio","2223@hotmail.com","888888","123.456.789-03");

// DELETANDO CLIENTE JANIO
gerencia.deletarCliente("123.456.789-03")

// CONVERTENDO DADO
const dados = JSON.stringify(gerencia.lista, null, 2);
// ADICIONANDO AO FIM DO ARQUIVO
fs.appendFileSync(nomeArquivo, dados);
console.log("Arquivo criado!");