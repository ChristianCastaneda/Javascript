function mostrarCuotas() {
    console.log('Todas nuestros productos tienen: 🚗🧽🏁')
    for (let i = 1; i<=6; i++){
        console.log(i + ' cuota(s) sin interes.')
    }
}

function mostrarPrecio(codigo) {
    switch (codigo) {
        case "1":
            console.log('El precio del Backing es: $1000')
            break;
        case "2":
            console.log('El precio del Pulimento es: $1500')
            break;
        case "3":
            console.log('El precio del APC es: $2000')
            break;
        case "4":
            console.log('El precio del Claybar es: $3000')
            break;
        default:
            console.warn('😔 No se reconoce el codigo del producto')
            break;
    }
}

function consultarProducto () {
    let respuesta = confirm('¿Desea conocer los precios de los productos?')
    if (respuesta === true) {
        let codigo = prompt('Ingresa el codigo del producto')
        mostrarPrecio(codigo)
        mostrarCuotas()
    } else{
        console.warn('Comprendemos, vuelve cuando lo desees! 😁👍')
    }
}