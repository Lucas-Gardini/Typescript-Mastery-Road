interface kovinski {
	nome: string;
	idade: number;
	salario: number;
}

type KovinskiParcial = Partial<kovinski>;

type KovinskiObrigatorio = Required<kovinski>;

type KovinskiSomenteLeitura = Readonly<kovinski>;

type KovinskiSomenteNomeEIdade = Pick<kovinski, "nome" | "idade">;

type KovinskiSemNome = Omit<kovinski, "nome">;
