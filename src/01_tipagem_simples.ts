const texto01 = "Olá, mundo!"; // Tipagem automática

const texto02: string = "Olá, mundo!";

const texto03 = <string>"Olá, mundo!";

const texto04 = "Olá, mundo!" as string;

const texto: string = "";
const numero: number = 0;
const v_f: boolean = true;
const objeto: Record<string, any> = {};
const lista: any[] = [];
const lista_de_texto: string[] = ["a", "b", "c"];
const nulo: null = null;
const indefinido: undefined = undefined;
const promise: Promise<any> = new Promise((resolve) => {});
const vazio: void = undefined;

const multiplos_tipos: string | number | boolean = "";
