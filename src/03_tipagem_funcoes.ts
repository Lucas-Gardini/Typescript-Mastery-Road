function imprimir(texto: string): void {
	console.log(texto);
}

imprimir("Olá, mundo!");

function ehNulo(valor: string | null | undefined): boolean {
	if (valor === null || valor === undefined) {
		return true;
	} else {
		return false;
	}
}

const texto_: string = ehNulo(null);

ehNulo(55);
