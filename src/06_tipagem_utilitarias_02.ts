// Converte todas as propriedades para opcionais

type nomes = "Lucas" | "Luiz" | "Thiago" | "Yago";

type HomeNavigationPages = Exclude<nomes, "Lucas">;

type usuario = nomes | null | undefined;

type usuarioNaoNulo = NonNullable<usuario>;

function getUsuario(id: number): Promise<usuario> {
	return new Promise((resolve) => {
		resolve("Lucas" as usuario);
	});
}
type StickerResponse = ReturnType<typeof getUsuario>;

class Usuario {
	nome: usuario;
}

type UsuarioClasseTipo = InstanceType<typeof Usuario>;
