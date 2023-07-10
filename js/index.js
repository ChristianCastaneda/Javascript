const carrito = []

const productos = [{id: 1, nombre: 'LVP Conditioner', precio: 2200, stock: 5},
                   {id: 2, nombre: 'Pink Car Soap', precio: 2000, stock: 6},
                   {id: 3, nombre: 'APC', precio: 2000, stock: 10},
                   {id: 4, nombre: 'Claybar', precio: 1500, stock: 8},
                   {id: 5, nombre: 'Glass Cleaner', precio: 1800, stock: 6},
                   {id: 6, nombre: 'Grand Slam', precio: 2300, stock: 8},
                   {id: 7, nombre: 'Orange Degreaser', precio: 2400, stock: 9}, 
                   {id: 8, nombre: 'Finishing Polish', precio: 2500, stock: 7}]

function mostrarCuotas() {
    console.log('Todas nuestros productos tienen: 🚗🧽🏁')
    for (let i = 1; i<=6; i++){
        console.log(i + ' cuota(s) sin interes.')
    }
}

function mostrarPrecio(codigo) {
    switch (codigo) {
        case "1":
            console.log('El precio del LVP Conditioner es: $2200')
            break;
        case "2":
            console.log('El precio del Pink Car Soap es: $2000')
            break;
        case "3":
            console.log('El precio del APC es: $2000')
            break;
        case "4":
            console.log('El precio del Claybar es: $1500')
            break;
        case "5":
            console.log('El precio del Glass Cleaner es: $1800')
            break;
        case "6":
            console.log('El precio del Grand Slam es: $2300')
            break;
        case "7":
            console.log('El precio del Orange Degreaser es: $2400')
            break;
        case "8":
            console.log('El precio del Finishing Polish es: $2500')
            break;
        default:
            console.warn('😔 No se reconoce el codigo del producto, vuelve a intentarlo!')
            break;
    }
}

function consultarProducto () {
    let respuesta = confirm('¿Desea conocer los precios de los productos?')
    if (respuesta === true) {
        let codigo = prompt('Ingresa el codigo del producto deseado')
        mostrarPrecio(codigo)
        mostrarCuotas()
    } else{
        console.warn('Comprendemos, vuelve cuando lo desees! 😁👍')
    }
}

function buscarProducto(id) {
    let resultado = productos.find((producto)=> producto.id === parseInt(id))
    return resultado 
}

function finalizarCompra() {
    let subtotal = 0;
    for (let i = 0; i < carrito.length; i++) {
        subtotal += carrito[i].precio;
    }
    console.log('El costo total de la compra es: $' + subtotal)
    alert('Muchas gracias por tu compra! 👍😁')
}

function comprar() {
    let codigo = prompt('Ingresa el codigo del producto deseado:')
    let productoElegido = buscarProducto(codigo)
    if (productoElegido !== undefined) {
        carrito.push(productoElegido)
        alert('✅ ' + productoElegido.nombre + ' se agrego al carrito.')
        let respuesta = confirm('¿Desea agregar otro producto?')
        if (respuesta === true) {
            comprar()
        }else{
            console.table(carrito)
            finalizarCompra()
        }
    }else{
        alert('⛔ Error en el codigo del producto. Refresca para comenzar de nuevo')
    }
}