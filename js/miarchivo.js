const nombres = ["Juan", "Maria", "Eliana", "David"];
const nuevoNombre = prompt("Ingrese su nombre");
nombres.push(nuevoNombre);
console.log(nombres);
const masNombres = ["Sara", "Luis"];
const total = nombres.concat(masNombres);
console.log(total);
const ordenAlfabetico = total.sort();
console.log(ordenAlfabetico);
const cadena = ordenAlfabetico.join(" ");
console.log(cadena.toUpperCase());
const ordenInverso = total.sort((a, b) => { return b - a; });
console.log(ordenInverso.toUpperCase());