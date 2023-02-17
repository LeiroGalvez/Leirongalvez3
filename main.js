const nombres = ["chamarras", "tenis", "gorras", "pantalones"];
const datosEnServicios = ["nombre", "categoria", "clase", "valor"];
const servicios = [
{nombre: "chamarras", categoria: "evento", clase: "A", valor : 10000},
{nombre: "tenis", categoria: "evento", clase: "A", valor : 8000},
{nombre: "gorras", categoria: "evento", clase: "A", valor : 12000},
{nombre: "pantalones", categoria: "evento", clase: "A", valor : 100000},
 ];

let opcion = "";
 while (!nombres.includes(opcion)) {
   opcion = prompt("Escoja un articulo", nombres);
 if (!nombres.includes(opcion)) {
     alert("coloque una de las opcionnes");
   }
 }
 alert(`perfecto la opcion indicada es ${opcion}`);

let opcion2 = "";
 while (!datosEnServicios.includes(opcion2)) {
    opcion2 = prompt(`¿Que cosa ${opcion} desea conocer ?`, datosEnServicios);
 if (!datosEnServicios.includes(opcion2)) {
    alert("coloque una de las opcionnes");
}
}

let resultado = "";

servicios.forEach((servicio) => {
    if (servicio.nombre === opcion) {
        resultado = servicio[opcion2];
    }
});

alert(`El/a ${opcion2}, De ${opcion} Es: ${resultado}`);