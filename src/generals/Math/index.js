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

console.groupEnd("Triángulo")