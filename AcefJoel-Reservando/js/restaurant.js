var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {
    var arrayFiltrado = this.horarios.filter(function(element) { 
        return element !== horarioReservado;
    })
    return arrayFiltrado;
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.sumatoria = function(arrayParaSumar){
    var sumatoria = 0;
    for (var i = 0; i < arrayParaSumar.length; i++) {
        sumatoria += arrayParaSumar[i]
    }
    return sumatoria
}

Restaurant.prototype.promedio = function(suma, cantCalificaciones){
    var promedio = suma / cantCalificaciones.length;
    return Math.round(promedio * 10) / 10;
}

Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        var suma = this.sumatoria(this.calificaciones);
        return this.promedio(suma, this.calificaciones)
    }

}