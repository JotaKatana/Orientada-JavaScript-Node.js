//---> estabelecimento que vende determinados produtos (Vamos fazer a forminha "padaria")

import { strict } from "assert"
import { stringify } from "querystring"

//---> Array de produto
type Produto = {
    nome: string
    valor: number
}

//--> Criando classe estabelecimento
//--> Tipo função mas você abre chave sem passaro argumento da função tipo:  class Estabelecimento() {   }
// class Estabelecimento {
//---> Forma que vai criar nosso cookie "Forma de bolo"
//---> Quais são as informações que ele vai receber
// --> Ele da como errado pois não colocamos essas propriedades aqui
//         private endereco: string
//         private tipo: string
//         private produtos: Produto[]

//         constructor(endereço: string, tipo: string, p: Produto[]) { //--> poderia por p = produto

// ---> This da própria classe não é geral
//         this.endereco = endereço
//         this.tipo = tipo
//         this.produtos = p
//     }
// }

class Estabelecimento {
        constructor(
            private endereco: string, 
            private tipo: string, 
            private produtos: Produto[]
    )
        {}

        retorna_name_product() {

            return this.produtos.map(produtos => produtos.nome)
        }
}


//--> Falo que quero gerar um novo estabelecimento, ai ele pede uns atributos
const padaria3 = new Estabelecimento(
    "Rua Dos Bananas, 324 - Bloco D", "alimentação", [
        {nome:"pão", valor: 0.8}, 
        {nome:"arroz", valor: 10.0}, 
        {nome:"leite", valor: 5.0}, 
        {nome:"brigadeiro", valor: 1.5}, 
        {nome:"carne-moida", valor: -20}
    ])

const padaria = {
    endereco: "Rua Dos Laranjais, 324 - Bloco D",
    tipo: "Alimentação",
    //--> regras, valor não pode ser 0 e nem negativo
    produtos: [
        {nome:"pão", valor: 0.8}, 
        {nome:"arroz", valor: 10.0}, 
        {nome:"leite", valor: 5.0}, 
        {nome:"doces", valor: 1.5}, 
        {nome:"carne-moida", valor: -20}
    ],

    const padaria2 = {
        endereco: "Rua Dos Laranjais, 324 - Bloco D",
        tipo: "Alimentação",
        //--> regras, valor não pode ser 0 e nem negativo
        produtos: [
            {nome:"pão", valor: 0.8}, 
            {nome:"arroz", valor: 10.0}, 
            {nome:"leite", valor: 5.0}, 
            {nome:"doces", valor: 1.5}, 
            {nome:"carne-moida", valor: -20}
        ],
    //---> Função que retorna o nome dos produtos
    //---> Oque ela faz?
    //---> Vou retornar padaria, nos produtos, pelo map, vou querer buscar o nome dos produtos
    retorna_name_product() {
        // return padaria.produtos.map(produtos => produtos.nome)
        //---> Conseguimos acessesar com o this esse contexto padaria e acessar o código
        return this.produtos.map(produtos => produtos.nome)
    }
}

console.log (padaria3)

console.log(padaria)
//---> Vou dar um console.log no reornar_name_product para aparecer oque eu quero
// console.log(padaria2.retorna_name_product())
console.log(padaria3.retorna_name_product())