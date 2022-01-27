let auto = require ('./modulos/autos')  

console.log (auto)

let concensionaria = {
    autos: auto,

    buscarAuto: function (busca) {  // Buscar coche segun la patente
       let buscar = auto.filter ((coche) => coche.patente == busca) // coche puede ser cualquier cosa Y GUARDA EL OBJETO QUE TENGA LA PATENTE SOLICITADA, acordarse que lo que va adentro de map,filter,foreach y reduce es una funcion
       let esta = buscar.length == 0 ? null : buscar [0] // Si no esta la patente retorna null sino retorna coche
       return esta},
 
    venderAuto : function (patente) { // si busca el coche lo vende
        let buscar = this.buscarAuto(patente) // buscar el coche por la patente y guarda EL OBJETO ACORDARSE
        return buscar != null ? buscar.vendido = true : console.log('No esta el coche para la venta') // si esta lo marca como vendido, sino te avisan que el coche no esta  
    },

    autosParaLaVenta : function() { // listado de coches que no se vendieron
     let autitos = this.autos.filter ((coche) => coche.vendido == false) // filtra dentro del array de objetos (this.) los que tengan vendido como falso, acordarse que lo que va adentro de map,filter,foreach y reduce es una funcion
     return autitos == 0 ? 'no hay autitos para vender' : autitos // te avisa si no hay coches y caso contrario los que hay
    },

    autosNuevos : function () {  //buscar autos con menos de 100km
        let autosVender = this.autosParaLaVenta() // guarda array de autos para vender
        return autosVender.filter ((coche) => coche.km < 100) //Busca dentro del array de objetos los que tengan km menos a 100
    },

    listaDeVentas : function() { // cuanta plata se gano
        let autosVendidos = this.autos.filter((coche) => coche.vendido == true) // filtra los coches que si se vendieron
        let plataGanada = autosVendidos.map((plata) => plata.precio) // un array con la lista de a lo que se vendio los coches
        let sumar = plataGanada.length == 0 ? 0 : plataGanada.reduce((a,b) => a+b) // una sumatoria de todos los coches que se vendieron
        return sumar // devuelve el total de plata que se genero vendiendo coches, seria el total de ventas del ejercicio de PG
    },
    
    puedeComprar : function (auto,persona) { // puede comprar el cliente el coche solicitado ?
        let autoPrecio = auto.precio // variable que retorna el precio del coche solicitado
        let autoPrecioCuota = autoPrecio / auto.cuota // variable que otorga el precio que sale una cuota mensual
        return  autoPrecio <= persona.capacidadDePagoTotal && autoPrecioCuota <= persona.capacidadDePagoEnCuotas ? true : false // si la capacidad total de pago Y el precio de cada cuota es menor a lo que pueda pagar el cliente entonces si puede comprarlo... caso contrario no

    },

    autosQuePuedeComprar: function (persona) { // listado de coches que el cliente puede comprar
        let autosVenta = this.autosParaLaVenta() // variable que tiene el listado de vehiculos para vender
        let puedeComprar = autosVenta.filter (coche => {return this.puedeComprar(coche, persona) == true}) // filtra los coches para vender de tal manera que si da true en la funcion puede comprar entonces entra en la ultima variable (osea que se puiede comprar)
        return puedeComprar // variable con el listado de coches que puede comprar el cliente
    }
    
}
