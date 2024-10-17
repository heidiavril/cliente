/* 10. Calcular estadísticas avanzadas de un array de objetos

Enunciado:

Imagina que tienes un array de objetos que representan productos, donde cada producto tiene un nombre,
un precio, y un stock (cantidad disponible). Necesitas implementar una función llamada calcularEstadisticas que:

- Filtre solo los productos cuyo stock sea mayor que 0.
- Aplique un descuento del 10% a los precios de los productos filtrados.
- Devuelva un objeto con las siguientes estadísticas:
    + Precio total: Suma de los precios de los productos filtrados (después del descuento).
    + Producto más caro: El nombre del producto más caro (después del descuento).
    + Media geométrica del precio: La media geométrica de los precios de los productos filtrados. */

// Array de productos
const productos = [
    { nombre: "Laptop", precio: 1000, stock: 5 },
    { nombre: "Teléfono", precio: 500, stock: 0 },
    { nombre: "Tablet", precio: 300, stock: 3 },
    { nombre: "Auriculares", precio: 100, stock: 10 }
];

function calcularEstadisticas(productos) {
    let newProd = productos.filter(prod => prod.stock > 0); // filtro los productos q sí tienen stock
    newProd = newProd.map(prod => ({                        // hago el descuento a todos
        ...prod,
        precio: prod.precio * 0.9})
    );
    let prodPrecio = newProd.map(prod => prod.precio); // creo un array para los precios de los productos

    let goal1 = prodPrecio.reduce((e1, e2) => e1 + e2); // sumo los productos

    let mayorPrecio = Math.max(...prodPrecio); // obtengo el precio mayor
    let goal2 = newProd.filter(producto => producto.precio == mayorPrecio); // obtengo el producto de mayor valor

    let goal3 = Math.pow(prodPrecio.reduce((e1, e2) => e1 * e2), (1/prodPrecio.length)); // media geométrica

    let finals = [goal1, goal2, goal3];
    return finals;
}

let obj = calcularEstadisticas(productos);
console.log(obj);