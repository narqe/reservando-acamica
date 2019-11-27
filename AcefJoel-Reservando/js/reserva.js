var Reserva = function(horario, cantPersonas, precioXPersona, codigoDcto) {
    this.horario = horario;
    this.cantPersonas = cantPersonas;
    this.precioXPersona = precioXPersona;
    this.codigoDcto = codigoDcto;
}

Reserva.prototype.calcularPrecioBase = function() {
    var precioBase = this.cantPersonas * this.precioXPersona;
    return precioBase
}

Reserva.prototype.calcularDescuentos = function(){
    var desc1 = 0;
    var desc2 = 0;
    var desc3 = 0;
    var desc4 = 0;
    var desc5 = 0;
    var desc6 = 0;
    
    if(this.cantPersonas > 3 && this.cantPersonas <= 6){
        desc1 = (this.calcularPrecioBase() * 5 ) / 100;
    } if (this.cantPersonas > 6 && this.cantPersonas < 8){
        desc2 = Math.round(this.calcularPrecioBase() * 10) / 100;
    } if (this.cantPersonas >= 8) {  
        desc3 = Math.round(this.calcularPrecioBase() * 15) / 100;
    } 

    if (this.codigoDcto === "DES15") {
        desc4 = Math.round(this.calcularPrecioBase() * 15) / 100;
    } if (this.codigoDcto === "DES200") {
        desc5 = 200;
    } if (this.codigoDcto == "DES1") {
        desc6 = this.precioXPersona;
    }
    return descuentoFinal = desc1 +  desc2 +  desc3 +  desc4 +  desc5 +  desc6;
}

Reserva.prototype.calcularAdicionales = function(){
    var adicionales = 0;
    if(this.horario.getHours() >= 12 && this.horario.getHours() <= 13 || this.horario.getHours() >= 19 && this.horario.getHours() <= 20) {
        adicionales = Math.round(this.calcularPrecioBase() * 5 ) / 100;
    } else if (this.horario.getDay() >= 4){
        adicionales = Math.round(this.calcularPrecioBase() * 10) / 100;
    }  

    return adicionales;
}

Reserva.prototype.calcularPrecioTotal = function() {
    return precioFinal = this.calcularPrecioBase() - this.calcularDescuentos() + this.calcularAdicionales();
}


var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1")
var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")