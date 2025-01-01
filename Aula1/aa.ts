class Carro {
	modelo: string;
    ano: number;
    cor: string;

	constructor(modelo: string, ano: number, cor: string) {
		this.modelo = modelo,
		this.ano = ano,
		this.cor = cor,
	}
	
	info() {
		console.log(`${this.modelo} ${this.ano} ano ${this.cor}`),
	}
}

const modelo = prompt("Digite o modelo do carro:")
const ano = parseInt(prompt("Digite o ano do carro:"))
const cor = prompt("Digite a cor do carro:")

const meuCarro = new Carro(modelo, ano, cor);
meuCarro.info();

/* Não modifique o código abaixo! */
export function execute(car) { return new Carro(car).info(); }