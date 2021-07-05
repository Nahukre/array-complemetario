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



const opcionesDeInversion = [
    { nombre: "Dolar blue", valor: 170 },
    { nombre: "Bitcoin", valor: 7000000 },
    { nombre: "Testa cedear", valor: 7500 },
    { nombre: "Apple cedear", valor: 3500 },
    { nombre: "Disney cedear", valor: 4500 },
];
opcionesDeInversion.sort((a, b) => {
    if (a.valor < b.valor) {
        return -1;
    }
    if (a.valor > b.valor) {
        return 1;
    }
    return 0;
});
console.log(opcionesDeInversion);