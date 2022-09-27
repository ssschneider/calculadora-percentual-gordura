let btn = document.getElementById("btn");

let resultado = document.getElementById("resultado");

let peso = document.getElementById("peso");

let idade = document.getElementById("idade");

let triceps = document.getElementById("triceps");

let suprailiaca = document.getElementById("suprailiaca");

let coxa = document.getElementById("coxa");

let resultadoPercentualGordura = document.getElementById("percentual-gordura");

let resultadoMassaMagra = document.getElementById("massa-magra");

let resultadoMassaGorda = document.getElementById("massa-gorda");

btn.addEventListener("click", function () {
	calcularPercentualGordura();
	calcularMassaGorda();
	calcularMassaMagra();
	mostrarResultado();
});

function calcularPercentualGordura() {
	let somaDobras =
		parseInt(triceps.value) +
		parseInt(suprailiaca.value) +
		parseInt(coxa.value);
	let quadradoDobras = somaDobras * somaDobras;
	let densidadeCorporal =
		1.0994921 -
		0.0009929 * somaDobras +
		0.0000023 * quadradoDobras -
		0.0001392 * idade.value;
	let percentualGordura = (4.95 / densidadeCorporal - 4.5) * 100;
	resultadoPercentualGordura.innerHTML += percentualGordura.toFixed(2);
}

function calcularMassaGorda() {
	let percentualGorduraDecimal = resultadoPercentualGordura.innerHTML / 100;
	let massaGorda = parseInt(peso.value) * percentualGorduraDecimal;
	resultadoMassaGorda.innerHTML += massaGorda.toFixed(3);
}

function calcularMassaMagra() {
	let massaMagra = parseInt(peso.value) - resultadoMassaGorda.innerHTML;
	resultadoMassaMagra.innerHTML += massaMagra.toFixed(3);
}

function mostrarResultado() {
	resultado.classList.add("mostrar");
}
