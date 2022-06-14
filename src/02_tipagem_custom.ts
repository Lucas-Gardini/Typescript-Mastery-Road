interface pessoa {
	nome: string;
	idade: number;
	salario: number;
	endereco?: endereco;
	filhos?: pessoa[];
}

interface endereco {
	logradouro: string;
	numero: number;
	cep: string;
	tipo: "residencial" | "comercial";
}

const KowalskiJr: pessoa = {
	nome: "Kowalski",
	idade: 18,
	salario: 9000,
	endereco: {
		cep: "12345-678",
		logradouro: "Rua dos Bobos",
		numero: 0,
		tipo: "comercial",
	},
	filhos: [
		{
			nome: "Kowalski Jr",
			idade: 6,
			salario: 0,
		},
		{
			nome: "Kowalska",
			idade: 8,
			salario: 0,
		},
	],
};

type nomes_ = "Lucas" | "Luiz" | "Thiago" | "Yago";

const Nome: nomes_ = "Lucas";
