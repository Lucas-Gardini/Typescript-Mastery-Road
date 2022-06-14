// Converte todas as propriedades para opcionais

interface kovinski {
	nome: string;
	idade: number;
	salario: number;
}

type KovinskiParcial = Partial<kovinski>;

type KovinskiObrigatorio = Required<kovinski>;

type KovinskiSomenteLeitura = Readonly<kovinski>;
Usuario;
type KovinskiSomenteNomeEIdade = Pick<kovinski, "nome" | "idade">;

type KovinskiSemNome = Omit<kovinski, "nome">;
