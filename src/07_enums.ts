enum eStatus {
	Iniciado, // Iniciando no 0
	Pendente,
	NaFila,
	Processando,
	Processado,
	ComErro,
}

const statusIniciado = eStatus.Iniciado; // 0
const statusPendente = eStatus.Pendente; // 1
const statusNaFila = eStatus.NaFila; // 2
const statusProcessando = eStatus.Processando; // 3
const statusProcessado = eStatus.Processado; // 4
const statusComErro = eStatus.ComErro; // 5

enum sStatus {
	Iniciado = "iniciado",
	Pendente = "pendente",
	NaFila = "na fila",
	Processando = "processando",
	Processado = "processado",
	ComErro = "com erro",
}

const statusIniciado2 = sStatus.Iniciado; // "iniciado"
const statusPendente2 = sStatus.Pendente; // "pendente"
const statusNaFila2 = sStatus.NaFila; // "na fila"
const statusProcessando2 = sStatus.Processando; // "processando"
const statusProcessado2 = sStatus.Processado; // "processado"
const statusComErro2 = sStatus.ComErro; // "com erro"
