// cáuculo da área de uma circunferência >> A = π . r²

// cáuculo de perímetro de uma circunferência >> P = 2 . π . r

let raio = Number(prompt("Inserir o valor do raio"))
const Pi = 3.14159

let calculo = Pi * raio * raio
alert("Valor da área: " + calculo)
calculo = 2 * Pi * raio
alert("Valor do perimetro: " + calculo)
