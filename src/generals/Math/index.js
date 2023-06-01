// Cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado
});

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}
console.groupEnd("Cuadrado");

console.group("Triángulo");
// Triangulos
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (ladoTriangulo1 * baseTriangulo) / 2;
console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  baseTriangulo,
  perimetroTriangulo,
  areaTriangulo
});

console.groupEnd("Triángulo");

console.group("Circle");

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;
const circunferencia = diametroCirculo * PI;
const areaCirculo = (diametroCirculo ** 2) * PI;

console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  areaCirculo,
});

function calcularCirculo(radio) {
  return {
    radio: radio,
    diametroCirculo: Math.pow(radio,2),
    circunferencia: diametroCirculo * Math.PI,
    areaCirculo: Math.pow(diametroCirculo,2) * Math.PI
  };
}

console.groupEnd("Circle");